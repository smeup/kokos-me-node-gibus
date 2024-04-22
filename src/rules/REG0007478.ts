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

export const REG0007478: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0007478
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // §_LIN='FR'
    // THEN:
    // *SET *CF=#1
    // #3
    // COND:
    // §MANUALE_CE = ''
    // THEN:
    // *SET *CF=#0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('_LIN') == 'FR') {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§MANUALE_CE') == '') {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
