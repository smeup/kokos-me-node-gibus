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

export const REG0005265: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005265
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // ( §FS_ACC_PRI<>§SI ) AND (§FS_ACC_PRI_02<>§SI ) AND (§FS_ACC_CEN<>§SI ) AND ( §FS_ACC_FIN<>§SI )
    // THEN:
    // *SET *CF = [ §NR_GAM_NOR_ANT + §NR_GAM_NOR_POS ]
    // #3
    // COND:
    // ( §FS_ADD_LAT_POS=§SI ) AND (§FS_ACC_POS_ANT=§SI ) AND ( §FS_ACC_PRI=§SI ) AND ( ( §FS_MON_ANT1=§SI )                         AND ( §L_SPO_MON_ANT1=#0 ) AND (§L_SBA_ANT1=#0 ))
    // THEN:
    // *SET *CF=#1
    // #4
    // COND:
    // ( §FS_ADD_LAT_POS=§SI ) AND ( §FS_ACC_POS_ANT=§SI ) AND ( §FS_ACC_PRI=§SI ) AND                                               ( ( §FS_MON_ANT1<>§SI ) OR ( §L_SPO_MON_ANT1>#0 ) OR ( §L_SBA_ANT1>#0 ))
    // THEN:
    // *SET *CF=#0
    // #5
    // COND:
    // ( §FS_ADD_LAT_POS=§SI ) AND ( §FS_ACC_FIN=§SI ) AND ( §FS_ACC_LAT=§SI ) AND (( §FS_MON_ANT2=§SI ) AND                         (§L_SPO_MON_ANT2=#0 ) AND (§L_SBA_ANT2=#0 ))
    // THEN:
    // *SET *CF=#1
    // #6
    // COND:
    // ( §FS_ADD_LAT_POS=§SI ) AND ( §FS_ACC_FIN=§SI ) AND ( §FS_ACC_LAT=§SI ) AND (( §FS_MON_ANT2<>§SI ) OR                         ( §L_SPO_MON_ANT2>#0 ) OR (§L_SBA_ANT2>#0 ))
    // THEN:
    // *SET *CF=#0
    // #7
    // COND:
    // ( §FS_ACC_POS_ANT=§SI ) AND ( §FS_ACC_FIN=§SI ) AND ( §FS_ACC_FRO=§SI )
    // THEN:
    // *SET *CF=[ #2 - §NR_MON_ANG_MAN ]
    // #8
    // COND:
    // ( §FS_ACC_CEN=§SI ) AND ( ( §TI_ACC_TWI='01' ) OR ( §TI_ACC_TWI='02' ) )
    // THEN:
    // *SET *CF=#0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if ((vars.get('§FS_ACC_PRI') != vars.get('§SI')) && (vars.get('§FS_ACC_PRI_02') != vars.get('§SI')) && (vars.get('§FS_ACC_CEN') != vars.get('§SI')) && (vars.get('§FS_ACC_FIN') != vars.get('§SI'))) {
        vars.setCF(vars.get('§NR_GAM_NOR_ANT') + vars.get('§NR_GAM_NOR_POS'));
    }
    
    //#3
    if ((vars.get('§FS_ADD_LAT_POS') == vars.get('§SI')) && (vars.get('§FS_ACC_POS_ANT') == vars.get('§SI')) && (vars.get('§FS_ACC_PRI') == vars.get('§SI')) && ((vars.get('§FS_MON_ANT1') == vars.get('§SI')) && (vars.get('§L_SPO_MON_ANT1') == 0) && (vars.get('§L_SBA_ANT1') == 0))) {
        vars.setCF(1);
    }
    
    //#4
    if ((vars.get('§FS_ADD_LAT_POS') == vars.get('§SI')) && (vars.get('§FS_ACC_POS_ANT') == vars.get('§SI')) && (vars.get('§FS_ACC_PRI') == vars.get('§SI')) && ((vars.get('§FS_MON_ANT1') != vars.get('§SI')) || (vars.get('§L_SPO_MON_ANT1') > 0) || (vars.get('§L_SBA_ANT1') > 0))) {
        vars.setCF(0);
    }
    
    //#5
    if ((vars.get('§FS_ADD_LAT_POS') == vars.get('§SI')) && (vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§FS_ACC_LAT') == vars.get('§SI')) && ((vars.get('§FS_MON_ANT2') == vars.get('§SI')) && (vars.get('§L_SPO_MON_ANT2') == 0) && (vars.get('§L_SBA_ANT2') == 0))) {
        vars.setCF(1);
    }
    
    //#6
    if ((vars.get('§FS_ADD_LAT_POS') == vars.get('§SI')) && (vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§FS_ACC_LAT') == vars.get('§SI')) && ((vars.get('§FS_MON_ANT2') != vars.get('§SI')) || (vars.get('§L_SPO_MON_ANT2') > 0) || (vars.get('§L_SBA_ANT2') > 0))) {
        vars.setCF(0);
    }
    
    //#7
    if ((vars.get('§FS_ACC_POS_ANT') == vars.get('§SI')) && (vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§FS_ACC_FRO') == vars.get('§SI'))) {
        vars.setCF(2 - vars.get('§NR_MON_ANG_MAN'));
    }
    
    //#8
    if ((vars.get('§FS_ACC_CEN') == vars.get('§SI')) && ((vars.get('§TI_ACC_TWI') == '01') || (vars.get('§TI_ACC_TWI') == '02'))) {
        vars.setCF(0);
    }
    
    // GENERATED

    return vars.output;
};
