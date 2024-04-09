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

export const REG0000131: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000131
    // REQUEST:
    // """
    // #1
    // COND:
    // *COL = '0025'
    // THEN:
    // *SET *CON-A = '0035'
    // ELSE:
    // *SET *CON-A = '0080'
    // """
    // RESPONSE:
    //#1
    if (getCOL() == '0025') {
        vars.setCON_A('0035');
    } else {
        vars.setCON_A('0080');
    }
    // GENERATED

    return vars.output;
};
