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

export const REG0011635: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011635
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET §DUMMYA1 = ''
    // #2
    // COND:
    // *COL = '0065'
    // THEN:
    // *SET §DUMMYA1 = 'BIANCO'
    // #3
    // COND:
    // *COL = '0055' OR *COL = '0131' OR *COL = '0323' OR *COL = '0280'
    // THEN:
    // *SET §DUMMYA1 = 'BIANCO'
    // #4
    // COND:
    // *COL = '0053' OR *COL = '0266' OR *COL = '0258' OR *COL = '0324'
    // THEN:
    // *SET §DUMMYA1 = 'BIANCO'
    // #5
    // COND:
    // *COL = '0430'
    // THEN:
    // *SET §DUMMYA1 = 'BIANCO'
    // #6
    // COND:
    // §DUMMYA1 = 'BIANCO'
    // THEN:
    // *SET *CF = #1
    // ELSE:
    // *SET *CF = #0
    // """
    // RESPONSE:
    
    //#1
    vars.setDUMMYA1('');
    //#2
    if (vars.getCOL() == '0065') {
        vars.setDUMMYA1('BIANCO');
    }
    //#3
    if (vars.getCOL() == '0055' || vars.getCOL() == '0131' || vars.getCOL() == '0323' || vars.getCOL() == '0280') {
        vars.setDUMMYA1('BIANCO');
    }
    //#4
    if (vars.getCOL() == '0053' || vars.getCOL() == '0266' || vars.getCOL() == '0258' || vars.getCOL() == '0324') {
        vars.setDUMMYA1('BIANCO');
    }
    //#5
    if (vars.getCOL() == '0430') {
        vars.setDUMMYA1('BIANCO');
    }
    //#6
    if (vars.get('§DUMMYA1') == 'BIANCO') {
        vars.setCF(1);
    } else {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
