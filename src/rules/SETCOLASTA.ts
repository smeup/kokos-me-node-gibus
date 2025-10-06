import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";
import { getColAsta } from "./getColAsta"


export const SETCOLASTA: Rule = async (data, finalize = true) => {

    let filterVariables: any = (await import("./libGibus/functionVariables")).niente;

    if (finalize) data = await functions.asyncInitDataObj(data, filterVariables, '');

    data['*CON-A'] = await getColAsta(data);

    let retObj = data;
    if (finalize) {
        retObj = await functions.asyncFinalDataObj(data)
    }

    return retObj;
};
