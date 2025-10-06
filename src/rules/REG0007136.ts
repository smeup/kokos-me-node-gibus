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

export const REG0007136: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0007136
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_STA_MUR_POS2=§SI
    // ELSE:
    // *SET *LG=''
    // #2
    // COND:
    // ( §FS_STA_MUR_POS2=§SI ) AND (§TI_ANG_POS2='03' )
    // THEN:
    // *SET *CF=#0
    // #3
    // COND:
    // ( §FS_STA_MUR_POS2=§SI ) AND ( §FS_FAM2_ADDF=§SI ) AND ( §FS_ACC_PRI = §SI )
    // THEN:
    // *SET *CF=#2
    // #4
    // COND:
    // ( §FS_STA_MUR_POS2=§SI ) AND ( §FS_FAM2_ADDF=§SI ) AND ( §FS_ACC_CEN=§SI ) AND ( §TI_ACC_TWI='01' )
    // THEN:
    // *SET *CF=#2
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_STA_MUR_POS2') == vars.get('§SI')) {
    } else {
        vars.setLG('');
    }
    
    //#2
    if ((vars.get('§FS_STA_MUR_POS2') == vars.get('§SI')) && (vars.get('§TI_ANG_POS2') == '03')) {
        vars.setCF(0);
    }
    
    //#3
    if ((vars.get('§FS_STA_MUR_POS2') == vars.get('§SI')) && (vars.get('§FS_FAM2_ADDF') == vars.get('§SI')) && (vars.get('§FS_ACC_PRI') == vars.get('§SI'))) {
        vars.setCF(2);
    }
    
    //#4
    if ((vars.get('§FS_STA_MUR_POS2') == vars.get('§SI')) && (vars.get('§FS_FAM2_ADDF') == vars.get('§SI')) && (vars.get('§FS_ACC_CEN') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '01')) {
        vars.setCF(2);
    }
    // GENERATED

    return vars.output;
};
