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

export const REG0009446: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009446
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §NR_LIS_INT > #0
    // THEN:
    // *SET *CF = §NR_LIS_INT
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    //#2
    if (vars.get('§NR_LIS_INT') > 0) {
        vars.setCF(vars.get('§NR_LIS_INT'));
    }
    // GENERATED

    return vars.output;
};
