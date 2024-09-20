module.exports = { initInputVal, setOutputVal };

function initInputVal(data) {

    let config = require('./config.json');

    let initValLogic = config.initValLogic;

    initValLogic.forEach(elem => {
        let schemaKey = elem.schemaKey;
        let schema = config[schemaKey]
        let csvCodeKey = elem.csvCodeKey;
        let csvCode = data[csvCodeKey];

        let csvObj = schema.find((elem) => elem.code === csvCode);
        if (!csvObj) {
            csvObj = schema.find((elem) => elem.code === '*');
        }
        let partList = csvObj.partList;
        partList.sort((a, b) => { a.idx - b.idx });
        setIntVal(data, partList);
    });


}

function setIntVal(data, partList) {
    let extObj = {};

    partList.forEach(elem => {
        let extElem = elem.extElem;
        if (extElem) {
            let extKey = extElem.key;
            if (extKey) {
                extObj[extKey] = data[extKey];
            }
        }

    });

    partList.forEach(elem => {
        let extElem = elem.extElem;
        let intElem = elem.intElem;

        if ((extElem) && (intElem)) {
            let extKey = extElem.key;
            let intKey = intElem.key;

            if (extElem.type === 'string') {
                let theLength = extElem.length;
                let theVal = extObj[extKey].substring(0, theLength);
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

function setOutputVal(data) {
    let config = require('./config.json');

    let outputLogic = config.outputLogic;

    outputLogic.forEach(elem => {
        let schemaKey = elem.schemaKey;
        let schema = config[schemaKey]
        let csvCodeKey = elem.csvCodeKey;
        let csvCode = data[csvCodeKey];

        let csvObj = schema.find((elem) => elem.code === csvCode);
        if (!csvObj) {
            csvObj = schema.find((elem) => elem.code === '*');
        }
        let partList = csvObj.partList;
        setExtVal(data, partList)
    });

    calcCoefficiente(data, config);

    calcComponente(data, config);

    calcFinalExport(data, config);

    return data;
}

function calcComponente(data, config) {
    let componente = config.componente;
    let intCm = componente.intElem
    let extCm = componente.extElem
    let intCmKey = intCm.key;
    let extCmKey = extCm.key;
    if (data[intCmKey]) {
        data[extCmKey] = data[intCmKey]
    }
}

function calcCoefficiente(data, config) {
    let coefficiente = config.coefficiente;
    let intCf = coefficiente.intElem
    let extCf = coefficiente.extElem
    let intCfKey = intCf.key;
    let extCfKey = extCf.key;
    let newValue = coefficiente.newValue;

    if (data[intCfKey]) {
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

function calcFinalExport(data,config){
    let filterArray = config.exportKeyList;
    if (filterArray) {
        for (let key in data) {
            if (!filterArray.includes(key)) {
                delete data[key];
            }
        }
    }
}

function setExtVal(data, partList) {

    partList.forEach(elem => {
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

    partList.forEach(elem => {
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

