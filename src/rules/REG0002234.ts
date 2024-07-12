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

export const REG0002234: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002234
    // REQUEST:
    // """
    // #1
    // COND:
    // (*COL = '0055') OR (*COL = '0053') OR (*COL = '0065')
    // THEN:
    // *SET *CON-A = *COL
    // ELSE:
    // *SET *CON-A = '0072'
    // """
    // RESPONSE:
    //#1
    if ((vars.getCOL() == '0055') || (vars.getCOL() == '0053') || (vars.getCOL() == '0065')) {
        vars.setCON_A(vars.getCOL());
    } else {
        vars.setCON_A('0072');
    }
    // GENERATED

    return vars.output;
};
