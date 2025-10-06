/**
 * This rule represents a template implementation of a rule.
 * It takes an input value and performs some operations on it using the Variables class.
 * The result is returned as the output value.
 * 
 * @param iv The input value for the rule.
 * @returns The output value after applying the rule.
 */
import { Rule } from "../types/general";
import { functions } from "./libGibus/functions";

export const REG0013551_NEW: Rule = async (data) => {

    let filterVariables = (await import("./libGibus/functionVariables")).VE;

    await functions.asyncInitDataObj(data, filterVariables, '');

    let coef = 0;
    let tiTra = data["§TI_TRA_ANT_T01"];
    if (tiTra == '60X100') {
        let nModuli = data["§N_MODULI"];
        coef = 0 + +nModuli; //nModuli è stringa
    }

    data["*CF"] = coef;

    return await functions.asyncFinalDataObj(data);
};
