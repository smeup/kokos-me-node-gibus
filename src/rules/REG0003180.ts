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

export const REG0003180: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003180
    // REQUEST:
    // """
    // #1
    // COND:
    // §PROF_MONOGIVA > #0
    // THEN:
    // *SET *CF= [ §PD_LARG_ML ]
    // """
    // RESPONSE:
    //#1
    if (vars.get('§PROF_MONOGIVA') > 0) {
        vars.setCF(vars.get('§PD_LARG_ML'));
    } 
    
    // GENERATED

    return vars.output;
};
