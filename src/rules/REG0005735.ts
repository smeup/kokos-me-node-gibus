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

export const REG0005735: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005735
    // REQUEST:
    // """
    // #1
    // COND:
    // §TI_ATVEL_02='ALBA'
    // ELSE:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§TI_ATVEL_02') == 'ALBA') {
    } else {
        vars.setLG("");
    }
    // GENERATED

    return vars.output;
};
