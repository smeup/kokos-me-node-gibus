import { _isMessageFieldWithRole } from "@langchain/core/messages.js";
import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";
import { getColPlaFrangi } from "./getColPlaFrangi.js";
import { getColFrangi } from "./getColFrangi.js";


export const SETCOLPLAFRA: Rule = async (data, finalize = true) => {
    let filterVariables: any = (await import("./libGibus/functionVariables.js")).niente;

    if (finalize) data = await functions.asyncInitDataObj(data, filterVariables, '');
    
    let colFrangi = await getColFrangi(data);

    data['*CON-A'] = await getColPlaFrangi(colFrangi, data);

    let retObj = data;
    if (finalize) {
        retObj = await functions.asyncFinalDataObj(data)
    }

    return retObj;

};
