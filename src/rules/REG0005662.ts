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

export const REG0005662: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005662
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // ( §FS_ADD_LAT_POS=§SI ) AND ( §FS_ACC_LAT_ANT=§SI ) AND ( §FS_ACC_PRI_02=§SI ) AND ( §FS_ACC_POS_ANT=§SI ) AND               ( (( §FS_MON_ANT1=§SI ) AND ( §L_SPO_MON_ANT1=#0 ) AND ( §L_SBA_ANT1=#0 )) OR (( §FS_MON_ANT2=§SI ) AND                      ( §L_SPO_MON_ANT2=#0 ) AND ( §L_SBA_ANT2=#0 )) )
    // THEN:
    // *SET *CF=#1
    // #3
    // COND:
    // ( §FS_ADD_LAT_POS=§SI ) AND ( §FS_ACC_LAT_ANT=§SI ) AND ( §FS_ACC_PRI_02=§SI ) AND ( §FS_ACC_POS_ANT=§SI ) AND               ( (( §FS_MON_ANT1=§SI ) AND ( §L_SPO_MON_ANT1=#0 ) AND ( §L_SBA_ANT1=#0 )) AND (( §FS_MON_ANT2=§SI ) AND                     ( §L_SPO_MON_ANT2=#0 ) AND ( §L_SBA_ANT2=#0 )) )
    // THEN:
    // *SET *CF=#2
    // #4
    // COND:
    // ( §FS_ADD_LAT_POS=§SI ) AND ( §FS_ACC_LAT_ANT=§SI ) AND ( §FS_ACC_PRI_02=§SI ) AND ( §FS_ACC_POS_ANT=§SI ) AND               ( (( §FS_MON_ANT1<>§SI ) OR ( §L_SPO_MON_ANT1>#0 ) OR ( §L_SBA_ANT1>#0 )) AND (( §FS_MON_ANT2<>§SI ) OR                      ( §L_SPO_MON_ANT2>#0 ) OR ( §L_SBA_ANT2>#0 )) )
    // THEN:
    // *SET *CF=#0
    // #5
    // COND:
    // ( §FS_ACC_POS_ANT=§SI ) AND ( §FS_ACC_CEN=§SI ) AND ( §FS_ACC_FRO=§SI ) AND ( (( §FS_MON_ANT1=§SI ) AND                       ( §L_SPO_MON_ANT1=#0 ) AND ( §L_SBA_ANT1=#0 )) OR (( §FS_MON_ANT2=§SI ) AND ( §L_SPO_MON_ANT2=#0 ) AND ( §L_SBA_ANT2=#0 )) )
    // THEN:
    // *SET *CF=#1
    // #6
    // COND:
    // ( §FS_ACC_POS_ANT=§SI ) AND ( §FS_ACC_CEN=§SI ) AND ( §FS_ACC_FRO=§SI ) AND ( (( §FS_MON_ANT1=§SI ) AND                      ( §L_SPO_MON_ANT1=#0 ) AND ( §L_SBA_ANT1=#0 )) AND (( §FS_MON_ANT2=§SI ) AND ( §L_SPO_MON_ANT2=#0 ) AND ( §L_SBA_ANT2=#0 )) )
    // THEN:
    // *SET *CF=#2
    // #7
    // COND:
    // ( §FS_ACC_POS_ANT=§SI ) AND ( §FS_ACC_CEN=§SI ) AND ( §FS_ACC_FRO=§SI ) AND ( (( §FS_MON_ANT1<>§SI ) OR                      ( §L_SPO_MON_ANT1>#0 ) OR ( §L_SBA_ANT1>#0 )) AND (( §FS_MON_ANT2<>§SI ) OR ( §L_SPO_MON_ANT2>#0 ) OR ( §L_SBA_ANT2>#0 )) )
    // THEN:
    // *SET *CF=#0
    // """
    // RESPONSE:
    
    //#1
    vars.setCF(0);
    //#2
    if ((vars.get('§FS_ADD_LAT_POS') == vars.get('§SI')) && (vars.get('§FS_ACC_LAT_ANT') == vars.get('§SI')) && (vars.get('§FS_ACC_PRI_02') == vars.get('§SI')) && (vars.get('§FS_ACC_POS_ANT') == vars.get('§SI')) && (((vars.get('§FS_MON_ANT1') == vars.get('§SI')) && (vars.get('§L_SPO_MON_ANT1') == 0) && (vars.get('§L_SBA_ANT1') == 0)) || ((vars.get('§FS_MON_ANT2') == vars.get('§SI')) && (vars.get('§L_SPO_MON_ANT2') == 0) && (vars.get('§L_SBA_ANT2') == 0)))) {
        vars.setCF(1);
    }
    //#3
    if ((vars.get('§FS_ADD_LAT_POS') == vars.get('§SI')) && (vars.get('§FS_ACC_LAT_ANT') == vars.get('§SI')) && (vars.get('§FS_ACC_PRI_02') == vars.get('§SI')) && (vars.get('§FS_ACC_POS_ANT') == vars.get('§SI')) && (((vars.get('§FS_MON_ANT1') == vars.get('§SI')) && (vars.get('§L_SPO_MON_ANT1') == 0) && (vars.get('§L_SBA_ANT1') == 0)) && ((vars.get('§FS_MON_ANT2') == vars.get('§SI')) && (vars.get('§L_SPO_MON_ANT2') == 0) && (vars.get('§L_SBA_ANT2') == 0)))) {
        vars.setCF(2);
    }
    //#4
    if ((vars.get('§FS_ADD_LAT_POS') == vars.get('§SI')) && (vars.get('§FS_ACC_LAT_ANT') == vars.get('§SI')) && (vars.get('§FS_ACC_PRI_02') == vars.get('§SI')) && (vars.get('§FS_ACC_POS_ANT') == vars.get('§SI')) && (((vars.get('§FS_MON_ANT1') != vars.get('§SI')) || (vars.get('§L_SPO_MON_ANT1') > 0) || (vars.get('§L_SBA_ANT1') > 0)) && ((vars.get('§FS_MON_ANT2') != vars.get('§SI')) || (vars.get('§L_SPO_MON_ANT2') > 0) || (vars.get('§L_SBA_ANT2') > 0)))) {
        vars.setCF(0);
    }
    //#5
    if ((vars.get('§FS_ACC_POS_ANT') == vars.get('§SI')) && (vars.get('§FS_ACC_CEN') == vars.get('§SI')) && (vars.get('§FS_ACC_FRO') == vars.get('§SI')) && (((vars.get('§FS_MON_ANT1') == vars.get('§SI')) && (vars.get('§L_SPO_MON_ANT1') == 0) && (vars.get('§L_SBA_ANT1') == 0)) || ((vars.get('§FS_MON_ANT2') == vars.get('§SI')) && (vars.get('§L_SPO_MON_ANT2') == 0) && (vars.get('§L_SBA_ANT2') == 0)))) {
        vars.setCF(1);
    }
    //#6
    if ((vars.get('§FS_ACC_POS_ANT') == vars.get('§SI')) && (vars.get('§FS_ACC_CEN') == vars.get('§SI')) && (vars.get('§FS_ACC_FRO') == vars.get('§SI')) && (((vars.get('§FS_MON_ANT1') == vars.get('§SI')) && (vars.get('§L_SPO_MON_ANT1') == 0) && (vars.get('§L_SBA_ANT1') == 0)) && ((vars.get('§FS_MON_ANT2') == vars.get('§SI')) && (vars.get('§L_SPO_MON_ANT2') == 0) && (vars.get('§L_SBA_ANT2') == 0)))) {
        vars.setCF(2);
    }
    //#7
    if ((vars.get('§FS_ACC_POS_ANT') == vars.get('§SI')) && (vars.get('§FS_ACC_CEN') == vars.get('§SI')) && (vars.get('§FS_ACC_FRO') == vars.get('§SI')) && (((vars.get('§FS_MON_ANT1') != vars.get('§SI')) || (vars.get('§L_SPO_MON_ANT1') > 0) || (vars.get('§L_SBA_ANT1') > 0)) && ((vars.get('§FS_MON_ANT2') != vars.get('§SI')) || (vars.get('§L_SPO_MON_ANT2') > 0) || (vars.get('§L_SBA_ANT2') > 0)))) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
