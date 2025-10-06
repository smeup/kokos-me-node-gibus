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

export const REG0004582: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004582
    // REQUEST:
    // """
    // #1
    // COND:
    // §TI_FIX_TRA_TET = '03'
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§TI_FIX_TRA_TET') == '03') {
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
