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

export const REG0005773: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005773
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // ( §FS_AT_PAR_MAG=§SI ) AND ( §FS_DOP_MOT<>§SI ) AND ( §FS_MOT_PAR=§SI ) AND ( ( §TI_ATVEL_02='PAAL' ) OR                      ( §TI_ATVEL_02='PABA' ) OR ( §TI_ATVEL_04='PABA' ) OR ( §TI_ATVEL_04='PAAL') )
    // THEN:
    // *SET *CF=#1
    // #3
    // COND:
    // ( §FS_AT_PAR_MAG=§SI ) AND ( §FS_DOP_MOT=§SI ) AND ( §FS_MOT_PAR=§SI ) AND ( §AT_SEC_MOT='090' ) AND                            ( ( ( §TI_ATVEL_02='PAAL' ) OR ( §TI_ATVEL_02='PABA' ) ) AND ( ( §TI_ATVEL_04='PABA' ) OR ( §TI_ATVEL_04='PAAL' ) ) )
    // THEN:
    // *SET *CF=#2
    // #4
    // COND:
    // ( §FS_AT_PAR_MAG=§SI ) AND ( §FS_DOP_MOT=§SI ) AND ( §FS_MOT_PAR=§SI ) AND ( §AT_SEC_MOT<>'090' ) AND                          ( ( §TI_ATVEL_02='PAAL' ) OR ( §TI_ATVEL_02='PABA' ) OR ( §TI_ATVEL_04='PABA' ) OR ( §TI_ATVEL_04='PAAL' ) )
    // THEN:
    // *SET *CF=#1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if ((vars.get('§FS_AT_PAR_MAG') == vars.get('§SI')) && (vars.get('§FS_DOP_MOT') != vars.get('§SI')) && (vars.get('§FS_MOT_PAR') == vars.get('§SI')) && ((vars.get('§TI_ATVEL_02') == 'PAAL') || (vars.get('§TI_ATVEL_02') == 'PABA') || (vars.get('§TI_ATVEL_04') == 'PABA') || (vars.get('§TI_ATVEL_04') == 'PAAL'))) {
        vars.setCF(1);
    }
    
    //#3
    if ((vars.get('§FS_AT_PAR_MAG') == vars.get('§SI')) && (vars.get('§FS_DOP_MOT') == vars.get('§SI')) && (vars.get('§FS_MOT_PAR') == vars.get('§SI')) && (vars.get('§AT_SEC_MOT') == '090') && (((vars.get('§TI_ATVEL_02') == 'PAAL') || (vars.get('§TI_ATVEL_02') == 'PABA')) && ((vars.get('§TI_ATVEL_04') == 'PABA') || (vars.get('§TI_ATVEL_04') == 'PAAL')))) {
        vars.setCF(2);
    }
    
    //#4
    if ((vars.get('§FS_AT_PAR_MAG') == vars.get('§SI')) && (vars.get('§FS_DOP_MOT') == vars.get('§SI')) && (vars.get('§FS_MOT_PAR') == vars.get('§SI')) && (vars.get('§AT_SEC_MOT') != '090') && ((vars.get('§TI_ATVEL_02') == 'PAAL') || (vars.get('§TI_ATVEL_02') == 'PABA') || (vars.get('§TI_ATVEL_04') == 'PABA') || (vars.get('§TI_ATVEL_04') == 'PAAL'))) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
