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

export const REG0000858: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000858
    // REQUEST:
    // """
    // #1
    // COND:
    // §ALBER_TRASM_D1 > #0
    // THEN:
    // *SET *CON-A = '0051'
    // *SET *CON-B = §ALBER_TRASM_D1
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§ALBER_TRASM_D1') > 0) {
        vars.setCON_A('0051');
        vars.setCON_B(vars.get('§ALBER_TRASM_D1'));
    } else {
        vars.setLG('');
    }
    
    // GENERATED

    return vars.output;
};
