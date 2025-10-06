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

export const REG0000814: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000814
    // REQUEST:
    // """
    // #1
    // COND:
    // [§LIST_NR_ATT + §LIST_NR_ATT_AGG + §NR_SUP_CAS_AGG] > #0
    // THEN:
    // *SET *CF = [§LIST_NR_ATT + §LIST_NR_ATT_AGG + §NR_SUP_CAS_AGG]
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if ((vars.get('§LIST_NR_ATT') + vars.get('§LIST_NR_ATT_AGG') + vars.get('§NR_SUP_CAS_AGG')) > 0) {
        vars.setCF(vars.get('§LIST_NR_ATT') + vars.get('§LIST_NR_ATT_AGG') + vars.get('§NR_SUP_CAS_AGG'));
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
