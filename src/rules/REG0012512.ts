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

export const REG0012512: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012512
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = §GT_PR0001_CD_N
    // *SET *CON-A = §VERN_1_COM
    // *SET *CON-B = §GT_PR0001_CD_L
    // """
    // RESPONSE:
    //#1
    vars.setCF(vars.get('§GT_PR0001_CD_N'));
    vars.setCON_A(vars.get('§VERN_1_COM'));
    vars.setCON_B(vars.get('§GT_PR0001_CD_L'));
    // GENERATED

    return vars.output;
};
