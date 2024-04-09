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

export const REG0007133: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0007133
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_STA_MUR_ANT1=§SI
    // ELSE:
    // *SET *LG=''
    // #2
    // COND:
    // ( §FS_STA_MUR_ANT1=§SI ) AND (§TI_ANG_ANT1='03' )
    // THEN:
    // *SET *CF=#0
    // #3
    // COND:
    // ( §FS_STA_MUR_ANT1=§SI ) AND ( §FS_FAM2_ADDL=§SI ) AND ( §FS_ACC_PRI_02=§SI )
    // THEN:
    // *SET *CF=#2
    // #4
    // COND:
    // ( §FS_STA_MUR_ANT1=§SI ) AND ( §FS_FAM2_ADDL=§SI ) AND ( §FS_ACC_CEN=§SI ) AND (§TI_ACC_TWI='02' )
    // THEN:
    // *SET *CF=#2
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_STA_MUR_ANT1') == vars.get('§SI')) {
        // do nothing
    } else {
        vars.setLG('');
    }
    
    //#2
    if ((vars.get('§FS_STA_MUR_ANT1') == vars.get('§SI')) && (vars.get('§TI_ANG_ANT1') == '03')) {
        vars.setCF(0);
    }
    
    //#3
    if ((vars.get('§FS_STA_MUR_ANT1') == vars.get('§SI')) && (vars.get('§FS_FAM2_ADDL') == vars.get('§SI')) && (vars.get('§FS_ACC_PRI_02') == vars.get('§SI'))) {
        vars.setCF(2);
    }
    
    //#4
    if ((vars.get('§FS_STA_MUR_ANT1') == vars.get('§SI')) && (vars.get('§FS_FAM2_ADDL') == vars.get('§SI')) && (vars.get('§FS_ACC_CEN') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '02')) {
        vars.setCF(2);
    }
    // GENERATED

    return vars.output;
};
