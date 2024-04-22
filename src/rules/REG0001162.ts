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

export const REG0001162: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001162
    // REQUEST:
    // """
    // #1
    // COND:
    // (§FS_TOLO_GC = §SI) OR (§FS_TOLO_CL = §SI) OR (§FS_SP_0_GCT = §SI) OR (§FS_13_QU_GC = §SI)
    // THEN:
    // *SET *CF = §NR_FIX_INF
    // ELSE:
    // *SET *LG = ''
    // #2
    // THEN:
    // *SET *CON-A = 'P073'
    // #3
    // COND:
    // §VERN_1_COM = '0055' OR §VR_ABB = '01'
    // THEN:
    // *SET *CON-A = 'P065'
    // #4
    // COND:
    // §VERN_1_COM = '0053' OR §VERN_1_COM = '0069' OR §VERN_1_COM = '0073' OR §VERN_1_COM = '0065' OR                              §VR_ABB = '02' OR §VR_ABB = '06' OR §VR_ABB = '04'
    // THEN:
    // *SET *CON-A = 'P068'
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_TOLO_GC') == vars.get('§SI') || vars.get('§FS_TOLO_CL') == vars.get('§SI') || vars.get('§FS_SP_0_GCT') == vars.get('§SI') || vars.get('§FS_13_QU_GC') == vars.get('§SI')) {
        vars.setCF(vars.get('§NR_FIX_INF'));
    } else {
        vars.setLG('');
    }
    
    //#2
    vars.setCON_A('P073');
    
    //#3
    if (vars.get('§VERN_1_COM') == '0055' || vars.get('§VR_ABB') == '01') {
        vars.setCON_A('P065');
    }
    
    //#4
    if (vars.get('§VERN_1_COM') == '0053' || vars.get('§VERN_1_COM') == '0069' || vars.get('§VERN_1_COM') == '0073' || vars.get('§VERN_1_COM') == '0065' || vars.get('§VR_ABB') == '02' || vars.get('§VR_ABB') == '06' || vars.get('§VR_ABB') == '04') {
        vars.setCON_A('P068');
    }
    // GENERATED

    return vars.output;
};
