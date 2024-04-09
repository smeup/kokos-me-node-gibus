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

export const REG0000636: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000636
    // REQUEST:
    // """
    // #1
    // COND:
    // (§FS_TOLO_GC = §SI) OR (§FS_TOLO_CL = §SI) OR (§FS_SP_0_GCT = §SI) OR (§FS_FRO_TOL = §SI) OR (§FS_13_QU_GC = §SI)
    // THEN:
    // *SET *CON-A = §VERN_PLAST
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // §FA_VR_PLA_FRO = §SI
    // THEN:
    // *SET *CON-A = §VR_PLA_FRO
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_TOLO_GC') == vars.get('§SI') || vars.get('§FS_TOLO_CL') == vars.get('§SI') || vars.get('§FS_SP_0_GCT') == vars.get('§SI') || vars.get('§FS_FRO_TOL') == vars.get('§SI') || vars.get('§FS_13_QU_GC') == vars.get('§SI')) {
        vars.setCON_A(vars.get('§VERN_PLAST'));
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§FA_VR_PLA_FRO') == vars.get('§SI')) {
        vars.setCON_A(vars.get('§VR_PLA_FRO'));
    }
    
    // GENERATED

    return vars.output;
};
