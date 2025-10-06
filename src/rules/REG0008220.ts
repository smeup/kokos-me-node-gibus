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

export const REG0008220: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008220
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // §N_MODULI = #1
    // THEN:
    // *SET *CF= [ §NR_FRANGI * #2 ]
    // #3
    // COND:
    // §N_MODULI = #2
    // THEN:
    // *SET *CF = [ §NR_FRANGI * #2 + §NR_FRANGI ]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§N_MODULI') == 1) {
        vars.setCF(vars.get('§NR_FRANGI') * 2);
    }
    
    //#3
    if (vars.get('§N_MODULI') == 2) {
        vars.setCF(vars.get('§NR_FRANGI') * 2 + vars.get('§NR_FRANGI'));
    }
    // GENERATED

    return vars.output;
};
