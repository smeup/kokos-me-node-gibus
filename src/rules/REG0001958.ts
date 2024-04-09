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

export const REG0001958: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001958
    // REQUEST:
    // """
    // #1
    // COND:
    // *COL = '0055'
    // THEN:
    // *SET *CON-A = 'P055'
    // ELSE:
    // *SET *CON-A = 'P072'
    // #2
    // THEN:
    // *SET *CON-A = 'P072'
    // #3
    // COND:
    // §VERN_1_COM = '0055' OR §VR_ABB = '01'
    // THEN:
    // *SET *CON-A = 'P055'
    // #4
    // COND:
    // §VERN_PLAST = 'P055'
    // THEN:
    // *SET *CON-A = 'P055'
    // """
    // RESPONSE:
    //#1
    if (getCOL() == '0055') {
        vars.setCON_A('P055');
    } else {
        vars.setCON_A('P072');
    }
    //#2
    vars.setCON_A('P072');
    //#3
    if ((vars.get('§VERN_1_COM') == '0055') || (vars.get('§VR_ABB') == '01')) {
        vars.setCON_A('P055');
    }
    //#4
    if (vars.get('§VERN_PLAST') == 'P055') {
        vars.setCON_A('P055');
    }
    // GENERATED

    return vars.output;
};
