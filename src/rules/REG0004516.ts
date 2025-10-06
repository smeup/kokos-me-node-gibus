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

export const REG0004516: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004516
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // ( §FS_ACC_PRI<>§SI ) AND ( §FS_ACC_PRI_02<>§SI ) AND ( §N_GAM_ANT_N_ANG=#0 ) AND ( §N_GAM_POS_N_ANG=#0 ) AND                   ( §NR_MON_ANG_MAN=#0 )
    // THEN:
    // *SET *CF = [ §NR_GAM_NOR_ANT + §NR_GAM_NOR_POS ]
    // #3
    // COND:
    // ( §FS_FAM2_ADDF=§SI ) AND ( §FS_ACC_CEN=§SI ) AND ( §TI_ACC_TWI='01' )
    // THEN:
    // *SET *CF=#0
    // #4
    // COND:
    // ( §FS_FAM2_ADDF=§SI ) AND ( §TI_ACC_TWI='02' ) AND ( §FS_ACC_CEN =§SI )
    // THEN:
    // *SET *CF=#0
    // #5
    // COND:
    // ( §FS_ACC_PRI<>§SI ) AND ( §FS_ACC_PRI_02<>§SI ) AND  (( §N_GAM_ANT_N_ANG>#0 ) OR ( §N_GAM_POS_N_ANG>#0 )                           OR ( §NR_MON_ANG_MAN>#0 ))
    // THEN:
    // *SET *CF=[ #2 - §NR_MON_ANG_MAN ]
    // #6
    // COND:
    // ( §FS_ACC_PRI=§SI ) AND ( §L_SBA_ANT1=#0 ) AND ( §L_SPO_MON_ANT1=#0 ) AND ( §FS_MON_ANT1=§SI )
    // THEN:
    // *SET *CF=#1
    // #7
    // COND:
    // ( §TI_ACC_TWI='01') AND ( §FS_ACC_FIN=§SI ) AND ( §L_SBA_ANT2=#0 ) AND ( §L_SPO_MON_ANT2=#0 ) AND ( §FS_MON_ANT2=§SI )
    // THEN:
    // *SET *CF=#1
    // #8
    // COND:
    // ( §TI_ACC_TWI='01' ) AND ( §FS_ACC_FIN=§SI ) AND (( §L_SBA_ANT2>#0 ) OR ( §L_SPO_MON_ANT2>#0 ) OR ( §FS_MON_ANT2<>§SI ))
    // THEN:
    // *SET *CF=#0
    // #9
    // COND:
    // ( §TI_ACC_TWI='02' ) AND ( §FS_ACC_FIN =§SI ) AND ( §N_GAM_ANT_N_ANG=#0 ) AND ( §NR_MON_ANG_MAN=#0 )
    // THEN:
    // *SET *CF=#2
    // #10
    // COND:
    // ( §TI_ACC_TWI='02' ) AND ( §FS_ACC_FIN =§SI ) AND (( §N_GAM_ANT_N_ANG=#1 ) OR ( §NR_MON_ANG_MAN=#1 ))
    // THEN:
    // *SET *CF=#1
    // #11
    // COND:
    // ( §TI_ACC_TWI='02' ) AND ( §FS_ACC_FIN =§SI ) AND ( §N_GAM_ANT_N_ANG=#1 ) AND ( §NR_MON_ANG_MAN=#1 )
    // THEN:
    // *SET *CF=#0
    // #12
    // COND:
    // ( §TI_ACC_TWI='02' ) AND ( §FS_ACC_FIN =§SI ) AND (( §N_GAM_ANT_N_ANG=#2 ) OR ( §NR_MON_ANG_MAN=#2 ))
    // THEN:
    // *SET *CF=#0
    // #13
    // COND:
    // ( §FS_ACC_PRI=§SI ) AND (( §L_SBA_ANT1>#0 ) OR ( §L_SPO_MON_ANT1>#0 ) OR ( §FS_MON_ANT1<>§SI ))
    // THEN:
    // *SET *CF=#0
    // """
    // RESPONSE:
    
    //#1
    vars.setCF(0);
    //#2
    if ((vars.get('§FS_ACC_PRI') != vars.get('§SI')) && (vars.get('§FS_ACC_PRI_02') != vars.get('§SI')) && (vars.get('§N_GAM_ANT_N_ANG') == 0) && (vars.get('§N_GAM_POS_N_ANG') == 0) && (vars.get('§NR_MON_ANG_MAN') == 0)) {
        vars.setCF(vars.get('§NR_GAM_NOR_ANT') + vars.get('§NR_GAM_NOR_POS'));
    }
    //#3
    if ((vars.get('§FS_FAM2_ADDF') == vars.get('§SI')) && (vars.get('§FS_ACC_CEN') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '01')) {
        vars.setCF(0);
    }
    //#4
    if ((vars.get('§FS_FAM2_ADDF') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '02') && (vars.get('§FS_ACC_CEN') == vars.get('§SI'))) {
        vars.setCF(0);
    }
    //#5
    if ((vars.get('§FS_ACC_PRI') != vars.get('§SI')) && (vars.get('§FS_ACC_PRI_02') != vars.get('§SI')) && ((vars.get('§N_GAM_ANT_N_ANG') > 0) || (vars.get('§N_GAM_POS_N_ANG') > 0) || (vars.get('§NR_MON_ANG_MAN') > 0))) {
        vars.setCF(2 - vars.get('§NR_MON_ANG_MAN'));
    }
    //#6
    if ((vars.get('§FS_ACC_PRI') == vars.get('§SI')) && (vars.get('§L_SBA_ANT1') == 0) && (vars.get('§L_SPO_MON_ANT1') == 0) && (vars.get('§FS_MON_ANT1') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    //#7
    if ((vars.get('§TI_ACC_TWI') == '01') && (vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§L_SBA_ANT2') == 0) && (vars.get('§L_SPO_MON_ANT2') == 0) && (vars.get('§FS_MON_ANT2') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    //#8
    if ((vars.get('§TI_ACC_TWI') == '01') && (vars.get('§FS_ACC_FIN') == vars.get('§SI')) && ((vars.get('§L_SBA_ANT2') > 0) || (vars.get('§L_SPO_MON_ANT2') > 0) || (vars.get('§FS_MON_ANT2') != vars.get('§SI')))) {
        vars.setCF(0);
    }
    //#9
    if ((vars.get('§TI_ACC_TWI') == '02') && (vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§N_GAM_ANT_N_ANG') == 0) && (vars.get('§NR_MON_ANG_MAN') == 0)) {
        vars.setCF(2);
    }
    //#10
    if ((vars.get('§TI_ACC_TWI') == '02') && (vars.get('§FS_ACC_FIN') == vars.get('§SI')) && ((vars.get('§N_GAM_ANT_N_ANG') == 1) || (vars.get('§NR_MON_ANG_MAN') == 1))) {
        vars.setCF(1);
    }
    //#11
    if ((vars.get('§TI_ACC_TWI') == '02') && (vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§N_GAM_ANT_N_ANG') == 1) && (vars.get('§NR_MON_ANG_MAN') == 1)) {
        vars.setCF(0);
    }
    //#12
    if ((vars.get('§TI_ACC_TWI') == '02') && (vars.get('§FS_ACC_FIN') == vars.get('§SI')) && ((vars.get('§N_GAM_ANT_N_ANG') == 2) || (vars.get('§NR_MON_ANG_MAN') == 2))) {
        vars.setCF(0);
    }
    //#13
    if ((vars.get('§FS_ACC_PRI') == vars.get('§SI')) && ((vars.get('§L_SBA_ANT1') > 0) || (vars.get('§L_SPO_MON_ANT1') > 0) || (vars.get('§FS_MON_ANT1') != vars.get('§SI')))) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
