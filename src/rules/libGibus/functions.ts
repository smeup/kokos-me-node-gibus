import { config } from './config';
import { systemVariables } from './systemVariables';
import { connection01 } from "../libGibus/connections";

export const functions = { asyncInitDataObj, asyncFinalDataObj, getOriginalVal };

async function getOriginalVal(connection: any, originalVal: string) {
    let selectString;
    selectString = "SELECT * ";
    selectString += "FROM CXCONF0F ";
    selectString += "WHERE E§CONF = ?";

    let selectResult;
    try {
        selectResult = await connection.query(selectString, [originalVal]);
    } catch {
        console.dir('select fallita, getOriginalVal');
        //todo logare gli errori    
    }

    let retVal = ''
    if (Array.isArray(selectResult)) {
        if (selectResult[0]) {
            retVal = selectResult[0]['E§DATI'];
        }
    }
    return retVal;
}

function getDistPartObj(data: any, csvObj: any) {
    let partObj;
    let dataKey = csvObj.partListKey;
    let theKey = data[dataKey];
    let partObjs = csvObj.partObjs;

    if (partObjs) {
        partObj = partObjs[theKey];
    }

    return partObj;
}

function getParentPartListAlt(data: any, csvObj: any) {
    let partList;
    let start = csvObj.altPartStart;
    let end = csvObj.altPartEnd;
    let parentCfgKey = csvObj.altElemKey;



    if (parentCfgKey) {
        let parentCfg = data[parentCfgKey];

        if (parentCfg) {
            let altPartKey = parentCfg.substring(start, end);
            if (altPartKey) {
                let altPartObj = csvObj.altPartObjs[altPartKey];
                if (altPartObj) partList = altPartObj.partList;
            }
        }
    }
    return partList;
}

async function asyncInitDataObj(data: any, filterVariables: any, functionName: string) {
    let filteringVariables: any;

    if (filterVariables) {
        //vado a passare direttamente un array monolivello
        //filterVariables.forEach((elemList : any) => filteringVariables = [...filteringVariables, ...elemList]);
        filteringVariables = filterVariables;
        filteringVariables = [...filteringVariables, ...systemVariables];


        const filtered = Object.keys(data)
            .filter(key => filteringVariables.includes(key))
            .reduce((obj, key) => {
                return {
                    ...obj,
                    [key]: data[key]
                };
            }, {});

        data = filtered;
    };


    const dataObj = {//aggiungo il metodo get
        ...data,
        get: function (variable: any) {
            //controllo se il nome della variabile sta nelle filter variables
            if (filteringVariables) {
                if (!filteringVariables.includes(variable)) {
                    //come segnalo l'anomalia?
                    // console.log({ unknownVariable: variable, in: functionName });
                }
            }
            return this[variable];
        }
    }

    data = dataObj;

    let coefLogic = config.coefficiente;
    data[coefLogic.intKey] = data[coefLogic.extKey]

    let initConfigValLogic: any = config.extToIntConfigLogic;

    for (const elem of initConfigValLogic) {
        let schemaKey = elem.schemaKey;
        let schema: any = config[schemaKey];
        let partList: any;
        let csvCodeKey = elem.csvCodeKey;
        let csvCode = data[csvCodeKey];

        let csvObj: any = schema.find((elem: any) => elem.code === csvCode);

        if (!csvObj) {
            csvObj = schema.find((elem: any) => elem.code === '*');
            partList = csvObj.partList;
        } else {

            if (csvObj.aliasCode) csvObj = schema.find((elem: any) => elem.code === csvObj.aliasCode);


            if (csvObj.altPartList) {
                partList = getParentPartListAlt(data, csvObj);
                if (!partList) continue;
                //può succedere ad esempio con 006 e ovviamente non c'è valore sulla riga della distinta, e per sbaglio
                //ha l'inizializzazione dei valori tramite distcfg (xconfi)

                let altElemKey: string = csvObj.altElemKey;
                let connection = connection01();
                data[altElemKey] = await getOriginalVal(connection, data[altElemKey]);
            } else {
                partList = csvObj.partList;
            }
        }

        partList.sort((a: any, b: any) => { a.idx - b.idx });
        setInternalConfigVal(data, partList);
    }

    return data;
}

