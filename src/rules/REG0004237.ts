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
    throw new Error("Rule not implemented");
    return vars.output;
};
