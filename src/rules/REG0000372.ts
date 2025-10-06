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

export const REG0000372: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000372
    // REQUEST:
    // """
    // #1
    // COND:
    // *LUNG <= #100
    // THEN:
    // *SET *CF = #6
    // ELSE:
    // *SET *CF = #8
    // """
    // RESPONSE:
    //#1
    if (vars.get('LUNG') <= 100) {
        vars.setCF(6);
    } else {
        vars.setCF(8);
    }
    // GENERATED

    return vars.output;
};