function setInternalConfigVal(data: any, partList: any) {
    let extObj: Record<string, string> = {};

    partList.forEach((elem: any) => {
        let extElem = elem.extElem;
        if (extElem) {
            let extKey = extElem.key;
            if (extKey) {
                extObj[extKey] = data[extKey];
            }
        }
    });

    partList.forEach((elem: any) => {
        let extElem = elem.extElem;
        let intElem = elem.intElem;

        if ((extElem) && (intElem)) {
            let extKey = extElem.key;
            let intKey = intElem.key;

            if (extElem.type === 'string' && extObj[extKey]) {
                let theLength = extElem.length;
                let theVal: any = extObj[extKey].substring(0, theLength);
                if (theVal) {
                    if (extElem.format === 'zeroPadded') {
                        theVal = parseFloat(theVal);
                        theVal = theVal / (10 * extElem.dec);
                        theVal = theVal.toString();
                    }
                    if (intElem.type === 'number') {
                        theVal = parseFloat(theVal);
                    }
                    data[intKey] = theVal;
                    extObj[extKey] = extObj[extKey].substring(theLength);
                }
            }
        }
    });

}

async function asyncFinalDataObj(data: any) {

    let isCiclo = false;
    if (data['R§CRSE'] == 'GIBKC') isCiclo = true;//nei cicli ho una variabile
    let isDist = false;
    if (data['D§CRSE'] == 'GIBK') isDist = true;//nelle distinte un'altra

    //in questo punto innesterei il filtro per i ricambi
    //in data proveniente dal payload metterei il tag dei ricambi
    //nella formula metterei la lista dei tag che lasciano attiva la formula
    if (data.tag) {
        let ok = false;
        if (data.tagList) {
            if (data.tagList.includes(data.tag)) {
                ok = true;
            }
        }
        if (!ok) {
            data.XFVALI = '';
            return data;
        }
    }

    let intToExtConfigLogic = config.intToExtConfigLogic;

    //calcola il coefficiente e se *CF = 0 pulisce XFVALI (rompe il legame)
    if (isDist) calcCoefficiente(data, config);

    let validElem = true

    if (config.coefficiente) {
        if (config.coefficiente.validKey) {
            if (!data[config.coefficiente.validKey]) {
                validElem = false;
            }
        }
    }

    if (validElem) {
        for (const elem of intToExtConfigLogic) {
            let schemaKey = elem.schemaKey; //al momento solo distCfg, non prevedo più distinte di ritorno
            let schema = config[schemaKey]
            let csvCodeKey = elem.csvCodeKey;
            let csvCode = data[csvCodeKey];
            if (csvCode) {
                if (csvCode == "") {
                    let extKey = intToExtConfigLogic.defaultExtConfigKey;
                    data[extKey] = "";
                } else { //c'è un codice configurazione non vuoto
                    let csvObj = schema.find((elem: any) => elem.code === csvCode);
                    if (csvObj) {
                        if (csvObj.aliasCode) {
                            csvObj = schema.find((elem: any) => elem.code === csvObj.aliasCode);
                        }

                    }

                    if (!csvObj) {
                        csvObj = schema.find((elem: any) => elem.code === '*');
                    }

                    let partList;
                    let altPartObj;
                    if (csvObj.altPartList) {
                        let partObj = getDistPartObj(data, csvObj);
                        altPartObj = partObj.altPartObj;
                        partList = partObj.partList;
                    } else{
                        partList = csvObj.partList;
                    }
                
                    
                    await setExtConfigVal(data, partList, altPartObj)
                }
            } else {
                let extKey = elem.defaultExtConfigKey;
                data[extKey] = "";
            }
        }
    }

    if (isDist) calcComponente(data, config);

    if (isCiclo) calcTempiCiclo(data, config);

    calcLG(data); //vale sia per i cicli che per le distinte

    calcVari(data, config);

    calcFinalExport(data, config);

    return data;
}

