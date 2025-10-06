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

export const REG0011400: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011400
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = [ §NR_FRANGI_LED * #2 + #2 ]
    // """
    // RESPONSE:
    //#1
    vars.setCF(vars.get('§NR_FRANGI_LED') * 2 + 2);
    // GENERATED

    return vars.output;
};
