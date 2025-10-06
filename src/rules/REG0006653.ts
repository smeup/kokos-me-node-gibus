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

export const REG0006653: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006653
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = §NR_GIU_TET
    // *SET *CON-A = '0000'
    // """
    // RESPONSE:
    //#1
    vars.setCF(vars.get('§NR_GIU_TET'));
    vars.setCON_A('0000');
    // GENERATED

    return vars.output;
};
