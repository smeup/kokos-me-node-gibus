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

export const REG0005899: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005899
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §N_MON_TOT >#0
    // THEN:
    // *SET *CF=§N_MON_TOT
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§N_MON_TOT') > 0) {
        vars.setCF(vars.get('§N_MON_TOT'));
    }
    // GENERATED

    return vars.output;
};
