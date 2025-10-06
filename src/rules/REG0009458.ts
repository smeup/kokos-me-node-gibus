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

export const REG0009458: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009458
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = §QPR_CH_SPAZI
    // *SET *CON-A = §VE_VERN
    // *SET *CON-B = #600
    // """
    // RESPONSE:
    //#1
    vars.setCF(vars.get('§QPR_CH_SPAZI'));
    vars.setCON_A(vars.get('§VE_VERN'));
    vars.setCON_B(600);
    // GENERATED

    return vars.output;
};
