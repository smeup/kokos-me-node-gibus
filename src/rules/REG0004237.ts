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

export const REG0004237: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004237
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // THEN:
    // *SET *CF=#0
    // #3
    // COND:
    // ( §FS_ACC_PRI<>§SI ) AND ( §FS_ACC_PRI_02<>§SI ) AND ( §FS_ACC_CEN<>§SI ) AND ( §FS_ACC_FIN<>§SI ) AND                        ( §FS_STA_MUR_ANT1=§SI ) AND ( §FS_STA_MUR_POS1=§SI )
    // THEN:
    // *SET *CF= [ #2 - §NR_MON_ANG_MAN ]
    // #4
    // COND:
    // ( §FS_ACC_PRI<>§SI ) AND ( §FS_ACC_PRI_02<>§SI ) AND ( §FS_ACC_CEN<>§SI ) AND ( §FS_ACC_FIN<>§SI )
    // THEN:
    // *SET *CF= [ #4 - §NR_MON_ANG_MAN ]
    // #5
    // COND:
    // ( §FS_ACC_CEN=§SI )
    // THEN:
    // *SET *CF=#0
    // #6
    // COND:
    // ( §FS_ACC_PRI=§SI ) AND ( §FS_ACC_DX_SX=§SI ) AND ( (( §L_SPO_MON_ANT2=#0 ) AND ( §L_SBA_ANT2=#0 ) AND ( §FS_MON_ANT2=§SI ))  OR (( §L_SPO_MON_POS2=#0) AND ( §L_SBA_POS2=#0 ) AND ( §FS_MON_POS_2=§SI )) )
    // THEN:
    // *SET *CF=#1
    // #7
    // COND:
    // (§FS_ACC_PRI=§SI) AND (§FS_ACC_DX_SX=§SI) AND ( §L_SPO_MON_ANT2=#0 ) AND ( §L_SBA_ANT2=#0 ) AND ( §L_SPO_MON_POS2=#0 ) AND      ( §L_SBA_POS2=#0 ) AND (§FS_MON_ANT2=§SI ) AND (§FS_MON_POS_2=§SI )
    // THEN:
    // *SET *CF=#2
    // #8
    // COND:
    // ( §FS_ACC_FIN=§SI ) AND (§TI_ACC_TWI='02' ) AND ( §N_GAM_ANT_N_ANG=#0 ) AND ( §N_GAM_POS_N_ANG=#0 ) AND (§NR_MON_ANG_MAN=#0 )
    // THEN:
    // *SET *CF= [ §NR_GAM_NOR_ANT + §NR_GAM_NOR_POS ]
    // #9
    // COND:
    // (§FS_ACC_PRI=§SI) AND (§FS_ACC_SX_DX=§SI) AND ( ((§L_SPO_MON_ANT1=#0) AND (§L_SBA_ANT1=#0) AND (§FS_MON_ANT1=§SI)) OR            ((§L_SPO_MON_POS1=#0) AND (§L_SBA_POS1=#0) AND ( §FS_MON_POS_1=§SI )) )
    // THEN:
    // *SET *CF=#1
    // #10
    // COND:
    // ( §FS_ACC_FIN=§SI ) AND ( §TI_ACC_TWI='02' ) AND (( §N_GAM_ANT_N_ANG>#0 ) OR ( §NR_MON_ANG_MAN >#0 ))
    // THEN:
    // *SET *CF=[ #2 - §NR_MON_ANG_MAN ]
    // #11
    // COND:
    // (§FS_ACC_PRI=§SI) AND (§FS_ACC_SX_DX=§SI) AND ( §L_SPO_MON_ANT1=#0 ) AND ( §L_SBA_ANT1=#0 ) AND ( §FS_MON_ANT1=§SI ) AND     ( §L_SPO_MON_POS1=#0 ) AND ( §L_SBA_POS1=#0 ) AND ( §FS_MON_POS_1=§SI )
    // THEN:
    // *SET *CF=#2
    // #12
    // COND:
    // ( §FS_ACC_PRI_02=§SI ) AND (§N_GAM_POS_N_ANG >#0 )
    // THEN:
    // *SET *CF= [ #1 - §N_GAM_POS_N_ANG ]
    // #13
    // COND:
    // ( §FS_ACC_CEN=§SI )
    // THEN:
    // *SET *CF=#0
    // #14
    // COND:
    // ( §FS_ACC_PRI_02=§SI ) AND (§N_GAM_POS_N_ANG =#0 )
    // THEN:
    // *SET *CF=[ §NR_GAM_NOR_POS ]
    // #15
    // COND:
    // (§FS_ACC_FIN=§SI) AND (§FS_ACC_DX_SX=§SI) AND (§TI_ACC_TWI='01') AND ( ((§L_SPO_MON_ANT1=#0) AND (§L_SBA_ANT1=#0) AND        (§FS_MON_ANT1=§SI)) OR ((§L_SPO_MON_POS1=#0) AND (§L_SBA_POS1=#0) AND (§FS_MON_POS_1=§SI)) )
    // THEN:
    // *SET *CF=#1
    // #16
    // COND:
    // (§FS_ACC_FIN=§SI) AND (§FS_ACC_DX_SX=§SI) AND (§TI_ACC_TWI='01') AND ( ((§L_SPO_MON_ANT1=#0) AND (§L_SBA_ANT1=#0)          AND (§FS_MON_ANT1=§SI)) AND  ((§L_SPO_MON_POS1=#0) AND (§L_SBA_POS1=#0) AND (§FS_MON_POS_1=§SI)) )
    // THEN:
    // *SET *CF=#2
    // #17
    // COND:
    // ( §TI_ACC_TWI='02' ) AND (§LA_ADD_LAT='SX' ) AND ( (§L_SBA_POS2 > #0 ) OR (§L_SPO_MON_POS2 >#0 ) OR (§FS_MON_POS_2<>§SI) )    AND (§FS_STA_MUR_ANT1=§SI )
    // THEN:
    // *SET *CF=#0
    // #18
    // COND:
    // (§FS_ACC_FIN=§SI) AND (§FS_ACC_SX_DX=§SI) AND (§TI_ACC_TWI='01') AND ( ((§L_SPO_MON_ANT2=#0) AND (§L_SBA_ANT2=#0) AND        (§FS_MON_ANT2=§SI)) OR ((§L_SPO_MON_POS2=#0) AND (§L_SBA_POS2=#0) AND (§FS_MON_POS_2=§SI )) )
    // THEN:
    // *SET *CF=#1
    // #19
    // COND:
    // ( §TI_ACC_TWI='02' ) AND (§LA_ADD_LAT='DX' ) AND ((§L_SBA_POS1 >#0 ) OR (§L_SPO_MON_POS1>#0 ) OR (§FS_MON_POS_1<>§SI) )
    // THEN:
    // *SET *CF=#0
    // #20
    // COND:
    // ( §FS_ACC_FIN=§SI ) AND ( §FS_ACC_SX_DX=§SI ) AND ( §TI_ACC_TWI='01' ) AND ( §L_SPO_MON_ANT2=#0 ) AND ( §L_SBA_ANT2=#0 )     AND ( §FS_MON_ANT2=§SI ) AND ( §L_SPO_MON_POS2=#0 ) AND ( §L_SBA_POS2=#0 ) AND (§FS_MON_POS_2=§SI )
    // THEN:
    // *SET *CF=#2
    // #21
    // COND:
    // ( §FS_ACC_PRI_02=§SI ) AND ( §LA_ADD_LAT='SX' ) AND ( §FS_MON_ANT2<>§SI )
    // THEN:
    // *SET *CF=#0
    // #22
    // COND:
    // (§FS_ACC_PRI_02=§SI ) AND (§FS_ACC_POS_ANT=§SI )  AND ( (( §L_SPO_MON_POS2=#0 ) AND ( §L_SBA_POS2=#0 ) AND                   ( §FS_MON_POS_2=§SI )) OR ((§L_SPO_MON_POS1=#0) AND (§L_SBA_POS1=#0) AND (§FS_MON_POS_1=§SI )) )
    // THEN:
    // *SET *CF=#1
    // #23
    // COND:
    // ( §FS_ACC_PRI_02=§SI ) AND ( §LA_ADD_LAT='DX' ) AND ( §FS_MON_ANT1<>§SI )
    // THEN:
    // *SET *CF=#0
    // #24
    // COND:
    // ( §FS_ACC_PRI_02=§SI ) AND ( §FS_ACC_POS_ANT=§SI )  AND ( §L_SPO_MON_POS2=#0 ) AND ( §L_SBA_POS2=#0 ) AND (§FS_MON_POS_2=§SI)  AND ( §L_SPO_MON_POS1=#0 ) AND ( §L_SBA_POS1=#0 ) AND (§FS_MON_POS_1=§SI )
    // THEN:
    // *SET *CF=#2
    // #25
    // COND:
    // ( §FS_ACC_PRI<>§SI) AND (§FS_ACC_PRI_02<>§SI) AND ((§N_GAM_ANT_N_ANG>#0) OR (§N_GAM_POS_N_ANG>#0 )) AND (§NR_MON_ANG_MAN =#0)
    // THEN:
    // *SET *CF=[#2 - §N_GAM_ANT_N_ANG - §N_GAM_POS_N_ANG ]
    // #26
    // COND:
    // ( §FS_ACC_FIN=§SI ) AND ( §FS_ACC_POS_ANT=§SI ) AND ( §TI_ACC_TWI='02' ) AND ( ((§L_SPO_MON_ANT2=#0 ) AND ( §L_SBA_ANT2=#0 ) AND ( §FS_MON_ANT2=§SI )) OR (( §L_SPO_MON_ANT1=#0 ) AND ( §L_SBA_ANT1=#0 ) AND ( §FS_MON_ANT1=§SI )) )
    // THEN:
    // *SET *CF=#1
    // #27
    // COND:
    // (§TI_ACC_TWI='02') AND (§FS_ACC_FIN=§SI ) AND (§N_GAM_ANT_N_ANG>#0)
    // THEN:
    // *SET *CF=#0
    // #28
    // COND:
    // ( §FS_ACC_FIN=§SI ) AND ( §FS_ACC_POS_ANT=§SI ) AND ( §TI_ACC_TWI='02' ) AND ( §L_SPO_MON_ANT2=#0 ) AND ( §L_SBA_ANT2=#0 )   AND ( §FS_MON_ANT2=§SI ) AND ( §L_SPO_MON_ANT1=#0 ) AND ( §L_SBA_ANT1=#0 ) AND ( §FS_MON_ANT1=§SI )
    // THEN:
    // *SET *CF=#2
    // #29
    // COND:
    // (§FS_ACC_FIN=§SI ) AND (§TI_ACC_TWI='02' ) AND ((§NR_MON_ANG_MAN>#0) OR (§N_GAM_POS_N_ANG>#0))
    // THEN:
    // *SET *CF=#0
    // #30
    // COND:
    // ( §FS_ACC_PRI=§SI ) AND (§FS_ACC_DX_SX=§SI ) AND ( ((§FS_MON_POS_2<>§SI ) OR ( §L_SBA_POS2>#0 ) OR ( §L_SPO_MON_POS2>#0 )) OR   ((§FS_MON_ANT2<>§SI ) OR (§L_SBA_ANT2>#0) OR (§L_SPO_MON_ANT2>#0) ))
    // THEN:
    // *SET *CF=#1
    // #31
    // COND:
    // ( §FS_ACC_PRI=§SI ) AND (§FS_ACC_DX_SX=§SI ) AND ( ((§FS_MON_POS_2<>§SI ) OR (§L_SBA_POS2>#0) OR ( §L_SPO_MON_POS2>#0 )) AND  (( §FS_MON_ANT2<>§SI ) OR (§L_SBA_ANT2>#0) OR (§L_SPO_MON_ANT2>#0)) )
    // THEN:
    // *SET *CF=#0
    // #32
    // COND:
    // ( §TI_ACC_TWI='02' ) AND ( §FS_ACC_FIN=§SI ) AND ( §FS_MON_ANT2=§SI ) AND ( §L_SPO_MON_ANT2=#0 ) AND ( §L_SBA_ANT2=#0 ) AND  ( §LA_ADD_LAT='SX' )
    // THEN:
    // *SET *CF=#1
    // #33
    // COND:
    // (§FS_ACC_PRI=§SI) AND (§FS_ACC_SX_DX=§SI) AND ( ((§FS_MON_POS_1<>§SI ) OR (§L_SPO_MON_POS1>#0) OR (§L_SBA_POS1>#0)) OR        ((§FS_MON_ANT1<>§SI ) OR (§L_SPO_MON_ANT1>#0) OR (§L_SBA_ANT1>#0)) )
    // THEN:
    // *SET *CF=#1
    // #34
    // COND:
    // ( §TI_ACC_TWI='02' ) AND ( §FS_ACC_FIN=§SI ) AND ( §FS_MON_ANT1=§SI ) AND ( §L_SPO_MON_ANT1=#0 ) AND ( §L_SBA_ANT1=#0 ) AND  ( §LA_ADD_LAT='DX' )
    // THEN:
    // *SET *CF=#1
    // #35
    // COND:
    // (§FS_ACC_PRI=§SI) AND (§FS_ACC_SX_DX=§SI) AND ( ((§FS_MON_POS_1<>§SI ) OR (§L_SPO_MON_POS1>#0) OR (§L_SBA_POS1>#0)) AND       ((§FS_MON_ANT1<>§SI ) OR (§L_SPO_MON_ANT1>#0) OR (§L_SBA_ANT1>#0)) )
    // THEN:
    // *SET *CF=#0
    // #36
    // COND:
    // ( §FS_ACC_FIN=§SI ) AND (§TI_ACC_TWI='01' )
    // THEN:
    // *SET *CF= [ #2 - §NR_MON_ANG_MAN ]
    // #37
    // COND:
    // (§FS_ACC_FIN=§SI) AND (§FS_ACC_DX_SX=§SI) AND (§TI_ACC_TWI='01') AND ( (( §FS_MON_ANT1<>§SI ) OR ( §L_SPO_MON_ANT1>#0 ) OR    ( §L_SBA_ANT1>#0 )) OR ((§L_SPO_MON_POS1>#0) OR (§L_SBA_POS1>#0) OR (§FS_MON_POS_1<>§SI)) )
    // THEN:
    // *SET *CF=#1
    // #38
    // COND:
    // (§FS_ACC_FIN=§SI) AND (§FS_ACC_DX_SX=§SI) AND (§TI_ACC_TWI='01') AND ( (( §FS_MON_ANT1<>§SI ) OR ( §L_SPO_MON_ANT1>#0 ) OR    ( §L_SBA_ANT1>#0 )) AND (( §L_SPO_MON_POS1>#0) OR (§L_SBA_POS1>#0) OR (§FS_MON_POS_1<>§SI)) )
    // THEN:
    // *SET *CF=#0
    // #39
    // COND:
    // ( §FS_ACC_PRI<>§SI ) AND ( §FS_ACC_PRI_02<>§SI ) AND (§FS_ACC_CEN<>§SI ) AND ( §FS_ACC_FIN<>§SI ) AND                         ( §FS_STA_MUR_ANT1<>§SI ) AND ( §FS_STA_MUR_POS1<>§SI )
    // THEN:
    // *SET *CF= [ #4 - §NR_MON_MAN ]
    // #40
    // COND:
    // ( §FS_ACC_FIN=§SI ) AND ( §FS_ACC_SX_DX=§SI ) AND ( §TI_ACC_TWI='01' ) AND ( ((§FS_MON_ANT2<>§SI) OR ( §L_SPO_MON_ANT2>#0 )  OR ( §L_SBA_ANT2>#0 )) OR (( §FS_MON_ANT2<>§SI ) OR ( §L_SPO_MON_POS2>#0 ) OR ( §L_SBA_POS2>#0 )) )
    // THEN:
    // *SET *CF=#1
    // #41
    // COND:
    // ( §TI_ACC_TWI='02' ) AND ( §FS_ACC_FIN=§SI ) AND (§FS_STA_MUR_ANT1<>§SI )
    // THEN:
    // *SET *CF= [ #2 - §NR_MON_ANG_MAN ]
    // #42
    // COND:
    // ( §FS_ACC_FIN=§SI ) AND ( §FS_ACC_SX_DX=§SI ) AND ( §TI_ACC_TWI='01' ) AND ( ((§FS_MON_ANT2<>§SI) OR ( §L_SPO_MON_ANT2>#0 )    OR ( §L_SBA_ANT2>#0 )) AND (( §FS_MON_ANT2<>§SI ) OR ( §L_SPO_MON_POS2>#0 ) OR ( §L_SBA_POS2>#0 )) )
    // THEN:
    // *SET *CF=#0
    // #43
    // COND:
    // ( §TI_ACC_TWI='02' ) AND ( §FS_ACC_FIN=§SI ) AND (§FS_STA_MUR_ANT1=§SI )
    // THEN:
    // *SET *CF= [ #1 - §NR_MON_ANG_MAN ]
    // #44
    // COND:
    // (§FS_ACC_PRI_02=§SI ) AND (§FS_ACC_POS_ANT=§SI ) AND ( ((§FS_MON_POS_2<>§SI ) OR (§L_SPO_MON_POS2>#0 ) OR (§L_SBA_POS2>#0))   OR (( §L_SPO_MON_POS1>#0) OR (§L_SBA_POS1>#0) OR (§FS_MON_POS_1<>§SI )) )
    // THEN:
    // *SET *CF=#1
    // #45
    // COND:
    // (§FS_ACC_PRI_02=§SI ) AND (§FS_ACC_POS_ANT=§SI ) AND ( ((§FS_MON_POS_2<>§SI ) OR (§L_SPO_MON_POS2>#0 ) OR ( §L_SBA_POS2>#0))  AND (( §L_SPO_MON_POS1>#0) OR (§L_SBA_POS1>#0) OR (§FS_MON_POS_1<>§SI )) )
    // THEN:
    // *SET *CF=#0
    // #46
    // COND:
    // ( §FS_ACC_FIN=§SI ) AND ( §FS_ACC_POS_ANT=§SI ) AND ( §TI_ACC_TWI='02' ) AND ( ((§FS_MON_ANT2<>§SI ) OR (§L_SPO_MON_ANT2>#0 )OR ( §L_SBA_ANT2>#0 )) OR  (( §L_SPO_MON_ANT1>#0 ) OR ( §L_SBA_ANT1>#0 ) OR ( §FS_MON_ANT1<>§SI )) )
    // THEN:
    // *SET *CF=#1
    // #47
    // COND:
    // ( §FS_ACC_FIN=§SI ) AND ( §FS_ACC_POS_ANT=§SI ) AND ( §TI_ACC_TWI='02' ) AND ( ((§FS_MON_ANT2<>§SI ) OR (§L_SPO_MON_ANT2>#0 )OR ( §L_SBA_ANT2>#0 )) AND (( §L_SPO_MON_ANT1>#0 ) OR ( §L_SBA_ANT1>#0 ) OR ( §FS_MON_ANT1<>§SI )) )
    // THEN:
    // *SET *CF=#0
    // """
    // RESPONSE:
    
    //#1
    vars.setCF(0);
    //#2
    vars.setCF(0);
    //#3
    if ((vars.get('§FS_ACC_PRI') != vars.get('§SI')) && (vars.get('§FS_ACC_PRI_02') != vars.get('§SI')) && (vars.get('§FS_ACC_CEN') != vars.get('§SI')) && (vars.get('§FS_ACC_FIN') != vars.get('§SI')) && (vars.get('§FS_STA_MUR_ANT1') == vars.get('§SI')) && (vars.get('§FS_STA_MUR_POS1') == vars.get('§SI'))) {
        vars.setCF(vars.get('§NR_MON_ANG_MAN'));
    }
    //#4
    if ((vars.get('§FS_ACC_PRI') != vars.get('§SI')) && (vars.get('§FS_ACC_PRI_02') != vars.get('§SI')) && (vars.get('§FS_ACC_CEN') != vars.get('§SI')) && (vars.get('§FS_ACC_FIN') != vars.get('§SI'))) {
        vars.setCF(vars.get('§NR_MON_ANG_MAN'));
    }
    //#5
    if (vars.get('§FS_ACC_CEN') == vars.get('§SI')) {
        vars.setCF(0);
    }
    //#6
    if ((vars.get('§FS_ACC_PRI') == vars.get('§SI')) && (vars.get('§FS_ACC_DX_SX') == vars.get('§SI')) && (((vars.get('§L_SPO_MON_ANT2') == 0) && (vars.get('§L_SBA_ANT2') == 0) && (vars.get('§FS_MON_ANT2') == vars.get('§SI'))) || ((vars.get('§L_SPO_MON_POS2') == 0) && (vars.get('§L_SBA_POS2') == 0) && (vars.get('§FS_MON_POS_2') == vars.get('§SI'))))) {
        vars.setCF(1);
    }
    //#7
    if ((vars.get('§FS_ACC_PRI') == vars.get('§SI')) && (vars.get('§FS_ACC_DX_SX') == vars.get('§SI')) && (vars.get('§L_SPO_MON_ANT2') == 0) && (vars.get('§L_SBA_ANT2') == 0) && (vars.get('§L_SPO_MON_POS2') == 0) && (vars.get('§L_SBA_POS2') == 0) && (vars.get('§FS_MON_ANT2') == vars.get('§SI')) && (vars.get('§FS_MON_POS_2') == vars.get('§SI'))) {
        vars.setCF(2);
    }
    //#8
    if ((vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '02') && (vars.get('§N_GAM_ANT_N_ANG') == 0) && (vars.get('§N_GAM_POS_N_ANG') == 0) && (vars.get('§NR_MON_ANG_MAN') == 0)) {
        vars.setCF(vars.get('§NR_GAM_NOR_ANT') + vars.get('§NR_GAM_NOR_POS'));
    }
    //#9
    if ((vars.get('§FS_ACC_PRI') == vars.get('§SI')) && (vars.get('§FS_ACC_SX_DX') == vars.get('§SI')) && (((vars.get('§L_SPO_MON_ANT1') == 0) && (vars.get('§L_SBA_ANT1') == 0) && (vars.get('§FS_MON_ANT1') == vars.get('§SI'))) || ((vars.get('§L_SPO_MON_POS1') == 0) && (vars.get('§L_SBA_POS1') == 0) && (vars.get('§FS_MON_POS_1') == vars.get('§SI'))))) {
        vars.setCF(1);
    }
    //#10
    if ((vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '02') && ((vars.get('§N_GAM_ANT_N_ANG') > 0) || (vars.get('§NR_MON_ANG_MAN') > 0))) {
        vars.setCF(vars.get('§NR_MON_ANG_MAN'));
    }
    //#11
    if ((vars.get('§FS_ACC_PRI') == vars.get('§SI')) && (vars.get('§FS_ACC_SX_DX') == vars.get('§SI')) && (vars.get('§L_SPO_MON_ANT1') == 0) && (vars.get('§L_SBA_ANT1') == 0) && (vars.get('§FS_MON_ANT1') == vars.get('§SI')) && (vars.get('§L_SPO_MON_POS1') == 0) && (vars.get('§L_SBA_POS1') == 0) && (vars.get('§FS_MON_POS_1') == vars.get('§SI'))) {
        vars.setCF(2);
    }
    //#12
    if ((vars.get('§FS_ACC_PRI_02') == vars.get('§SI')) && (vars.get('§N_GAM_POS_N_ANG') > 0)) {
        vars.setCF(vars.get('§NR_GAM_NOR_POS') - vars.get('§N_GAM_POS_N_ANG'));
    }
    //#13
    if (vars.get('§FS_ACC_CEN') == vars.get('§SI')) {
        vars.setCF(0);
    }
    //#14
    if ((vars.get('§FS_ACC_PRI_02') == vars.get('§SI')) && (vars.get('§N_GAM_POS_N_ANG') == 0)) {
        vars.setCF(vars.get('§NR_GAM_NOR_POS'));
    }
    //#15
    if ((vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§FS_ACC_DX_SX') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '01') && (((vars.get('§L_SPO_MON_ANT1') == 0) && (vars.get('§L_SBA_ANT1') == 0) && (vars.get('§FS_MON_ANT1') == vars.get('§SI'))) || ((vars.get('§L_SPO_MON_POS1') == 0) && (vars.get('§L_SBA_POS1') == 0) && (vars.get('§FS_MON_POS_1') == vars.get('§SI'))))) {
        vars.setCF(1);
    }
    //#16
    if ((vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§FS_ACC_DX_SX') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '01') && (((vars.get('§L_SPO_MON_ANT1') == 0) && (vars.get('§L_SBA_ANT1') == 0) && (vars.get('§FS_MON_ANT1') == vars.get('§SI'))) && ((vars.get('§L_SPO_MON_POS1') == 0) && (vars.get('§L_SBA_POS1') == 0) && (vars.get('§FS_MON_POS_1') == vars.get('§SI'))))) {
        vars.setCF(2);
    }
    //#17
    if ((vars.get('§TI_ACC_TWI') == '02') && (vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§LA_ADD_LAT') == 'SX') && ((vars.get('§L_SBA_POS2') > 0) || (vars.get('§L_SPO_MON_POS2') > 0) || (vars.get('§FS_MON_POS_2') != vars.get('§SI'))) && (vars.get('§FS_STA_MUR_ANT1') == vars.get('§SI'))) {
        vars.setCF(0);
    }
    //#18
    if ((vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§FS_ACC_SX_DX') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '01') && (((vars.get('§L_SPO_MON_ANT2') == 0) && (vars.get('§L_SBA_ANT2') == 0) && (vars.get('§FS_MON_ANT2') == vars.get('§SI'))) || ((vars.get('§L_SPO_MON_POS2') == 0) && (vars.get('§L_SBA_POS2') == 0) && (vars.get('§FS_MON_POS_2') == vars.get('§SI'))))) {
        vars.setCF(1);
    }
    //#19
    if ((vars.get('§TI_ACC_TWI') == '02') && (vars.get('§LA_ADD_LAT') == 'DX') && ((vars.get('§L_SBA_POS1') > 0) || (vars.get('§L_SPO_MON_POS1') > 0) || (vars.get('§FS_MON_POS_1') != vars.get('§SI')))) {
        vars.setCF(0);
    }
    //#20
    if ((vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§FS_ACC_SX_DX') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '01') && (vars.get('§L_SPO_MON_ANT2') == 0) && (vars.get('§L_SBA_ANT2') == 0) && (vars.get('§FS_MON_ANT2') == vars.get('§SI')) && (vars.get('§L_SPO_MON_POS2') == 0) && (vars.get('§L_SBA_POS2') == 0) && (vars.get('§FS_MON_POS_2') == vars.get('§SI'))) {
        vars.setCF(2);
    }
    //#21
    if ((vars.get('§FS_ACC_PRI_02') == vars.get('§SI')) && (vars.get('§LA_ADD_LAT') == 'SX') && (vars.get('§FS_MON_ANT2') != vars.get('§SI'))) {
        vars.setCF(0);
    }
    //#22
    if ((vars.get('§FS_ACC_PRI_02') == vars.get('§SI')) && (vars.get('§FS_ACC_POS_ANT') == vars.get('§SI')) && (((vars.get('§L_SPO_MON_POS2') == 0) && (vars.get('§L_SBA_POS2') == 0) && (vars.get('§FS_MON_POS_2') == vars.get('§SI'))) || ((vars.get('§L_SPO_MON_POS1') == 0) && (vars.get('§L_SBA_POS1') == 0) && (vars.get('§FS_MON_POS_1') == vars.get('§SI'))))) {
        vars.setCF(1);
    }
    //#23
    if ((vars.get('§FS_ACC_PRI_02') == vars.get('§SI')) && (vars.get('§LA_ADD_LAT') == 'DX') && (vars.get('§FS_MON_ANT1') != vars.get('§SI'))) {
        vars.setCF(0);
    }
    //#24
    if ((vars.get('§FS_ACC_PRI_02') == vars.get('§SI')) && (vars.get('§FS_ACC_POS_ANT') == vars.get('§SI')) && (vars.get('§L_SPO_MON_POS2') == 0) && (vars.get('§L_SBA_POS2') == 0) && (vars.get('§FS_MON_POS_2') == vars.get('§SI')) && (vars.get('§L_SPO_MON_POS1') == 0) && (vars.get('§L_SBA_POS1') == 0) && (vars.get('§FS_MON_POS_1') == vars.get('§SI'))) {
        vars.setCF(2);
    }
    //#25
    if ((vars.get('§FS_ACC_PRI') != vars.get('§SI')) && (vars.get('§FS_ACC_PRI_02') != vars.get('§SI')) && ((vars.get('§N_GAM_ANT_N_ANG') > 0) || (vars.get('§N_GAM_POS_N_ANG') > 0)) && (vars.get('§NR_MON_ANG_MAN') == 0)) {
        vars.setCF(vars.get('§NR_MON_ANG_MAN') - vars.get('§N_GAM_ANT_N_ANG') - vars.get('§N_GAM_POS_N_ANG'));
    }
    //#26
    if ((vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§FS_ACC_POS_ANT') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '02') && (((vars.get('§L_SPO_MON_ANT2') == 0) && (vars.get('§L_SBA_ANT2') == 0) && (vars.get('§FS_MON_ANT2') == vars.get('§SI'))) || ((vars.get('§L_SPO_MON_ANT1') == 0) && (vars.get('§L_SBA_ANT1') == 0) && (vars.get('§FS_MON_ANT1') == vars.get('§SI'))))) {
        vars.setCF(1);
    }
    //#27
    if ((vars.get('§TI_ACC_TWI') == '02') && (vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§N_GAM_ANT_N_ANG') > 0)) {
        vars.setCF(0);
    }
    //#28
    if ((vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§FS_ACC_POS_ANT') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '02') && (((vars.get('§L_SPO_MON_ANT2') == 0) && (vars.get('§L_SBA_ANT2') == 0) && (vars.get('§FS_MON_ANT2') == vars.get('§SI'))) && ((vars.get('§L_SPO_MON_ANT1') == 0) && (vars.get('§L_SBA_ANT1') == 0) && (vars.get('§FS_MON_ANT1') == vars.get('§SI'))))) {
        vars.setCF(2);
    }
    //#29
    if ((vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '02') && ((vars.get('§NR_MON_ANG_MAN') > 0) || (vars.get('§N_GAM_POS_N_ANG') > 0))) {
        vars.setCF(0);
    }
    //#30
    if ((vars.get('§FS_ACC_PRI') == vars.get('§SI')) && (vars.get('§FS_ACC_DX_SX') == vars.get('§SI')) && (((vars.get('§FS_MON_POS_2') != vars.get('§SI')) || (vars.get('§L_SBA_POS2') > 0) || (vars.get('§L_SPO_MON_POS2') > 0)) || ((vars.get('§FS_MON_ANT2') != vars.get('§SI')) || (vars.get('§L_SBA_ANT2') > 0) || (vars.get('§L_SPO_MON_ANT2') > 0)))) {
        vars.setCF(1);
    }
    //#31
    if ((vars.get('§FS_ACC_PRI') == vars.get('§SI')) && (vars.get('§FS_ACC_DX_SX') == vars.get('§SI')) && (((vars.get('§FS_MON_POS_2') != vars.get('§SI')) || (vars.get('§L_SBA_POS2') > 0) || (vars.get('§L_SPO_MON_POS2') > 0)) && ((vars.get('§FS_MON_ANT2') != vars.get('§SI')) || (vars.get('§L_SBA_ANT2') > 0) || (vars.get('§L_SPO_MON_ANT2') > 0)))) {
        vars.setCF(0);
    }
    //#32
    if ((vars.get('§TI_ACC_TWI') == '02') && (vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§FS_MON_ANT2') == vars.get('§SI')) && (vars.get('§L_SPO_MON_ANT2') == 0) && (vars.get('§L_SBA_ANT2') == 0) && (vars.get('§LA_ADD_LAT') == 'SX')) {
        vars.setCF(1);
    }
    //#33
    if ((vars.get('§FS_ACC_PRI') == vars.get('§SI')) && (vars.get('§FS_ACC_SX_DX') == vars.get('§SI')) && (((vars.get('§FS_MON_POS_1') != vars.get('§SI')) || (vars.get('§L_SPO_MON_POS1') > 0) || (vars.get('§L_SBA_POS1') > 0)) || ((vars.get('§FS_MON_ANT1') != vars.get('§SI')) || (vars.get('§L_SPO_MON_ANT1') > 0) || (vars.get('§L_SBA_ANT1') > 0)))) {
        vars.setCF(1);
    }
    //#34
    if ((vars.get('§TI_ACC_TWI') == '02') && (vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§FS_MON_ANT1') == vars.get('§SI')) && (vars.get('§L_SPO_MON_ANT1') == 0) && (vars.get('§L_SBA_ANT1') == 0) && (vars.get('§LA_ADD_LAT') == 'DX')) {
        vars.setCF(1);
    }
    //#35
    if ((vars.get('§FS_ACC_PRI') == vars.get('§SI')) && (vars.get('§FS_ACC_SX_DX') == vars.get('§SI')) && (((vars.get('§FS_MON_POS_1') != vars.get('§SI')) || (vars.get('§L_SPO_MON_POS1') > 0) || (vars.get('§L_SBA_POS1') > 0)) && ((vars.get('§FS_MON_ANT1') != vars.get('§SI')) || (vars.get('§L_SPO_MON_ANT1') > 0) || (vars.get('§L_SBA_ANT1') > 0)))) {
        vars.setCF(0);
    }
    //#36
    if ((vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '01')) {
        vars.setCF(vars.get('§NR_MON_ANG_MAN'));
    }
    //#37
    if ((vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§FS_ACC_DX_SX') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '01') && (((vars.get('§FS_MON_ANT1') != vars.get('§SI')) || (vars.get('§L_SPO_MON_ANT1') > 0) || (vars.get('§L_SBA_ANT1') > 0)) || ((vars.get('§L_SPO_MON_POS1') > 0) || (vars.get('§L_SBA_POS1') > 0) || (vars.get('§FS_MON_POS_1') != vars.get('§SI'))))) {
        vars.setCF(1);
    }
    //#38
    if ((vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§FS_ACC_DX_SX') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '01') && (((vars.get('§FS_MON_ANT1') != vars.get('§SI')) || (vars.get('§L_SPO_MON_ANT1') > 0) || (vars.get('§L_SBA_ANT1') > 0)) && ((vars.get('§L_SPO_MON_POS1') > 0) || (vars.get('§L_SBA_POS1') > 0) || (vars.get('§FS_MON_POS_1') != vars.get('§SI'))))) {
        vars.setCF(0);
    }
    //#39
    if ((vars.get('§FS_ACC_PRI') != vars.get('§SI')) && (vars.get('§FS_ACC_PRI_02') != vars.get('§SI')) && (vars.get('§FS_ACC_CEN') != vars.get('§SI')) && (vars.get('§FS_ACC_FIN') != vars.get('§SI')) && (vars.get('§FS_STA_MUR_ANT1') != vars.get('§SI')) && (vars.get('§FS_STA_MUR_POS1') != vars.get('§SI'))) {
        vars.setCF(vars.get('§NR_MON_MAN') - vars.get('§NR_MON_ANG_MAN'));
    }
    //#40
    if ((vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§FS_ACC_SX_DX') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '01') && (((vars.get('§FS_MON_ANT2') != vars.get('§SI')) || (vars.get('§L_SPO_MON_ANT2') > 0) || (vars.get('§L_SBA_ANT2') > 0)) || ((vars.get('§FS_MON_ANT2') != vars.get('§SI')) || (vars.get('§L_SPO_MON_POS2') > 0) || (vars.get('§L_SBA_POS2') > 0)))) {
        vars.setCF(1);
    }
    //#41
    if ((vars.get('§TI_ACC_TWI') == '02') && (vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§FS_STA_MUR_ANT1') != vars.get('§SI'))) {
        vars.setCF(vars.get('§NR_MON_ANG_MAN'));
    }
    //#42
    if ((vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§FS_ACC_SX_DX') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '01') && (((vars.get('§FS_MON_ANT2') != vars.get('§SI')) || (vars.get('§L_SPO_MON_ANT2') > 0) || (vars.get('§L_SBA_ANT2') > 0)) && ((vars.get('§FS_MON_ANT2') != vars.get('§SI')) || (vars.get('§L_SPO_MON_POS2') > 0) || (vars.get('§L_SBA_POS2') > 0)))) {
        vars.setCF(0);
    }
    //#43
    if ((vars.get('§TI_ACC_TWI') == '02') && (vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§FS_STA_MUR_ANT1') == vars.get('§SI'))) {
        vars.setCF(vars.get('§NR_MON_ANG_MAN') - vars.get('§NR_MON_ANG_MAN'));
    }
    //#44
    if ((vars.get('§FS_ACC_PRI_02') == vars.get('§SI')) && (vars.get('§FS_ACC_POS_ANT') == vars.get('§SI')) && (((vars.get('§FS_MON_POS_2') != vars.get('§SI')) || (vars.get('§L_SPO_MON_POS2') > 0) || (vars.get('§L_SBA_POS2') > 0)) || ((vars.get('§L_SPO_MON_POS1') > 0) || (vars.get('§L_SBA_POS1') > 0) || (vars.get('§FS_MON_POS_1') != vars.get('§SI'))))) {
        vars.setCF(1);
    }
    //#45
    if ((vars.get('§FS_ACC_PRI_02') == vars.get('§SI')) && (vars.get('§FS_ACC_POS_ANT') == vars.get('§SI')) && (((vars.get('§FS_MON_POS_2') != vars.get('§SI')) || (vars.get('§L_SPO_MON_POS2') > 0) || (vars.get('§L_SBA_POS2') > 0)) && ((vars.get('§L_SPO_MON_POS1') > 0) || (vars.get('§L_SBA_POS1') > 0) || (vars.get('§FS_MON_POS_1') != vars.get('§SI'))))) {
        vars.setCF(0);
    }
    //#46
    if ((vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§FS_ACC_POS_ANT') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '02') && (((vars.get('§FS_MON_ANT2') != vars.get('§SI')) || (vars.get('§L_SPO_MON_ANT2') > 0) || (vars.get('§L_SBA_ANT2') > 0)) || ((vars.get('§FS_MON_ANT1') != vars.get('§SI')) || (vars.get('§L_SPO_MON_ANT1') > 0) || (vars.get('§L_SBA_ANT1') > 0)))) {
        vars.setCF(1);
    }
    //#47
    if ((vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§FS_ACC_POS_ANT') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '02') && (((vars.get('§FS_MON_ANT2') != vars.get('§SI')) || (vars.get('§L_SPO_MON_ANT2') > 0) || (vars.get('§L_SBA_ANT2') > 0)) && ((vars.get('§FS_MON_ANT1') != vars.get('§SI')) || (vars.get('§L_SPO_MON_ANT1') > 0) || (vars.get('§L_SBA_ANT1') > 0)))) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
