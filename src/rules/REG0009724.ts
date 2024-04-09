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

export const REG0009724: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009724
    // REQUEST:
    // """
    // #1
    // COND:
    // §SS_PCS = '3PCS_B' AND §SSLIN = 'EN'
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§SS_PCS') == '3PCS_B' && vars.get('§SSLIN') == 'EN') {
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
