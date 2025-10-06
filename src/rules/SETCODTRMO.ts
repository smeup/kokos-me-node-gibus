import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";
import { getInfoMot } from "./getInfoMot";


export const SETCODTRMO: Rule = async (data, finalize = true) => {

    let filterVariables: any = (await import("./libGibus/functionVariables")).niente;

    if (finalize) data = await functions.asyncInitDataObj(data, filterVariables, '');

    let prodMotore = (await getInfoMot(data)).prodMotore;
    if (prodMotore === 'CHERUBINI') data['*CM'] = '210164';
    if (prodMotore === 'SOMFY') data['*CM'] = '210189';

    let retObj = data;
    if (finalize) {
        retObj = await functions.asyncFinalDataObj(data)
    }

    return retObj;
};
