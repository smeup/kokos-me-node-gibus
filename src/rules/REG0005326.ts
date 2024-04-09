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

export const REG0005326: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005326
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // ( §FS_ACC_PRI<>§SI ) AND ( §FS_ACC_PRI_02<>§SI ) AND (§FS_ACC_CEN<>§SI ) AND (§FS_ACC_FIN<>§SI )
    // THEN:
    // *SET *CF= [ #2 - §NR_MON_ANG_MAN ]
    // #3
    // COND:
    // ( §FS_ACC_CEN=§SI )
    // THEN:
    // *SET *CF=#0
    // #4
    // COND:
    // ( §FS_ACC_FIN=§SI ) AND (§TI_ACC_TWI='02' ) AND ( §N_GAM_ANT_N_ANG=#0 ) AND ( §N_GAM_POS_N_ANG=#0 ) AND (§NR_MON_ANG_MAN=#0)
    // THEN:
    // *SET *CF= [ §NR_GAM_NOR_ANT + §NR_GAM_NOR_POS ]
    // #5
    // COND:
    // ( §FS_ACC_FIN=§SI ) AND ( §TI_ACC_TWI='02' ) AND (( §N_GAM_ANT_N_ANG>#0 ) OR (§NR_MON_ANG_MAN >#0))
    // THEN:
    // *SET *CF= [ #2 - §NR_MON_ANG_MAN ]
    // #6
    // COND:
    // ( §FS_ACC_PRI_02=§SI ) AND (§N_GAM_POS_N_ANG >#0 )
    // THEN:
    // *SET *CF=[#1 - §N_GAM_POS_N_ANG ]
    // #7
    // COND:
    // ( §FS_ACC_PRI_02=§SI ) AND ( §N_GAM_POS_N_ANG =#0 )
    // THEN:
    // *SET *CF=[ §NR_GAM_NOR_POS ]
    // #8
    // COND:
    // ( §TI_ACC_TWI='02' ) AND ( §LA_ADD_LAT='SX' ) AND ( (§L_SBA_POS2 > #0 ) OR (§L_SPO_MON_POS2 >#0 ) OR (§FS_MON_POS_2<>§SI) )
    // THEN:
    // *SET *CF=#0
    // #9
    // COND:
    // ( §TI_ACC_TWI='02' ) AND (§LA_ADD_LAT='DX' ) AND ((§L_SBA_POS1 >#0 ) OR (§L_SPO_MON_POS1>#0 ) OR (§FS_MON_POS_1<>§SI) )
    // THEN:
    // *SET *CF=#0
    // #10
    // COND:
    // ( §FS_ACC_PRI_02=§SI ) AND ( §LA_ADD_LAT='SX' ) AND ( §FS_MON_ANT2<>§SI )
    // THEN:
    // *SET *CF=#0
    // #11
    // COND:
    // ( §FS_ACC_PRI_02=§SI ) AND ( §LA_ADD_LAT='DX' ) AND ( §FS_MON_ANT1<>§SI )
    // THEN:
    // *SET *CF=#0
    // #12
    // COND:
    // ( §FS_ACC_PRI<>§SI) AND (§FS_ACC_PRI_02<>§SI) AND ((§N_GAM_ANT_N_ANG>#0) OR (§N_GAM_POS_N_ANG>#0 )) AND (§NR_MON_ANG_MAN =#0)
    // THEN:
    // *SET *CF=[#2 - §N_GAM_ANT_N_ANG - §N_GAM_POS_N_ANG ]
    // #13
    // COND:
    // (§TI_ACC_TWI='02') AND (§FS_ACC_FIN=§SI ) AND (§N_GAM_ANT_N_ANG>#0)
    // THEN:
    // *SET *CF=#0
    // #14
    // COND:
    // ( §FS_ACC_FIN=§SI ) AND (§TI_ACC_TWI='02' ) AND ((§NR_MON_ANG_MAN>#0) OR (§N_GAM_POS_N_ANG>#0))
    // THEN:
    // *SET *CF=#0
    // #15
    // COND:
    // (§TI_ACC_TWI='02') AND (§FS_ACC_FIN=§SI ) AND (§FS_MON_ANT2=§SI ) AND (§L_SPO_MON_ANT2=#0 ) AND (§L_SBA_ANT2=#0 ) AND       ( §LA_ADD_LAT='SX' )
    // THEN:
    // *SET *CF=#1
    // #16
    // COND:
    // (§TI_ACC_TWI='02') AND (§FS_ACC_FIN=§SI ) AND (§FS_MON_ANT1=§SI ) AND (§L_SPO_MON_ANT1=#0 ) AND (§L_SBA_ANT1=#0 ) AND           ( §LA_ADD_LAT='DX' )
    // THEN:
    // *SET *CF=#1
    // #17
    // COND:
    // ( §FS_ACC_FIN=§SI ) AND (§TI_ACC_TWI='01' )
    // THEN:
    // *SET *CF= [ #2 - §NR_MON_ANG_MAN ]
    // """
    // RESPONSE:
    
    //#1
    vars.setCF(0);
    //#2
    if ((vars.get('§FS_ACC_PRI') != vars.get('§SI')) && (vars.get('§FS_ACC_PRI_02') != vars.get('§SI')) && (vars.get('§FS_ACC_CEN') != vars.get('§SI')) && (vars.get('§FS_ACC_FIN') != vars.get('§SI'))) {
        vars.setCF(2 - vars.get('§NR_MON_ANG_MAN'));
    }
    //#3
    if (vars.get('§FS_ACC_CEN') == vars.get('§SI')) {
        vars.setCF(0);
    }
    //#4
    if ((vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '02') && (vars.get('§N_GAM_ANT_N_ANG') == 0) && (vars.get('§N_GAM_POS_N_ANG') == 0) && (vars.get('§NR_MON_ANG_MAN') == 0)) {
        vars.setCF(vars.get('§NR_GAM_NOR_ANT') + vars.get('§NR_GAM_NOR_POS'));
    }
    //#5
    if ((vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '02') && ((vars.get('§N_GAM_ANT_N_ANG') > 0) || (vars.get('§NR_MON_ANG_MAN') > 0))) {
        vars.setCF(2 - vars.get('§NR_MON_ANG_MAN'));
    }
    //#6
    if ((vars.get('§FS_ACC_PRI_02') == vars.get('§SI')) && (vars.get('§N_GAM_POS_N_ANG') > 0)) {
        vars.setCF(1 - vars.get('§N_GAM_POS_N_ANG'));
    }
    //#7
    if ((vars.get('§FS_ACC_PRI_02') == vars.get('§SI')) && (vars.get('§N_GAM_POS_N_ANG') == 0)) {
        vars.setCF(vars.get('§NR_GAM_NOR_POS'));
    }
    //#8
    if ((vars.get('§TI_ACC_TWI') == '02') && (vars.get('§LA_ADD_LAT') == 'SX') && ((vars.get('§L_SBA_POS2') > 0) || (vars.get('§L_SPO_MON_POS2') > 0) || (vars.get('§FS_MON_POS_2') != vars.get('§SI')))) {
        vars.setCF(0);
    }
    //#9
    if ((vars.get('§TI_ACC_TWI') == '02') && (vars.get('§LA_ADD_LAT') == 'DX') && ((vars.get('§L_SBA_POS1') > 0) || (vars.get('§L_SPO_MON_POS1') > 0) || (vars.get('§FS_MON_POS_1') != vars.get('§SI')))) {
        vars.setCF(0);
    }
    //#10
    if ((vars.get('§FS_ACC_PRI_02') == vars.get('§SI')) && (vars.get('§LA_ADD_LAT') == 'SX') && (vars.get('§FS_MON_ANT2') != vars.get('§SI'))) {
        vars.setCF(0);
    }
    //#11
    if ((vars.get('§FS_ACC_PRI_02') == vars.get('§SI')) && (vars.get('§LA_ADD_LAT') == 'DX') && (vars.get('§FS_MON_ANT1') != vars.get('§SI'))) {
        vars.setCF(0);
    }
    //#12
    if ((vars.get('§FS_ACC_PRI') != vars.get('§SI')) && (vars.get('§FS_ACC_PRI_02') != vars.get('§SI')) && ((vars.get('§N_GAM_ANT_N_ANG') > 0) || (vars.get('§N_GAM_POS_N_ANG') > 0)) && (vars.get('§NR_MON_ANG_MAN') == 0)) {
        vars.setCF(2 - vars.get('§N_GAM_ANT_N_ANG') - vars.get('§N_GAM_POS_N_ANG'));
    }
    //#13
    if ((vars.get('§TI_ACC_TWI') == '02') && (vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§N_GAM_ANT_N_ANG') > 0)) {
        vars.setCF(0);
    }
    //#14
    if ((vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '02') && ((vars.get('§NR_MON_ANG_MAN') > 0) || (vars.get('§N_GAM_POS_N_ANG') > 0))) {
        vars.setCF(0);
    }
    //#15
    if ((vars.get('§TI_ACC_TWI') == '02') && (vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§FS_MON_ANT2') == vars.get('§SI')) && (vars.get('§L_SPO_MON_ANT2') == 0) && (vars.get('§L_SBA_ANT2') == 0) && (vars.get('§LA_ADD_LAT') == 'SX')) {
        vars.setCF(1);
    }
    //#16
    if ((vars.get('§TI_ACC_TWI') == '02') && (vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§FS_MON_ANT1') == vars.get('§SI')) && (vars.get('§L_SPO_MON_ANT1') == 0) && (vars.get('§L_SBA_ANT1') == 0) && (vars.get('§LA_ADD_LAT') == 'DX')) {
        vars.setCF(1);
    }
    //#17
    if ((vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '01')) {
        vars.setCF(2 - vars.get('§NR_MON_ANG_MAN'));
    }
    // GENERATED

    return vars.output;
};
