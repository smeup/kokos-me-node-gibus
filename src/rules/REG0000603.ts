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

export const REG0000603: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000603
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = *COL
    // #2
    // THEN:
    // *SET *CON-A = *COL
    // #3
    // COND:
    // *COL = '0070'
    // THEN:
    // *SET *CON-A = '0073'
    // #4
    // COND:
    // *COL = '0059'
    // THEN:
    // *SET *CON-A = '0076'
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.getCOL());
    //#2
    vars.setCON_A(vars.getCOL());
    //#3
    if (vars.getCOL() == '0070') {
        vars.setCON_A('0073');
    }
    //#4
    if (vars.getCOL() == '0059') {
        vars.setCON_A('0076');
    }
    // GENERATED

    return vars.output;
};
