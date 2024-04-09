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

export const REG0010896: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010896
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = *COL
    // *SET *CON-B = #590
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.getCOL());
    vars.setCON_B(590);
    // GENERATED

    return vars.output;
};
