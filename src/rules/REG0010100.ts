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

export const REG0010100: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010100
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = 'P072'
    // *SET *CON-B = *LUNG
    // *SET *S2 = *LUNG
    // """
    // RESPONSE:
    //#1
    vars.setCON_A('P072');
    vars.setCON_B(vars.get('*LUNG'));
    vars.setS2(vars.get('*LUNG'));
    // GENERATED

    return vars.output;
};
