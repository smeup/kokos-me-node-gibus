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

export const REG0011949: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011949
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §TI_SUP_MEN_TET = '07'
    // THEN:
    // *SET *CF = §LS_NR_SUP_TET
    // """
    // RESPONSE:
    
    //#1
    vars.setCF(0);
    //#2
    if (vars.get('§TI_SUP_MEN_TET') == '07') {
        vars.setCF(vars.get('§LS_NR_SUP_TET'));
    }
    
    // GENERATED

    return vars.output;
};
