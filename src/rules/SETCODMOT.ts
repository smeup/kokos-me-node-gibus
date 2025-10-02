import { _isMessageFieldWithRole } from "@langchain/core/messages.js";
import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";
import { getInfoMot } from "./getInfoMot.js";


export const SETCODMOT: Rule = async (data, finalize = true) => {

    let filterVariables: any = (await import("./libGibus/functionVariables.js")).niente;

    if (finalize) data = await functions.asyncInitDataObj(data, filterVariables, '');

    data['*CM'] = (await getInfoMot(data)).codMotore;

    let retObj = data;
    if (finalize) {
        retObj = await functions.asyncFinalDataObj(data)
    }

    return retObj;
};
