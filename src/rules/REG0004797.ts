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

export const REG0004797: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004797
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *D_L=#14
    // *SET *D_P=#9
    // *SET *D_H=#6
    // """
    // RESPONSE:
    //#1
    vars.setD_L(14);
    vars.setD_P(9);
    vars.setD_H(6);
    // GENERATED

    return vars.output;
};
