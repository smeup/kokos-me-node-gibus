/**
 * This rule represents a template implementation of a rule.
 * It takes an input value and performs some operations on it using the Variables class.
 * The result is returned as the output value.
 * 
 * @param iv The input value for the rule.
 * @returns The output value after applying the rule.
 */
import { Rule } from "../types/general.js";
import { Variables } from "../converter/variables.js";

export const REG0008463: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008463
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = §VERN_PLAST
    // *SET *CF = §NR_BRACCI
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('§VERN_PLAST'));
    vars.setCF(vars.get('§NR_BRACCI'));
    // GENERATED

    return vars.output;
};
