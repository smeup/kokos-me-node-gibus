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

export const REG0009796: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009796
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §NR_SLAVE_A = #6
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §NR_SLAVE_A = #5
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§NR_SLAVE_A') == 6) {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§NR_SLAVE_A') == 5) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
