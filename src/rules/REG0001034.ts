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

export const REG0001034: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001034
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = [§NR_SUPP_COMP + §NR_SUP_COMP_OPT]
    // """
    // RESPONSE:
    //#1
    vars.setCF(vars.get('§NR_SUPP_COMP') + vars.get('§NR_SUP_COMP_OPT'));
    // GENERATED

    return vars.output;
};
