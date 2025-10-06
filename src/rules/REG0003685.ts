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

export const REG0003685: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003685
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A=*COL
    // #2
    // THEN:
    // *SET *CON-A=*COL
    // #3
    // THEN:
    // *SET *CON-A=*COL
    // #4
    // COND:
    // *COL = '0072'
    // THEN:
    // *SET *CON-A = '0103'
    // #5
    // COND:
    // *CON-A = '0072'
    // THEN:
    // *SET *CON-A = '0103'
    // #6
    // COND:
    // *CON-A = '0072'
    // THEN:
    // *SET *CON-A = '0103'
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.getCOL());
    //#2
    vars.setCON_A(vars.getCOL());
    //#3
    vars.setCON_A(vars.getCOL());
    //#4
    if (vars.getCOL() == '0072') {
        vars.setCON_A('0103');
    }
    //#5
    if (vars.getCON_A() == '0072') {
        vars.setCON_A('0103');
    }
    //#6
    if (vars.getCON_A() == '0072') {
        vars.setCON_A('0103');
    }
    // GENERATED

    return vars.output;
};
