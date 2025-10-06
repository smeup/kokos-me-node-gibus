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

export const REG0001462: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001462
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = '0080'
    // *SET *CON-B = §L_BOMA
    // """
    // RESPONSE:
    //#1
    vars.setCON_A('0080');
    vars.setCON_B(vars.get('§L_BOMA'));
    // GENERATED

    return vars.output;
};
