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

export const REG0011399: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011399
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = §VR_LAM_ABB
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('§VR_LAM_ABB'));
    // GENERATED

    return vars.output;
};
