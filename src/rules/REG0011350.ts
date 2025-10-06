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

export const REG0011350: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011350
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = [§N_TUB_T01 * §L_TUB_T01 / #1000]
    // """
    // RESPONSE:
    //#1
    vars.setCF(vars.get('§N_TUB_T01') * vars.get('§L_TUB_T01') / 1000);
    // GENERATED

    return vars.output;
};
