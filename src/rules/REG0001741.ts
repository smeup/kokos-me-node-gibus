/**
 * This rule represents a template implementation of a rule.
 * It takes an input value and performs some operations on it using the Variables class.
 * The result is returned as the output value.
 * 
 * @param iv The input value for the rule.
 * @returns The output value after applying the rule.
 */
import { Rule } from "../types/general";
import { Variables } from "../converter/variables";

export const REG0001741: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001741
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = *COL
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.getCOL());
    // GENERATED

    return vars.output;
};
