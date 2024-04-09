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

export const REG0001874: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001874
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = *COL
    // #2
    // THEN:
    // *SET *CON-A = 'P072'
    // #3
    // COND:
    // *COL = '0055' OR *COL = '0053' OR *COL = '0065'
    // THEN:
    // *SET *CON-A = 'P055'
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.getCOL());
    //#2
    vars.setCON_A('P072');
    //#3
    if (vars.getCOL() == '0055' || vars.getCOL() == '0053' || vars.getCOL() == '0065') {
        vars.setCON_A('P055');
    }
    // GENERATED

    return vars.output;
};
