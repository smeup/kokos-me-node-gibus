import { _isMessageFieldWithRole } from "@langchain/core/messages.js";
import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";
import { getColPlaStr } from "./getColPlaStr.js";
import { getColStr } from "./getColStr.js";


export const SETCOLPLASTR: Rule = async (data, finalize = true) => {
    let filterVariables: any = (await import("./libGibus/functionVariables.js")).niente;

    if (finalize) data = await functions.asyncInitDataObj(data, filterVariables, '');
    
    let colStr = await getColStr(data);

    data['*CON-A'] = await getColPlaStr(colStr, data);

    let retObj = data;
    if (finalize) {
        retObj = await functions.asyncFinalDataObj(data)
    }

    return retObj;

};
