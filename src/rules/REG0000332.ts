import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";
import { getColPlaTsCas } from "./getColPlaTsCas";


export const REG0000332: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    data['*CON-A'] = await getColPlaTsCas(data, data['*COL']);
    
    return await functions.asyncFinalDataObj(data);
};
