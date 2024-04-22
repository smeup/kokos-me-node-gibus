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

export const REG0000525: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000525
    // REQUEST:
    // """
    // #1
    // COND:
    // §L_FRONTALE_SUP > #0
    // THEN:
    // *SET *CON-A = §VERN_FRONTALE
    // *SET *CON-B = §L_FRONTALE_SUP
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§L_FRONTALE_SUP') > 0) {
        vars.setCON_A(vars.get('§VERN_FRONTALE'));
        vars.setCON_B(vars.get('§L_FRONTALE_SUP'));
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
