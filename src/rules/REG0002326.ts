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

export const REG0002326: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002326
    // REQUEST:
    // """
    // #1
    // COND:
    // §PERIM_S_TETT > #0
    // THEN:
    // *SET *CON-A = §VR_PROF_TET
    // *SET *CON-B = §PERIM_S_TETT
    // *SET *CF = §NR_PERIM_S_TETT
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§PERIM_S_TETT') > 0) {
        vars.setCON_A(vars.get('§VR_PROF_TET'));
        vars.setCON_B(vars.get('§PERIM_S_TETT'));
        vars.setCF(vars.get('§NR_PERIM_S_TETT'));
    } else {
        vars.setLG('');
    }
    
    // GENERATED

    return vars.output;
};
