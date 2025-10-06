import { _isMessageFieldWithRole } from "@langchain/core/messages";
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";

export const REG0013648: Rule = async (data) => {

    let filterVariables: any = (await import("./libGibus/functionVariables")).niente;

    data = await functions.asyncInitDataObj(data, filterVariables, '');

    data['*CF'] = 0;
    let arr = ['2', '3'];
    if (arr.includes(data['§TYP_P1'])) data['*CF'] += 4;
    if (arr.includes(data['§TYP_P2'])) data['*CF'] += 4;

    return await functions.asyncFinalDataObj(data);
};
