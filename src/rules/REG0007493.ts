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

export const REG0007493: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0007493
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#1
    // #2
    // COND:
    // §_LIN = 'FR' OR §_LIN = 'IT' OR §_LIN = 'DE'
    // THEN:
    // *SET *CF=#0
    // #3
    // COND:
    // §MANUALE_CE = ''
    // THEN:
    // *SET *CF=#0
    // """
    // RESPONSE:
    //#1
    vars.setCF(1);
    
    //#2
    if (vars.get('_LIN') == 'FR' || vars.get('_LIN') == 'IT' || vars.get('_LIN') == 'DE') {
        vars.setCF(0);
    }
    
    //#3
    if (vars.get('MANUALE_CE') == '') {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
