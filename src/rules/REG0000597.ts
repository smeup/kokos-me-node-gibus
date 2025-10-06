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

export const REG0000597: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000597
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = 'P073'
    // #2
    // COND:
    // *COL = 'P065'
    // THEN:
    // *SET *CON-A = 'P065'
    // #3
    // COND:
    // (*COL = 'P068')
    // THEN:
    // *SET *CON-A = 'P068'
    // """
    // RESPONSE:
    //#1
    vars.setCON_A('P073');
    //#2
    if (vars.getCOL() == 'P065') {
        vars.setCON_A('P065');
    }
    //#3
    if (vars.getCOL() == 'P068') {
        vars.setCON_A('P068');
    }
    // GENERATED

    return vars.output;
};
