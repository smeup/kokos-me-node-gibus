import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";

export const REG0010537_NEW: Rule = async (data) => {

    let filterVariables = (await import("./libGibus/functionVariables.js")).VE;

    await functions.asyncInitDataObj(data, filterVariables, '');

    data['*CF'] = data['§N_ANTE'] * 2;
    data['*CON-A'] = 'P051';

    return await functions.asyncFinalDataObj(data);
};
