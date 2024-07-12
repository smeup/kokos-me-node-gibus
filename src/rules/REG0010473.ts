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

export const REG0010473: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010473
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = '0051'
    // #2
    // THEN:
    // *SET *CON-B = #450
    // #3
    // COND:
    // §LARG_MED > #450
    // THEN:
    // *SET *CON-B = #550
    // """
    // RESPONSE:
    //#1
    vars.setCON_A('0051');
    
    //#2
    vars.setCON_B(450);
    
    //#3
    if (vars.get('§LARG_MED') > 450) {
        vars.setCON_B(550);
    }
    // GENERATED

    return vars.output;
};
