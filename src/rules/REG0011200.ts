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

export const REG0011200: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011200
    // REQUEST:
    // """
    // #1
    // """
    // RESPONSE:
    if (vars.get('§L_CAS_SUP_TG') > 0) {
        vars.setCON_A(vars.get('§VERN_CASSONETTO'));
        vars.setCON_B(vars.get('§L_CAS_SUP_TG'));
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
