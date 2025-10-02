import { _isMessageFieldWithRole } from "@langchain/core/messages.js";
import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";
import {getColFrangi} from "./getColFrangi.js"


export const SETCOLFRANGI: Rule = async (data, finalize = true) => {

    let filterVariables: any = (await import("./libGibus/functionVariables.js")).niente;

    if (finalize) data = await functions.asyncInitDataObj(data, filterVariables, '');

    data['*CON-A'] = await getColFrangi(data);

    let retObj = data;
    if (finalize) {
        retObj = await functions.asyncFinalDataObj(data)
    }

    return retObj;

};
