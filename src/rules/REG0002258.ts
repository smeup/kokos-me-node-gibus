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

export const REG0002258: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002258
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = '0073'
    // *SET *CON-B = §L_BRACCETTI
    // """
    // RESPONSE:
    //#1
    vars.setCON_A('0073');
    vars.setCON_B(vars.get('§L_BRACCETTI'));
    // GENERATED

    return vars.output;
};
