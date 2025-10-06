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

export const REG0012928: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012928
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = 'P072'
    // *SET *CON-B = #45
    // *SET *S2 = #45
    // """
    // RESPONSE:
    //#1
    vars.setCON_A('P072');
    vars.setCON_B(45);
    vars.setS2(45);
    // GENERATED

    return vars.output;
};
