import { config } from './config.js';
import { systemVariables } from './systemVariables.js';

export const functions = { initDataObj, finalDataObj };

function initDataObj(data: any, filterVariables: any, functionName: string) {
    let filteringVariables: any = [];

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

    const dataObj = {
        ...data,
        get: function (variable: any) {
            //controllo se il nome della variabile sta nelle filter variables
            if (!filteringVariables.includes(variable)) {
                //come segnalo l'anomalia?
                console.log({ unknownVariable: variable, in: functionName });
            }
            return this[variable];
        }

    };

    data = dataObj;

    let coefLogic = config.coefficiente;
    data[coefLogic.intKey] = data[coefLogic.extKey]

    let initConfigValLogic: any = config.extToIntConfigLogic;

    initConfigValLogic.forEach((elem: any) => {
        let schemaKey = elem.schemaKey;
        let schema: any = config[schemaKey]
        let csvCodeKey = elem.csvCodeKey;
        let csvCode = data[csvCodeKey];

        let csvObj: Record<string, object> = schema.find((elem: any) => elem.code === csvCode);
        if (!csvObj) {
            csvObj = schema.find((elem: any) => elem.code === '*');
        }
        let partList: any = csvObj.partList;
        partList.sort((a: any, b: any) => { a.idx - b.idx });
        setInternalConfigVal(data, partList);
    });

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

            if (extElem.type === 'string') {
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

function finalDataObj(data: any) {

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
            data.xfvali = '';
            return data;
        }
    }

    let intToExtConfigLogic = config.intToExtConfigLogic;


    calcCoefficiente(data, config);

    let validElem = true

    if (config.coefficiente) {
        if (config.coefficiente.validKey) {
            if (!data[config.coefficiente.validKey]) {
                validElem = false;
            }
        }
    }

    if (validElem) {
        intToExtConfigLogic.forEach((elem: any) => {
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
                    if (!csvObj) {
                        csvObj = schema.find((elem: any) => elem.code === '*');
                    }
                    let partList = csvObj.partList;
                    setExtConfigVal(data, partList)
                }
            } else {
                let extKey = elem.defaultExtConfigKey;
                data[extKey] = "";
            }
        });
    }

    calcComponente(data, config);

    calcFinalExport(data, config);

    return data;
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

function calcCoefficiente(data: any, config: any) {
    let coefficiente = config.coefficiente;
    let intCf = coefficiente.intElem
    let extCf = coefficiente.extElem
    let intCfKey = intCf.key;
    let extCfKey = extCf.key;
    let newValue = coefficiente.newValue;
    let validKey = coefficiente.validKey;

    if (data[intCfKey]) {//modifico i dati esterni solo se c'è stato almeno un set sui valori
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

function setExtConfigVal(data: any, partList: any) {

    partList.forEach((elem: any) => {
        let extElem = elem.extElem;
        let intElem = elem.intElem;

        if ((extElem) && (intElem)) {
            let extKey = extElem.Key;
            if (extKey) {
                if (extElem.type === 'string') data[extKey] = '';
                if (extElem.type === 'number') data[extKey] = 0;
            }
        }

    });

    partList.forEach((elem: any) => {
        let extElem = elem.extElem;
        let intElem = elem.intElem;
        if ((extElem) && (intElem)) {
            let extKey = extElem.key;
            let intKey = intElem.key;
            if (intKey) {
                let theVal = data[intKey];
                if (extElem.type === 'number') {
                    theVal = parseFloat(theVal);
                    if (!theVal) {
                        //todo questo è chiaramente un errore
                        //le formule non hanno popolato il valore
                    }
                }
                if (extElem.type === 'string') {
                    if (extElem.format === 'zeroPadded') {
                        theVal = parseFloat(theVal);
                        theVal = Math.round(theVal * 10 * extElem.dec);
                        theVal = theVal.toString();
                        theVal = theVal.padStart(extElem.length, '0');
                    }
                    theVal = theVal.toString();
                }
                data[extKey] += theVal;
            }
        }
    });

}

