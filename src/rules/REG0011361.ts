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

export const REG0011361: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011361
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = §N_RAC_T05
    // """
    // RESPONSE:
    //#1
    vars.setCF(vars.get('§N_RAC_T05'));
    // GENERATED

    return vars.output;
};
