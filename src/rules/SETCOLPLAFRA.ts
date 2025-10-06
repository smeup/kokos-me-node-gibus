import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";
import { getColPlaFrangi } from "./getColPlaFrangi";
import { getColFrangi } from "./getColFrangi";


export const SETCOLPLAFRA: Rule = async (data, finalize = true) => {
    let filterVariables: any = (await import("./libGibus/functionVariables")).niente;

    if (finalize) data = await functions.asyncInitDataObj(data, filterVariables, '');
    
    let colFrangi = await getColFrangi(data);

    data['*CON-A'] = await getColPlaFrangi(colFrangi, data);

    let retObj = data;
    if (finalize) {
        retObj = await functions.asyncFinalDataObj(data)
    }

    return retObj;

};
