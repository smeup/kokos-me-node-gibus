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

export const REG0012764: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012764
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = 'P187'
    // """
    // RESPONSE:
    //#1
    vars.setCON_A('P187');
    // GENERATED

    return vars.output;
};
