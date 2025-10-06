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

export const REG0002681: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002681
    // REQUEST:
    // """
    // #1
    // COND:
    // §TI_SUP_MEN_TET = '02'
    // THEN:
    // *SET *CF = §LS_NR_SUP_TET
    // *SET *CON-A = §VERN_TETT
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // §TI_SUP_MEN_TET = '04'
    // THEN:
    // *SET *CON-A = §VERN_TETT
    // *SET *CF =  §LS_NR_SUP_TET
    // ELSE:
    // *SET *LG = ''
    // #3
    // COND:
    // §VR_SUP_TET <> ''
    // THEN:
    // *SET *CON-A = §VR_SUP_TET
    // """
    // RESPONSE:
    //#1
    if (vars.get('§TI_SUP_MEN_TET') === '02') {
        vars.setCF(vars.get('§LS_NR_SUP_TET'));
        vars.setCON_A(vars.get('§VERN_TETT'));
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§TI_SUP_MEN_TET') === '04') {
        vars.setCON_A(vars.get('§VERN_TETT'));
        vars.setCF(vars.get('§LS_NR_SUP_TET'));
    } else {
        vars.setLG('');
    }
    
    //#3
    if (vars.get('§VR_SUP_TET') !== '') {
        vars.setCON_A(vars.get('§VR_SUP_TET'));
    }
    // GENERATED

    return vars.output;
};
