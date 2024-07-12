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

export const REG0006592: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006592
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = §VERN_PLAST
    // #2
    // COND:
    // *CON-A = 'P072'
    // THEN:
    // *SET *CON-A = 'P073'
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('§VERN_PLAST'));
    //#2
    if (vars.getCON_A() == 'P072') {
        vars.setCON_A('P073');
    }
    // GENERATED

    return vars.output;
};
