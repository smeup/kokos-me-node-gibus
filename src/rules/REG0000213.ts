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

export const REG0000213: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000213
    // REQUEST:
    // """
    // #1
    // COND:
    // §NR_CAS_SUP <= #0
    // THEN:
    // *SET *LG = ''
    // ELSE:
    // *SET *CF = §NR_CAS_SUP
    // """
    // RESPONSE:
    //#1
    if (vars.get('§NR_CAS_SUP') <= 0) {
        vars.setLG('');
    } else {
        vars.setCF(vars.get('§NR_CAS_SUP'));
    }
    // GENERATED

    return vars.output;
};
