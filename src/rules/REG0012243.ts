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

export const REG0012243: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012243
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = *COL
    // *SET *CON-B = *LUNG
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('*COL'));
    vars.setCON_B(vars.get('*LUNG'));
    // GENERATED

    return vars.output;
};
