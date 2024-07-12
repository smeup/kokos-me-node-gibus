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

export const REG0011234: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011234
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // *SET *CON-B = [§LUNG_INPUT - #1]
    // *SET *S2 = [§LUNG_INPUT - #1]
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('§VERN_1_COM'));
    vars.setCON_B(vars.get('§LUNG_INPUT') - 1);
    vars.setS2(vars.get('§LUNG_INPUT') - 1);
    // GENERATED

    return vars.output;
};
