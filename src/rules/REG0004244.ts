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

export const REG0004244: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004244
    // REQUEST:
    // """
    // #1
    // COND:
    // ( §NR_GAM_AGG_TOT  > #0 )
    // THEN:
    // *SET *CF = [ §NR_GAM_AGG_TOT ]
    // ELSE:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§NR_GAM_AGG_TOT') > 0) {
        vars.setCF(vars.get('§NR_GAM_AGG_TOT'));
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
