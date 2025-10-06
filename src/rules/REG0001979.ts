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

export const REG0001979: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001979
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = 'P053'
    // #2
    // COND:
    // *COL = '0055'
    // THEN:
    // *SET *CON-A = 'P055'
    // #3
    // COND:
    // *COL = '0069'
    // THEN:
    // *SET *CON-A = 'P069'
    // #4
    // COND:
    // *COL = '0073'
    // THEN:
    // *SET *CON-A = 'P073'
    // """
    // RESPONSE:
    //#1
    vars.setCON_A('P053');
    //#2
    if (vars.getCOL() == '0055') {
        vars.setCON_A('P055');
    }
    //#3
    if (vars.getCOL() == '0069') {
        vars.setCON_A('P069');
    }
    //#4
    if (vars.getCOL() == '0073') {
        vars.setCON_A('P073');
    }
    // GENERATED

    return vars.output;
};
