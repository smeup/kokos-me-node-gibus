
import { Rule } from "../types/general.js";
import { functions } from "./libGibus/functions.js";

export const REG0011424_NEW: Rule = async (data) => {

    let filterVariables = (await import("./libGibus/functionVariables.js")).VE;

    await functions.asyncInitDataObj(data, filterVariables, '');

    data["*CF"] = 2;
    data["*CON-A"] = 'P000';
    data["*CON-B"] = '300';

    return await functions.asyncFinalDataObj(data);
};