function calcLG(data: any) {
    if ((data['*LG'] == '') ||
        (data['*LG'] == 0) ||
        (data['*LG'] == '0')) data['XFVALI'] = '';
}

function calcComponente(data: any, config: any) {
    let componente = config.componente;
    let intCm = componente.intElem
    let extCm = componente.extElem
    let intCmKey = intCm.key;
    let extCmKey = extCm.key;
    if (data[intCmKey]) {
        data[extCmKey] = data[intCmKey]
    }
}

function calcVari(data: any, config: any) {
    let variList = config.vari;
    variList.forEach((elem: any) => {
        let intCm = elem.intElem
        let extCm = elem.extElem
        let intCmKey = intCm.key;
        let extCmKey = extCm.key;
        if (data[intCmKey]) {
            data[extCmKey] = data[intCmKey]
        }
    })
}


//funzione a parte.... potrebbe esserci il problema dell'unità misura tempo
function calcTempiCiclo(data: any, config: any) {
    let tempiList = config.tempiCiclo;
    tempiList.forEach((elem: any) => {
        let intCm = elem.intElem
        let extCm = elem.extElem
        let intCmKey = intCm.key;
        let extCmKey = extCm.key;
        if (data[intCmKey]) {
            data[extCmKey] = data[intCmKey]
        }
    })
}

function calcCoefficiente(data: any, config: any) {
    let coefficiente = config.coefficiente;
    let intCf = coefficiente.intElem
    let extCf = coefficiente.extElem
    let intCfKey = intCf.key;
    let extCfKey = extCf.key;
    let newValue = coefficiente.newValue;
    let validKey = coefficiente.validKey;

    if (data[intCfKey] || data[intCfKey] == 0) {//modifico i dati esterni solo se c'è stato almeno un set sui valori
        if (data[intCfKey] > 0) {
            if (newValue) {
                data[extCfKey] = data[intCfKey];
            } else {
                data[extCfKey] *= data[intCfKey];
            }
        } else {
            data[extCfKey] = 0;
            data[validKey] = '';
        }
    }
}

function calcFinalExport(data: any, config: any) {
    let filterArray = config.exportKeyList;
    if (filterArray) {
        for (let key in data) {
            if (!filterArray.includes(key)) {
                delete data[key];
            }
        }
    }
}

function resetDataValue(partList: any, data: any) {
    partList.forEach((elem: any) => {
        let extElem = elem.extElem;
        let intElem = elem.intElem;

        if ((extElem) && (intElem)) {
            let extKey = extElem.key;
            if (extKey) {
                if (extElem.type === 'string') data[extKey] = '';
                if (extElem.type === 'number') data[extKey] = 0;

            }
        }
    });
}

async function setDataValue(connection: any, partList: any, data: any) {

    for (const elem of partList) {
        let extElem = elem.extElem;
        let intElem = elem.intElem;
        if ((extElem) && (intElem)) {
            let extKey = extElem.key;
            let intKey = intElem.key;
            if (intKey) {
                let theVal;
                if (intKey === 'autoIncrement') {
                    //qua devo per forza vedere cosa ha depositato sulla chiave esterna finora costruita
                    let extVal = data[extKey];
                    let maxVal = await getMaxVal(connection, extVal);
                    typeof maxVal === 'number' ? theVal = maxVal : theVal = parseFloat(maxVal);
                    theVal++;
                }
                else { theVal = data[intKey]; }

                if (extElem.type === 'number') {
                    theVal = parseFloat(theVal);
                    if (!theVal) {
                        //todo questo è chiaramente un errore
                        //le formule non hanno popolato il valore
                    }
                }
                if (extElem.type === 'string') {
                    if (!theVal) theVal = 0;//todo anche questo è un errore
                    if (extElem.format === 'zeroPadded') {
                        if (!(typeof theVal === 'number')) theVal = parseFloat(theVal);
                        if (extElem.dec) theVal = Math.round(theVal * 10 * extElem.dec);
                        theVal = theVal.toString();
                        theVal = theVal.padStart(extElem.length, '0');
                    }

                    theVal = theVal.toString();
                }

                data[extKey] += theVal;

            } else {
                if (extElem.format === 'empty') {
                    if (extElem.length > 0) {
                        //" ".repeat non funziona potrebbe essere qualcosa con la transpilazione
                        //uso questo artefizio di template literal con spazio (esadecimale)
                        data[extKey] += `${'\xa0'.repeat(extElem.length)}`;
                    }
                }
            }
        }
    };
}


