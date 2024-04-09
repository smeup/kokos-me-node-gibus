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

export const REG0000210: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000210
    // REQUEST:
    // """
    // #1
    // COND:
    // §NR_PZ_RULLO <= ''
    // THEN:
    // *SET *LG = ''
    // ELSE:
    // *SET *CF = §NR_PZ_RULLO
    // """
    // RESPONSE:
    //#1
    if (vars.get('§NR_PZ_RULLO') <= '') {
        vars.setLG('');
    } else {
        vars.setCF(vars.get('§NR_PZ_RULLO'));
    }
    // GENERATED

    return vars.output;
};
