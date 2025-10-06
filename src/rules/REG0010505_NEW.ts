import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";

export const REG0010505_NEW: Rule = async (data) => {

    let filterVariables = (await import("./libGibus/functionVariables")).VE;

    await functions.asyncInitDataObj(data, filterVariables, '');

    return await functions.asyncFinalDataObj(data);
};
