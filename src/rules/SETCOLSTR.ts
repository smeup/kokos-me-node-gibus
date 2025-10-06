import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";
import { getColStr } from "./getColStr"


export const SETCOLSTR: Rule = async (data, finalize = true) => {

    let filterVariables: any = (await import("./libGibus/functionVariables")).niente;

    if (finalize) data = await functions.asyncInitDataObj(data, filterVariables, '');

    data['*CON-A'] = await getColStr(data);

    let retObj = data;
    if (finalize) {
        retObj = await functions.asyncFinalDataObj(data)
    }

    return retObj;
};
