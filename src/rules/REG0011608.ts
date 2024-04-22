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

export const REG0011608: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011608
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #1
    // #2
    // COND:
    // §NR_BAR_LUN > #0
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(1);
    
    //#2
    if (vars.get('§NR_BAR_LUN') > 0) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