async function getMaxVal(connection: any, theVal: string) {
    let maxVal = 0;
    let searchVal = theVal + '%';

    let selectString;
    selectString = "SELECT * ";
    selectString += "FROM CXCONF0F ";
    selectString += "WHERE E§CONF like ?";

    let selectResult;
    try {
        selectResult = await connection.query(selectString, [searchVal]);
    } catch {
        console.dir('select fallita, getMaxVal');
        //todo logare gli errori    
    }

    for (const record of selectResult) {
        let newVal = 0;
        let charToTrim = theVal.length;
        let charToCheck = record['E§CONF'].slice(charToTrim);
        if (!isNaN(charToCheck)) newVal = parseInt(charToCheck);
        if (newVal > maxVal) maxVal = newVal;
    }

    return maxVal;
}


async function getExistingValue(connection: any, originalVal: string) {
    let retVal = '';
    let selectString;
    //lettura parametro 023 Fam.Modelli per Carico Reparti dell'articolo
    selectString = "SELECT * ";
    selectString += "FROM CXCONF0F ";
    selectString += "WHERE E§DATI = ?";

    let selectResult;
    try {
        selectResult = await connection.query(selectString, [originalVal]);
    } catch {
        console.dir('select fallita, getExistingValue');
        //todo logare gli errori    
    }


    //PRENDO IL PRIMO SE C'è
    if (Array.isArray(selectResult)) {
        if (selectResult[0]) retVal = selectResult[0]['E§CONF'];
    }

    return retVal;
}

async function insertTranscodeRecord(connection: any, alternativeVal: string, originalVal: string) {
    let insertString;
    //lettura parametro 023 Fam.Modelli per Carico Reparti dell'articolo
    insertString = 'INSERT INTO CXCONF0F ("E§CONF", "E§DATI") VALUES (? , ?)';
    let insertResult;
    try {
        insertResult = await connection.query(insertString, [alternativeVal, originalVal]);

    } catch (e : any){
        console.dir({cosa : 'insert fallita, insertTranscodeRecord', errore : e.message});

    } finally{
        //questo sistema funzionerebbe con la classe, ma nella libreria non è presente
      //  connection.release();
    }

}

async function setExtConfigVal(data: any, partList: any, altPartObj: any) {
    let connection = connection01();

    resetDataValue(partList, data);
    await setDataValue(connection, partList, data);

    if (altPartObj) {
        //devo andare a calcolare il valore che viene restituito a smeup
        //dato che partlist è andato a scrivere un valore temporaneo
        let originalKey = altPartObj.originalKey;
        let originalVal = data[originalKey];
        let alternativeKey = altPartObj.alternativeKey;
        //prima devo controllare se il valore originale è già presente nella tabella
        let alternativeVal;
        let existingValue = await getExistingValue(connection, originalVal);

        if (existingValue) {
            alternativeVal = existingValue;
        } else {
            let altPartList = altPartObj.altPartList;
            resetDataValue(altPartList, data);

            await setDataValue(connection, altPartList, data);

            alternativeVal = data[alternativeKey];
            //todo qua devo andare ad aggiornare la tabella di trascodifica
            await insertTranscodeRecord(connection, alternativeVal, originalVal);
        }

        data[alternativeKey] = alternativeVal;

        if (altPartObj.addKeyObjList) {
            for (const addKeyObj of altPartObj.addKeyObjList) {
                let extKey = addKeyObj.extKey;
                let intKey = addKeyObj.intKey;
                let startPos = addKeyObj.startPos;
                let endPos = addKeyObj.endPos;
                data[extKey] = data[intKey].substring(startPos, endPos);
            }
        }
    }
}

