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

export const REG0011184: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011184
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = §NR_FRANGI
    // #2
    // COND:
    // §SBALZO_SX_FS > #0
    // THEN:
    // *SET *CF = #0
    // #3
    // COND:
    // §N_MODULI = #1 AND §TI_SCA_LAT_T01 = '02'
    // THEN:
    // *SET *CF = #0
    // #4
    // COND:
    // §N_MODULI = #2 AND §TI_SCA_LAT_T01 = '03'
    // THEN:
    // *SET *CF = #0
    // #5
    // COND:
    // §N_MODULI = #3 AND §TI_SCA_LAT_T01 = '04'
    // THEN:
    // *SET *CF = #0
    // #6
    // COND:
    // §N_MODULI = #2 AND §TI_SCA_LAT_T01 ='02'
    // THEN:
    // *SET *CF = #0
    // #7
    // COND:
    // §N_MODULI = #3 AND §TI_SCA_LAT_T01 ='05'
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(vars.get('§NR_FRANGI'));
    
    //#2
    if (vars.get('§SBALZO_SX_FS') > 0) {
        vars.setCF(0);
    }
    
    //#3
    if (vars.get('§N_MODULI') == 1 && vars.get('§TI_SCA_LAT_T01') == '02') {
        vars.setCF(0);
    }
    
    //#4
    if (vars.get('§N_MODULI') == 2 && vars.get('§TI_SCA_LAT_T01') == '03') {
        vars.setCF(0);
    }
    
    //#5
    if (vars.get('§N_MODULI') == 3 && vars.get('§TI_SCA_LAT_T01') == '04') {
        vars.setCF(0);
    }
    
    //#6
    if (vars.get('§N_MODULI') == 2 && vars.get('§TI_SCA_LAT_T01') == '02') {
        vars.setCF(0);
    }
    
    //#7
    if (vars.get('§N_MODULI') == 3 && vars.get('§TI_SCA_LAT_T01') == '05') {
        vars.setCF(0);
    }
    
    // GENERATED

    return vars.output;
};
