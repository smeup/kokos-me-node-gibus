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

export const REG0011443: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011443
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §NR_DYN_CEN >= #1
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §N_DIV_FRA <= #1
    // THEN:
    // *SET *CF = #0
    // #4
    // COND:
    // §N_MODULI = #2
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§NR_DYN_CEN') >= 1) {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§N_DIV_FRA') <= 1) {
        vars.setCF(0);
    }
    
    //#4
    if (vars.get('§N_MODULI') == 2) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
