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

export const REG0000861: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000861
    // REQUEST:
    // """
    // #1
    // COND:
    // §N_GIUNZIONE_D > #0
    // THEN:
    // *SET *CON-A = '0051'
    // *SET *CON-B = §L_GIUNZIONE_C
    // *SET *CF = §N_GIUNZIONE_D
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§N_GIUNZIONE_D') > 0) {
        vars.setCON_A('0051');
        vars.setCON_B(vars.get('§L_GIUNZIONE_C'));
        vars.setCF(vars.get('§N_GIUNZIONE_D'));
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
