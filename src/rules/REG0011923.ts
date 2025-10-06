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

export const REG0011923: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011923
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = §VERN_TETT
    // *SET *CF = #1
    // #2
    // COND:
    // §FS_TES_TET = 'DX_SX'
    // ELSE:
    // *SET *CF = #0
    // #3
    // COND:
    // §TS_TIPO_TETT = '07'
    // ELSE:
    // *SET *CF = #0
    // #4
    // COND:
    // §VR_SUP_TET <> ''
    // THEN:
    // *SET *CON-A = §VR_SUP_TET
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('§VERN_TETT'));
    vars.setCF(1);
    
    //#2
    if (vars.get('§FS_TES_TET') == 'DX_SX') {
        vars.setCF(0);
    }
    
    //#3
    if (vars.get('§TS_TIPO_TETT') == '07') {
        vars.setCF(0);
    }
    
    //#4
    if (vars.get('§VR_SUP_TET') !== '') {
        vars.setCON_A(vars.get('§VR_SUP_TET'));
    }
    // GENERATED

    return vars.output;
};
