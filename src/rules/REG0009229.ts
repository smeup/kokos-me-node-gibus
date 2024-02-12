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

export const REG0009229: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009229
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = '0073'
    // #2
    // COND:
    // §VR_PLA_LAM = 'P053'
    // THEN:
    // *SET *CON-A = '0053'
    // #3
    // COND:
    // §VR_PLA_LAM = 'P055'
    // THEN:
    // *SET *CON-A = '0055'
    // """
    // RESPONSE:
    //#1
    vars.setCON_A('0073');
    //#2
    if (vars.get('§VR_PLA_LAM') == 'P053') {
        vars.setCON_A('0053');
    }
    //#3
    if (vars.get('§VR_PLA_LAM') == 'P055') {
        vars.setCON_A('0055');
    }
    // GENERATED

    return vars.output;
};
