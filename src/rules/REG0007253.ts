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

export const REG0007253: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0007253
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // ( §FS_ACC_PRI=§SI ) AND  ( §FS_MON_POS_2<>§SI ) AND ( §TI_ANG_POS2='01' )
    // THEN:
    // *SET *CF=#1
    // #3
    // COND:
    // ( §FS_ACC_CEN=§SI ) AND ( §FS_ACC_LAT=§SI ) AND ( §FS_MON_POS_2<>§SI ) AND ( §TI_ANG_POS2='01' ) AND                            ( §FS_ACC_SX_DX=§SI )
    // THEN:
    // *SET *CF=#1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if ((vars.get('§FS_ACC_PRI') == vars.get('§SI')) && (vars.get('§FS_MON_POS_2') != vars.get('§SI')) && (vars.get('§TI_ANG_POS2') == '01')) {
        vars.setCF(1);
    }
    
    //#3
    if ((vars.get('§FS_ACC_CEN') == vars.get('§SI')) && (vars.get('§FS_ACC_LAT') == vars.get('§SI')) && (vars.get('§FS_MON_POS_2') != vars.get('§SI')) && (vars.get('§TI_ANG_POS2') == '01') && (vars.get('§FS_ACC_SX_DX') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    
    // GENERATED

    return vars.output;
};
