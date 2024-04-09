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

export const REG0005625: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005625
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // ( (§FS_ADDL_SX=§SI ) OR ( §FS_ADDL_DX=§SI ) ) AND (§FS_ACC_PRI_02=§SI ) AND ( §FS_ACC_FRO=§SI )
    // THEN:
    // *SET *CF= [ §NR_GAM_NOR_ANT ]
    // #3
    // COND:
    // ( (§FS_ADDL_SX=§SI ) OR ( §FS_ADDL_DX=§SI ) ) AND (§FS_ACC_CEN=§SI ) AND ( §FS_ACC_FRO=§SI )
    // THEN:
    // *SET *CF= [ §NR_GAM_NOR_ANT ]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if ((vars.get('§FS_ADDL_SX') == vars.get('§SI') || vars.get('§FS_ADDL_DX') == vars.get('§SI')) && vars.get('§FS_ACC_PRI_02') == vars.get('§SI') && vars.get('§FS_ACC_FRO') == vars.get('§SI')) {
        vars.setCF(vars.get('§NR_GAM_NOR_ANT'));
    }
    
    //#3
    if ((vars.get('§FS_ADDL_SX') == vars.get('§SI') || vars.get('§FS_ADDL_DX') == vars.get('§SI')) && vars.get('§FS_ACC_CEN') == vars.get('§SI') && vars.get('§FS_ACC_FRO') == vars.get('§SI')) {
        vars.setCF(vars.get('§NR_GAM_NOR_ANT'));
    }
    // GENERATED

    return vars.output;
};
