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

export const REG0011676: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011676
    // REQUEST:
    // """
    // #1
    // COND:
    // §TELO_ASS = '02'
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §TELO_ASS = '03'
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    if (vars.get('§TELO_ASS') === '02') {
        vars.setCF(0);
    }
    
    //#2
    if (vars.get('§TELO_ASS') === '03') {
        vars.setCF(0);
    }
    
    // GENERATED

    return vars.output;
};
