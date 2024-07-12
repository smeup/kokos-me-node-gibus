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

export const REG0001603: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001603
    // REQUEST:
    // """
    // #1
    // COND:
    // §LATO_LED = 'SX'
    // THEN:
    // *SET *LG = ''
    // ELSE:
    // *SET *CON-A = §VERN_PLAST
    // """
    // RESPONSE:
    //#1
    if (vars.get('§LATO_LED') == 'SX') {
        vars.setLG('');
    } else {
        vars.setCON_A(vars.get('§VERN_PLAST'));
    }
    // GENERATED

    return vars.output;
};
