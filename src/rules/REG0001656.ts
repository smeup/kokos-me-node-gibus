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

export const REG0001656: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001656
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = §NR_GAM_SCA
    // *SET *CON-A = §VERN_PLAST
    // """
    // RESPONSE:
    //#1
    vars.setCF(vars.get('§NR_GAM_SCA'));
    vars.setCON_A(vars.get('§VERN_PLAST'));
    // GENERATED

    return vars.output;
};
