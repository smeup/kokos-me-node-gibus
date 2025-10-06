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

export const REG0010891: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010891
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = '0073'
    // #2
    // COND:
    // §VR_ABB_LAM = '01'
    // THEN:
    // *SET *CON-A = '0055'
    // #3
    // COND:
    // §VR_ABB_LAM = '02'
    // THEN:
    // *SET *CON-A = '0053'
    // """
    // RESPONSE:
    //#1
    vars.setCON_A('0073');
    //#2
    if (vars.get('§VR_ABB_LAM') == '01') {
        vars.setCON_A('0055');
    }
    //#3
    if (vars.get('§VR_ABB_LAM') == '02') {
        vars.setCON_A('0053');
    }
    // GENERATED

    return vars.output;
};
