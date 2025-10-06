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

export const REG0003088: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003088
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = '0072'
    // #2
    // COND:
    // *COL = '0053' OR *COL = '0055'
    // THEN:
    // *SET *CON-A = '0055'
    // """
    // RESPONSE:
    //#1
    vars.setCON_A('0072');
    //#2
    if (vars.getCOL() == '0053' || vars.getCOL() == '0055') {
        vars.setCON_A('0055');
    }
    // GENERATED

    return vars.output;
};
