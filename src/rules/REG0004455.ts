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

export const REG0004455: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004455
    // REQUEST:
    // """
    // #1
    // COND:
    // §N_MODULI > #1
    // ELSE:
    // *SET *LG=''
    // #2
    // COND:
    // §N_MODULI = #2
    // THEN:
    // *SET *CF= #1
    // #3
    // COND:
    // §N_MODULI= #3
    // THEN:
    // *SET *CF= #2
    // """
    // RESPONSE:
    //#1
    if (vars.get('§N_MODULI') > 1) {
    } else {
        vars.setLG("");
    }
    
    //#2
    if (vars.get('§N_MODULI') == 2) {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§N_MODULI') == 3) {
        vars.setCF(2);
    }
    // GENERATED

    return vars.output;
};
