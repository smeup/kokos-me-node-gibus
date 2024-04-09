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

export const REG0007474: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0007474
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #1
    // #2
    // COND:
    // §_LIN = 'DE'
    // THEN:
    // *SET *CF = #0
    // #3
    // COND:
    // §_LIN = 'FR'
    // THEN:
    // *SET *CF = #0
    // #4
    // COND:
    // §_LIN = 'ES'
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(1);
    
    //#2
    if (vars.get('_LIN') == 'DE') {
        vars.setCF(0);
    }
    
    //#3
    if (vars.get('_LIN') == 'FR') {
        vars.setCF(0);
    }
    
    //#4
    if (vars.get('_LIN') == 'ES') {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
