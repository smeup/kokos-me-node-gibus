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

export const REG0012717: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012717
    // REQUEST:
    // """
    // #1
    // COND:
    // §_LIN = 'ES'
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §_LIN = 'FR'
    // THEN:
    // *SET *CF = #0
    // #3
    // COND:
    // §_LIN = 'DE'
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    if (vars.get('_LIN') === 'ES') {
        vars.setCF(0);
    }
    
    //#2
    if (vars.get('_LIN') === 'FR') {
        vars.setCF(0);
    }
    
    //#3
    if (vars.get('_LIN') === 'DE') {
        vars.setCF(0);
    }
    
    // GENERATED

    return vars.output;
};
