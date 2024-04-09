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

export const REG0000239: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000239
    // REQUEST:
    // """
    // #1
    // COND:
    // §NR_BRACCI <= #0
    // THEN:
    // *SET *LG = ''
    // ELSE:
    // *SET *CF = §NR_BRACCI
    // """
    // RESPONSE:
    //#1
    if (vars.get('§NR_BRACCI') <= 0) {
        vars.setLG('');
    } else {
        vars.setCF(vars.get('§NR_BRACCI'));
    }
    // GENERATED

    return vars.output;
};
