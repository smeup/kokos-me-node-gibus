import { _isMessageFieldWithRole } from "@langchain/core/messages.js";
import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";
import { getColPlaTsCas } from "./getColPlaTsCas.js";


export const REG0000332: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables.js")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    data['*CON-A'] = await getColPlaTsCas(data, data['*COL']);
    
    return await functions.asyncFinalDataObj(data);
};
