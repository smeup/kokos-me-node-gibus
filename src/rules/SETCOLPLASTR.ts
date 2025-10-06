import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";
import { getColPlaStr } from "./getColPlaStr";
import { getColStr } from "./getColStr";


export const SETCOLPLASTR: Rule = async (data, finalize = true) => {
    let filterVariables: any = (await import("./libGibus/functionVariables")).niente;

    if (finalize) data = await functions.asyncInitDataObj(data, filterVariables, '');
    
    let colStr = await getColStr(data);

    data['*CON-A'] = await getColPlaStr(colStr, data);

    let retObj = data;
    if (finalize) {
        retObj = await functions.asyncFinalDataObj(data)
    }

    return retObj;

};
