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

export const REG0007989: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0007989
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = 'P073'
    // #2
    // COND:
    // *COL = '0055' OR *COL = '0131' OR *COL = '0323' OR *COL = '0280'
    // THEN:
    // *SET *CON-A = 'P065'
    // #3
    // COND:
    // *COL = '0053' OR *COL = '0069' OR *COL = '0073' OR *COL = '0065'  OR *COL = '0266' OR *COL = '0258'  OR *COL = '0324'
    // THEN:
    // *SET *CON-A = 'P068'
    // """
    // RESPONSE:
    //#1
    vars.setCON_A('P073');
    //#2
    if (vars.getCOL() == '0055' || vars.getCOL() == '0131' || vars.getCOL() == '0323' || vars.getCOL() == '0280') {
        vars.setCON_A('P065');
    }
    //#3
    if (vars.getCOL() == '0053' || vars.getCOL() == '0069' || vars.getCOL() == '0073' || vars.getCOL() == '0065' || vars.getCOL() == '0266' || vars.getCOL() == '0258' || vars.getCOL() == '0324') {
        vars.setCON_A('P068');
    }
    // GENERATED

    return vars.output;
};
