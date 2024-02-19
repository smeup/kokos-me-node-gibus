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

export const REG0006939: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006939
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = *COL
    // *SET *CON-B = #600
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.getCOL());
    vars.setCON_B(600);
    // GENERATED

    return vars.output;
};
