import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";
import { getInfoMot } from "./getInfoMot";


export const SETCODMOT: Rule = async (data, finalize = true) => {

    let filterVariables: any = (await import("./libGibus/functionVariables")).niente;

    if (finalize) data = await functions.asyncInitDataObj(data, filterVariables, '');

    data['*CM'] = (await getInfoMot(data)).codMotore;

    let retObj = data;
    if (finalize) {
        retObj = await functions.asyncFinalDataObj(data)
    }

    return retObj;
};
