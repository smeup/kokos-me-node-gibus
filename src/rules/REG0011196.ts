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

export const REG0011196: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011196
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §N_MODULI = #1 AND §TI_SCA_LAT_T01 = '01'
    // THEN:
    // *SET *CF = §NR_FRANGI
    // #3
    // COND:
    // §N_MODULI = #2 AND §TI_SCA_LAT_T01 = '03'
    // THEN:
    // *SET *CF = §NR_FRANGI
    // #4
    // COND:
    // §N_MODULI = #3 AND §TI_SCA_LAT_T01 = '05'
    // THEN:
    // *SET *CF = §NR_FRANGI
    // #5
    // COND:
    // §SBALZO_DX_FS > #0
    // THEN:
    // *SET *CM = 'FT_DIS_FTE_T04'
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§N_MODULI') == 1 && vars.get('§TI_SCA_LAT_T01') == '01') {
        vars.setCF(vars.get('§NR_FRANGI'));
    }
    
    //#3
    if (vars.get('§N_MODULI') == 2 && vars.get('§TI_SCA_LAT_T01') == '03') {
        vars.setCF(vars.get('§NR_FRANGI'));
    }
    
    //#4
    if (vars.get('§N_MODULI') == 3 && vars.get('§TI_SCA_LAT_T01') == '05') {
        vars.setCF(vars.get('§NR_FRANGI'));
    }
    
    //#5
    if (vars.get('§SBALZO_DX_FS') > 0) {
        vars.setCM('FT_DIS_FTE_T04');
    }
    
    // GENERATED

    return vars.output;
};
