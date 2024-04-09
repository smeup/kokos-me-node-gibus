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

export const REG0000644: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000644
    // REQUEST:
    // """
    // #1
    // COND:
    // (§FS_TOLO_GC = §SI) OR (§FS_TOLO_CL = §SI) OR (§FS_SP_0_GCT = §SI) OR (§FS_13_QU_GC = §SI)
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // *SET *CF = §NR_FIX_INF
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if ((vars.get('§FS_TOLO_GC') == vars.get('§SI')) || (vars.get('§FS_TOLO_CL') == vars.get('§SI')) || (vars.get('§FS_SP_0_GCT') == vars.get('§SI')) || (vars.get('§FS_13_QU_GC') == vars.get('§SI'))) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCF(vars.get('§NR_FIX_INF'));
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
