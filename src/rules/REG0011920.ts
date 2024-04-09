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

export const REG0011920: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011920
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = §VERN_TETT
    // *SET *CF = #0
    // #2
    // COND:
    // §VR_SUP_TET <> ''
    // THEN:
    // *SET *CON-A = §VR_SUP_TET
    // #3
    // COND:
    // §TI_SUP_MEN_TET = '05'
    // THEN:
    // *SET *CF =  §LS_NR_SUP_TET
    // #4
    // COND:
    // §TI_SUP_MEN_TET = '08'
    // THEN:
    // *SET *CF = §LS_NR_SUP_TET
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('§VERN_TETT'));
    vars.setCF(0);
    
    //#2
    if (vars.get('§VR_SUP_TET') !== '') {
        vars.setCON_A(vars.get('§VR_SUP_TET'));
    }
    
    //#3
    if (vars.get('§TI_SUP_MEN_TET') === '05') {
        vars.setCF(vars.get('§LS_NR_SUP_TET'));
    }
    
    //#4
    if (vars.get('§TI_SUP_MEN_TET') === '08') {
        vars.setCF(vars.get('§LS_NR_SUP_TET'));
    }
    // GENERATED

    return vars.output;
};
