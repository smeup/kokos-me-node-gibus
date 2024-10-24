import {config} from './config.js';

export const functions = { setInternalVal, setExternalVal };

function setInternalVal(data: any) {

    let coefLogic = config.coefficiente;
    data[coefLogic.intKey] = data[coefLogic.extKey]

    let initConfigValLogic : any = config.extToIntConfigLogic;

    initConfigValLogic.forEach((elem : any)  => {
        let schemaKey = elem.schemaKey;
        let schema : any = config[schemaKey]
        let csvCodeKey = elem.csvCodeKey;
        let csvCode = data[csvCodeKey];

        let csvObj : Record<string, object> = schema.find((elem : any) => elem.code === csvCode);
        if (!csvObj) {
            csvObj = schema.find((elem: any) => elem.code === '*');
        }
        let partList : any = csvObj.partList;
        partList.sort((a : any, b : any) => { a.idx - b.idx });
        setInternalConfigVal(data, partList);
    });


}

function setInternalConfigVal(data : any, partList : any) {
    let extObj :Record<string, string> = {};

    partList.forEach((elem : any) => {
        let extElem = elem.extElem;
        if (extElem) {
            let extKey = extElem.key;
            if (extKey) {
                extObj[extKey] = data[extKey];
            }
        }

    });

    partList.forEach((elem : any)=> {
        let extElem = elem.extElem;
        let intElem = elem.intElem;

        if ((extElem) && (intElem)) {
            let extKey = extElem.key;
            let intKey = intElem.key;

            if (extElem.type === 'string') {
                let theLength = extElem.length;
                let theVal : any = extObj[extKey].substring(0, theLength);
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

    });

}

function setExternalVal(data : any) {

    let intToExtConfigLogic = config.intToExtConfigLogic;

    intToExtConfigLogic.forEach((elem : any) => {
        let schemaKey = elem.schemaKey; //al momento solo distCfg, non prevedo più distinte di ritorno
        let schema = config[schemaKey]
        let csvCodeKey = elem.csvCodeKey;
        let csvCode = data[csvCodeKey];
        if (csvCode){
            if(csvCode == ""){
                let extKey = intToExtConfigLogic.defaultExtConfigKey;
                data[extKey] = "";
            }else{ //c'è un codice configurazione non vuoto
                let csvObj = schema.find((elem : any) => elem.code === csvCode);
                if (!csvObj) {
                    csvObj = schema.find((elem : any) => elem.code === '*');
                }
                let partList = csvObj.partList;
                setExtConfigVal(data, partList)
            }
        }else{
            let extKey = elem.defaultExtConfigKey;
            data[extKey] = "";
        }
    });

    calcCoefficiente(data, config);

    calcComponente(data, config);

    calcFinalExport(data, config);

    return data;
}

function calcComponente(data : any , config : any) {
    let componente = config.componente;
    let intCm = componente.intElem
    let extCm = componente.extElem
    let intCmKey = intCm.key;
    let extCmKey = extCm.key;
    if (data[intCmKey]) {
        data[extCmKey] = data[intCmKey]
    }
}

function calcCoefficiente(data : any, config : any) {
    let coefficiente = config.coefficiente;
    let intCf = coefficiente.intElem
    let extCf = coefficiente.extElem
    let intCfKey = intCf.key;
    let extCfKey = extCf.key;
    let newValue = coefficiente.newValue;

    if(data[intCfKey]){//modifico i dati esterni solo se c'è stato almeno un set sui valori
        if (data[intCfKey] > 0) {
            if (newValue) {
                data[extCfKey] = data[intCfKey];
            } else {
                data[extCfKey] *= data[intCfKey];
            }
        } else {
            data['D§COEF'] = 0;
            data['XFVALI'] = '';
        }
    }
}

function calcFinalExport(data : any,config : any){
    let filterArray = config.exportKeyList;
    if (filterArray) {
        for (let key in data) {
            if (!filterArray.includes(key)) {
                delete data[key];
            }
        }
    }
}

function setExtConfigVal(data : any, partList : any) {

    partList.forEach((elem : any) => {
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

    partList.forEach((elem : any) => {
        let extElem = elem.extElem;
        let intElem = elem.intElem;
        if ((extElem) && (intElem)) {
            let extKey = extElem.key;
            let intKey = intElem.key;
            if (intKey) {
                let theVal = data[intKey];
                if (extElem.type === 'number') {
                    theVal = parseFloat(theVal);
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

