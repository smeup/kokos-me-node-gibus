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

export const REG0003092: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003092
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = 'P072'
    // #2
    // COND:
    // *COL = '0065'
    // THEN:
    // *SET *CON-A = 'P055'
    // #3
    // COND:
    // *COL = '0055' OR *COL = '0131' OR *COL = '0323' OR *COL = '0280'
    // THEN:
    // *SET *CON-A = 'P055'
    // #4
    // COND:
    // *COL = '0053' OR *COL = '0266' OR *COL = '0258' OR *COL = '0324'
    // THEN:
    // *SET *CON-A = 'P055'
    // #5
    // COND:
    // *COL = '0430'
    // THEN:
    // *SET *CON-A = 'P055'
    // """
    // RESPONSE:
    //#1
    vars.setCON_A('P072');
    //#2
    if (vars.getCOL() == '0065') {
        vars.setCON_A('P055');
    }
    //#3
    if (vars.getCOL() == '0055' || vars.getCOL() == '0131' || vars.getCOL() == '0323' || vars.getCOL() == '0280') {
        vars.setCON_A('P055');
    }
    //#4
    if (vars.getCOL() == '0053' || vars.getCOL() == '0266' || vars.getCOL() == '0258' || vars.getCOL() == '0324') {
        vars.setCON_A('P055');
    }
    //#5
    if (vars.getCOL() == '0430') {
        vars.setCON_A('P055');
    }
    // GENERATED

    return vars.output;
};
