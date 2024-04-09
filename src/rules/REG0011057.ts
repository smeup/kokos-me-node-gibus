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

export const REG0011057: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011057
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §SPOR_TET = '138.5'
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §SPOR_TET = '151.5'
    // THEN:
    // *SET *CF = #1
    // #4
    // COND:
    // §SPOR_TET = '164.5'
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§SPOR_TET') == '138.5') {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§SPOR_TET') == '151.5') {
        vars.setCF(1);
    }
    
    //#4
    if (vars.get('§SPOR_TET') == '164.5') {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
