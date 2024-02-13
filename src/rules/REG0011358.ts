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

export const REG0011358: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011358
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = §N_PAS_CAV_T01
    // #2
    // THEN:
    // *SET *CON-A = 'P072'
    // #3
    // COND:
    // §VR_ABB = '01'
    // THEN:
    // *SET *CON-A = 'P055'
    // #4
    // COND:
    // §VR_ABB = '02'
    // THEN:
    // *SET *CON-A = 'P055'
    // """
    // RESPONSE:
    //#1
    vars.setCF(vars.get('§N_PAS_CAV_T01'));
    //#2
    vars.setCON_A('P072');
    //#3
    if (vars.get('§VR_ABB') == '01') {
        vars.setCON_A('P055');
    }
    //#4
    if (vars.get('§VR_ABB') == '02') {
        vars.setCON_A('P055');
    }
    // GENERATED

    return vars.output;
};
