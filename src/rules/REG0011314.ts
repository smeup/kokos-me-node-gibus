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

export const REG0011314: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011314
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // #2
    // COND:
    // §VERN_1_COM = '0055'
    // THEN:
    // *SET *CON-A = '0055'
    // #3
    // COND:
    // §VERN_1_COM = '0073'
    // THEN:
    // *SET *CON-A = '0073'
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('§VERN_1_COM'));
    //#2
    if (vars.get('§VERN_1_COM') == '0055') {
        vars.setCON_A('0055');
    }
    //#3
    if (vars.get('§VERN_1_COM') == '0073') {
        vars.setCON_A('0073');
    }
    // GENERATED

    return vars.output;
};
