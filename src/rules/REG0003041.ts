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

export const REG0003041: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003041
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = 'P073'
    // #2
    // COND:
    // *COL = '0055'
    // THEN:
    // *SET *CON-A = 'P065'
    // #3
    // COND:
    // (*COL = '0053') OR (*COL = '0069') OR (*COL = '0073')
    // THEN:
    // *SET *CON-A = 'P068'
    // """
    // RESPONSE:
    //#1
    vars.setCON_A('P073');
    
    //#2
    if (vars.getCOL() == '0055') {
        vars.setCON_A('P065');
    }
    
    //#3
    if (vars.getCOL() == '0053' || vars.getCOL() == '0069' || vars.getCOL() == '0073') {
        vars.setCON_A('P068');
    }
    // GENERATED

    return vars.output;
};
