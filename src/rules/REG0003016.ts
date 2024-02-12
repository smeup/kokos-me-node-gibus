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

export const REG0003016: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003016
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = *COL
    // """
    // RESPONSE:
    if (vars.get('*COL')) {
        vars.setCON_A(vars.get('*COL'));
    }
    // GENERATED

    return vars.output;
};
