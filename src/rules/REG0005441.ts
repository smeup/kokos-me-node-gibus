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

export const REG0005441: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005441
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // ( §FS_ACC_PRI<>§SI ) AND ( §FS_ACC_PRI_02 <> §SI ) AND ( §FS_ACC_CEN<>§SI ) AND (§FS_ACC_FIN <>§SI )
    // THEN:
    // *SET *CF=#0
    // #3
    // COND:
    // ( §FS_ACC_LAT=§SI ) AND ( §FS_ACC_PRI=§SI ) AND (§FS_ACC_DX_SX=§SI ) AND                                                    ((( §FS_SCA_MON_ANT1=§SI ) AND (§FS_MON_ANT1=§SI ) AND (§L_SPO_MON_ANT1=#0 ) AND (§L_SBA_ANT1=#0 )) OR                         (( §FS_SCA_MON_POS1=§SI ) AND (§FS_MON_POS_1=§SI ) AND (§L_SPO_MON_POS1=#0 ) AND (§L_SBA_POS1=#0 )))
    // THEN:
    // *SET *CF=#1
    // #4
    // COND:
    // ( §FS_ACC_LAT=§SI ) AND ( §FS_ACC_PRI=§SI ) AND (§FS_ACC_DX_SX=§SI ) AND                                                        ((( §FS_SCA_MON_ANT1=§SI ) AND (§FS_MON_ANT1=§SI ) AND (§L_SPO_MON_ANT1=#0 ) AND (§L_SBA_ANT1=#0 )) AND                      (( §FS_SCA_MON_POS1=§SI ) AND (§FS_MON_POS_1=§SI ) AND (§L_SPO_MON_POS1=#0 ) AND (§L_SBA_POS1=#0 )))
    // THEN:
    // *SET *CF=#2
    // #5
    // COND:
    // ( §FS_ACC_LAT=§SI ) AND ( §FS_ACC_PRI=§SI ) AND (§FS_ACC_SX_DX=§SI ) AND                                                         ((( §FS_SCA_MON_ANT2=§SI ) AND (§FS_MON_ANT2=§SI ) AND (§L_SPO_MON_ANT2=#0 ) AND (§L_SBA_ANT2=#0 )) OR                       (( §FS_SCA_MON_POS2=§SI ) AND (§FS_MON_POS_2=§SI ) AND (§L_SPO_MON_POS2=#0 ) AND (§L_SBA_POS2=#0 )))
    // THEN:
    // *SET *CF=#1
    // #6
    // COND:
    // ( §FS_ACC_LAT=§SI ) AND ( §FS_ACC_PRI=§SI ) AND (§FS_ACC_DX_SX=§SI ) AND                                                         ( (( §FS_SCA_MON_ANT2=§SI ) AND (§FS_MON_ANT2=§SI ) AND (§L_SPO_MON_ANT2=#0 ) AND (§L_SBA_ANT2=#0 )) AND                     (( §FS_SCA_MON_POS2=§SI ) AND (§FS_MON_POS_2=§SI ) AND (§L_SPO_MON_POS2=#0 ) AND (§L_SBA_POS2=#0 )) )
    // THEN:
    // *SET *CF=#2
    // #7
    // COND:
    // ( §FS_ACC_LAT=§SI ) AND ( §FS_ACC_CEN=§SI ) AND ( §FS_ACC_DX_SX=§SI ) AND ( (( §FS_SCA_MON_ANT1=§SI ) AND                    (§FS_MON_ANT1=§SI ) AND (§L_SPO_MON_ANT1=#0) AND (§L_SBA_ANT1=#0 )) OR (( §FS_SCA_MON_POS1=§SI ) AND                         ( §FS_MON_POS_1=§SI ) AND (§L_SPO_MON_POS1=#0 ) AND (§L_SBA_POS1=#0 )) )
    // THEN:
    // *SET *CF=#1
    // #8
    // COND:
    // ( §FS_ACC_LAT=§SI ) AND ( §FS_ACC_CEN=§SI ) AND ( §FS_ACC_DX_SX=§SI ) AND ( (( §FS_SCA_MON_ANT1=§SI ) AND                    (§FS_MON_ANT1=§SI ) AND (§L_SPO_MON_ANT1=#0) AND (§L_SBA_ANT1=#0 )) AND (( §FS_SCA_MON_POS1=§SI ) AND                        ( §FS_MON_POS_1=§SI ) AND (§L_SPO_MON_POS1=#0 ) AND (§L_SBA_POS1=#0 )) )
    // THEN:
    // *SET *CF=#2
    // #9
    // COND:
    // ( §FS_ACC_LAT=§SI ) AND ( §FS_ACC_CEN=§SI ) AND ( §FS_ACC_SX_DX=§SI ) AND ( (( §FS_SCA_MON_ANT2=§SI ) AND                    ( §FS_MON_ANT2=§SI ) AND ( §L_SPO_MON_ANT2=#0) AND ( §L_SBA_ANT2=#0 )) OR (( §FS_SCA_MON_POS2=§SI ) AND                      ( §FS_MON_POS_2=§SI ) AND (§L_SPO_MON_POS2=#0 ) AND (§L_SBA_POS2=#0 )) )
    // THEN:
    // *SET *CF=#1
    // #10
    // COND:
    // ( §FS_ACC_LAT=§SI ) AND ( §FS_ACC_CEN=§SI ) AND ( §FS_ACC_SX_DX=§SI ) AND ( (( §FS_SCA_MON_ANT2=§SI ) AND                      ( §FS_MON_ANT2=§SI ) AND ( §L_SPO_MON_ANT2=#0) AND ( §L_SBA_ANT2=#0 )) AND (( §FS_SCA_MON_POS2=§SI ) AND                     ( §FS_MON_POS_2=§SI ) AND (§L_SPO_MON_POS2=#0 ) AND (§L_SBA_POS2=#0 )) )
    // THEN:
    // *SET *CF=#2
    // #11
    // COND:
    // §FS_ACC_FIN=§SI
    // THEN:
    // *SET *CF=#0
    // #12
    // COND:
    // ( §FS_ACC_PRI_02=§SI ) AND ( §FS_ACC_POS_ANT=§SI ) AND ( §FS_ACC_FRO=§SI ) AND ( ((§FS_SCA_MON_ANT1=§SI ) AND                 (§FS_MON_ANT1=§SI ) AND (§L_SPO_MON_ANT1=#0 ) AND (§L_SBA_ANT1=#0 )) OR ((§FS_SCA_MON_ANT2=§SI ) AND                        (§FS_MON_ANT2=§SI ) AND (§L_SPO_MON_ANT2=#0 ) AND (§L_SBA_ANT2=#0 )) )
    // THEN:
    // *SET *CF=#1
    // #13
    // COND:
    // ( §FS_ACC_PRI_02=§SI ) AND ( §FS_ACC_POS_ANT=§SI ) AND ( §FS_ACC_FRO=§SI ) AND ( ((§FS_SCA_MON_ANT1=§SI ) AND                 (§FS_MON_ANT1=§SI ) AND (§L_SPO_MON_ANT1=#0 ) AND (§L_SBA_ANT1=#0 )) AND ((§FS_SCA_MON_ANT2=§SI ) AND                       (§FS_MON_ANT2=§SI ) AND (§L_SPO_MON_ANT2=#0 ) AND (§L_SBA_ANT2=#0 )) )
    // THEN:
    // *SET *CF=#2
    // #14
    // COND:
    // ( §FS_ACC_FRO=§SI ) AND ( §FS_ACC_CEN=§SI ) AND ( §FS_ACC_POS_ANT=§SI ) AND  ( ((§FS_SCA_MON_ANT1=§SI ) AND                   ( §FS_MON_ANT1=§SI ) AND (§L_SPO_MON_ANT1=#0 ) AND (§L_SBA_ANT1=#0 )) OR ((§FS_SCA_MON_ANT2=§SI ) AND                       (§FS_MON_ANT2=§SI ) AND (§L_SPO_MON_ANT2=#0 ) AND (§L_SBA_ANT2=#0 )) )
    // THEN:
    // *SET *CF=#1
    // #15
    // COND:
    // ( §FS_ACC_FRO=§SI ) AND ( §FS_ACC_CEN=§SI ) AND ( §FS_ACC_POS_ANT=§SI ) AND ( ( (§FS_SCA_MON_ANT1=§SI ) AND                   ( §FS_MON_ANT1=§SI ) AND (§L_SPO_MON_ANT1=#0 ) AND (§L_SBA_ANT1=#0 )) AND (( §FS_SCA_MON_ANT2=§SI ) AND                     (§FS_MON_ANT2=§SI ) AND (§L_SPO_MON_ANT2=#0 ) AND (§L_SBA_ANT2=#0 )) )
    // THEN:
    // *SET *CF=#2
    // #16
    // COND:
    // ( §FS_ACC_FRO=§SI ) AND ( §FS_ACC_FIN=§SI )
    // THEN:
    // *SET *CF=#0
    // """
    // RESPONSE:
    
    //#1
    vars.setCF(0);
    //#2
    if ((vars.get('§FS_ACC_PRI') != vars.get('§SI')) && (vars.get('§FS_ACC_PRI_02') != vars.get('§SI')) && (vars.get('§FS_ACC_CEN') != vars.get('§SI')) && (vars.get('§FS_ACC_FIN') != vars.get('§SI'))) {
        vars.setCF(0);
    }
    //#3
    if ((vars.get('§FS_ACC_LAT') == vars.get('§SI')) && (vars.get('§FS_ACC_PRI') == vars.get('§SI')) && (vars.get('§FS_ACC_DX_SX') == vars.get('§SI')) && (((vars.get('§FS_SCA_MON_ANT1') == vars.get('§SI')) && (vars.get('§FS_MON_ANT1') == vars.get('§SI')) && (vars.get('§L_SPO_MON_ANT1') == 0) && (vars.get('§L_SBA_ANT1') == 0)) || ((vars.get('§FS_SCA_MON_POS1') == vars.get('§SI')) && (vars.get('§FS_MON_POS_1') == vars.get('§SI')) && (vars.get('§L_SPO_MON_POS1') == 0) && (vars.get('§L_SBA_POS1') == 0)))) {
        vars.setCF(1);
    }
    //#4
    if ((vars.get('§FS_ACC_LAT') == vars.get('§SI')) && (vars.get('§FS_ACC_PRI') == vars.get('§SI')) && (vars.get('§FS_ACC_DX_SX') == vars.get('§SI')) && (((vars.get('§FS_SCA_MON_ANT1') == vars.get('§SI')) && (vars.get('§FS_MON_ANT1') == vars.get('§SI')) && (vars.get('§L_SPO_MON_ANT1') == 0) && (vars.get('§L_SBA_ANT1') == 0)) && ((vars.get('§FS_SCA_MON_POS1') == vars.get('§SI')) && (vars.get('§FS_MON_POS_1') == vars.get('§SI')) && (vars.get('§L_SPO_MON_POS1') == 0) && (vars.get('§L_SBA_POS1') == 0)))) {
        vars.setCF(2);
    }
    //#5
    if ((vars.get('§FS_ACC_LAT') == vars.get('§SI')) && (vars.get('§FS_ACC_PRI') == vars.get('§SI')) && (vars.get('§FS_ACC_SX_DX') == vars.get('§SI')) && (((vars.get('§FS_SCA_MON_ANT2') == vars.get('§SI')) && (vars.get('§FS_MON_ANT2') == vars.get('§SI')) && (vars.get('§L_SPO_MON_ANT2') == 0) && (vars.get('§L_SBA_ANT2') == 0)) || ((vars.get('§FS_SCA_MON_POS2') == vars.get('§SI')) && (vars.get('§FS_MON_POS_2') == vars.get('§SI')) && (vars.get('§L_SPO_MON_POS2') == 0) && (vars.get('§L_SBA_POS2') == 0)))) {
        vars.setCF(1);
    }
    //#6
    if ((vars.get('§FS_ACC_LAT') == vars.get('§SI')) && (vars.get('§FS_ACC_PRI') == vars.get('§SI')) && (vars.get('§FS_ACC_DX_SX') == vars.get('§SI')) && (((vars.get('§FS_SCA_MON_ANT2') == vars.get('§SI')) && (vars.get('§FS_MON_ANT2') == vars.get('§SI')) && (vars.get('§L_SPO_MON_ANT2') == 0) && (vars.get('§L_SBA_ANT2') == 0)) && ((vars.get('§FS_SCA_MON_POS2') == vars.get('§SI')) && (vars.get('§FS_MON_POS_2') == vars.get('§SI')) && (vars.get('§L_SPO_MON_POS2') == 0) && (vars.get('§L_SBA_POS2') == 0)))) {
        vars.setCF(2);
    }
    //#7
    if ((vars.get('§FS_ACC_LAT') == vars.get('§SI')) && (vars.get('§FS_ACC_CEN') == vars.get('§SI')) && (vars.get('§FS_ACC_DX_SX') == vars.get('§SI')) && (((vars.get('§FS_SCA_MON_ANT1') == vars.get('§SI')) && (vars.get('§FS_MON_ANT1') == vars.get('§SI')) && (vars.get('§L_SPO_MON_ANT1') == 0) && (vars.get('§L_SBA_ANT1') == 0)) || ((vars.get('§FS_SCA_MON_POS1') == vars.get('§SI')) && (vars.get('§FS_MON_POS_1') == vars.get('§SI')) && (vars.get('§L_SPO_MON_POS1') == 0) && (vars.get('§L_SBA_POS1') == 0)))) {
        vars.setCF(1);
    }
    //#8
    if ((vars.get('§FS_ACC_LAT') == vars.get('§SI')) && (vars.get('§FS_ACC_CEN') == vars.get('§SI')) && (vars.get('§FS_ACC_DX_SX') == vars.get('§SI')) && (((vars.get('§FS_SCA_MON_ANT1') == vars.get('§SI')) && (vars.get('§FS_MON_ANT1') == vars.get('§SI')) && (vars.get('§L_SPO_MON_ANT1') == 0) && (vars.get('§L_SBA_ANT1') == 0)) && ((vars.get('§FS_SCA_MON_POS1') == vars.get('§SI')) && (vars.get('§FS_MON_POS_1') == vars.get('§SI')) && (vars.get('§L_SPO_MON_POS1') == 0) && (vars.get('§L_SBA_POS1') == 0)))) {
        vars.setCF(2);
    }
    //#9
    if ((vars.get('§FS_ACC_LAT') == vars.get('§SI')) && (vars.get('§FS_ACC_CEN') == vars.get('§SI')) && (vars.get('§FS_ACC_SX_DX') == vars.get('§SI')) && (((vars.get('§FS_SCA_MON_ANT2') == vars.get('§SI')) && (vars.get('§FS_MON_ANT2') == vars.get('§SI')) && (vars.get('§L_SPO_MON_ANT2') == 0) && (vars.get('§L_SBA_ANT2') == 0)) || ((vars.get('§FS_SCA_MON_POS2') == vars.get('§SI')) && (vars.get('§FS_MON_POS_2') == vars.get('§SI')) && (vars.get('§L_SPO_MON_POS2') == 0) && (vars.get('§L_SBA_POS2') == 0)))) {
        vars.setCF(1);
    }
    //#10
    if ((vars.get('§FS_ACC_LAT') == vars.get('§SI')) && (vars.get('§FS_ACC_CEN') == vars.get('§SI')) && (vars.get('§FS_ACC_SX_DX') == vars.get('§SI')) && (((vars.get('§FS_SCA_MON_ANT2') == vars.get('§SI')) && (vars.get('§FS_MON_ANT2') == vars.get('§SI')) && (vars.get('§L_SPO_MON_ANT2') == 0) && (vars.get('§L_SBA_ANT2') == 0)) && ((vars.get('§FS_SCA_MON_POS2') == vars.get('§SI')) && (vars.get('§FS_MON_POS_2') == vars.get('§SI')) && (vars.get('§L_SPO_MON_POS2') == 0) && (vars.get('§L_SBA_POS2') == 0)))) {
        vars.setCF(2);
    }
    //#11
    if (vars.get('§FS_ACC_FIN') == vars.get('§SI')) {
        vars.setCF(0);
    }
    //#12
    if ((vars.get('§FS_ACC_PRI_02') == vars.get('§SI')) && (vars.get('§FS_ACC_POS_ANT') == vars.get('§SI')) && (vars.get('§FS_ACC_FRO') == vars.get('§SI')) && (((vars.get('§FS_SCA_MON_ANT1') == vars.get('§SI')) && (vars.get('§FS_MON_ANT1') == vars.get('§SI')) && (vars.get('§L_SPO_MON_ANT1') == 0) && (vars.get('§L_SBA_ANT1') == 0)) || ((vars.get('§FS_SCA_MON_ANT2') == vars.get('§SI')) && (vars.get('§FS_MON_ANT2') == vars.get('§SI')) && (vars.get('§L_SPO_MON_ANT2') == 0) && (vars.get('§L_SBA_ANT2') == 0)))) {
        vars.setCF(1);
    }
    //#13
    if ((vars.get('§FS_ACC_PRI_02') == vars.get('§SI')) && (vars.get('§FS_ACC_POS_ANT') == vars.get('§SI')) && (vars.get('§FS_ACC_FRO') == vars.get('§SI')) && (((vars.get('§FS_SCA_MON_ANT1') == vars.get('§SI')) && (vars.get('§FS_MON_ANT1') == vars.get('§SI')) && (vars.get('§L_SPO_MON_ANT1') == 0) && (vars.get('§L_SBA_ANT1') == 0)) && ((vars.get('§FS_SCA_MON_ANT2') == vars.get('§SI')) && (vars.get('§FS_MON_ANT2') == vars.get('§SI')) && (vars.get('§L_SPO_MON_ANT2') == 0) && (vars.get('§L_SBA_ANT2') == 0)))) {
        vars.setCF(2);
    }
    //#14
    if ((vars.get('§FS_ACC_FRO') == vars.get('§SI')) && (vars.get('§FS_ACC_CEN') == vars.get('§SI')) && (vars.get('§FS_ACC_POS_ANT') == vars.get('§SI')) && (((vars.get('§FS_SCA_MON_ANT1') == vars.get('§SI')) && (vars.get('§FS_MON_ANT1') == vars.get('§SI')) && (vars.get('§L_SPO_MON_ANT1') == 0) && (vars.get('§L_SBA_ANT1') == 0)) || ((vars.get('§FS_SCA_MON_ANT2') == vars.get('§SI')) && (vars.get('§FS_MON_ANT2') == vars.get('§SI')) && (vars.get('§L_SPO_MON_ANT2') == 0) && (vars.get('§L_SBA_ANT2') == 0)))) {
        vars.setCF(1);
    }
    //#15
    if ((vars.get('§FS_ACC_FRO') == vars.get('§SI')) && (vars.get('§FS_ACC_CEN') == vars.get('§SI')) && (vars.get('§FS_ACC_POS_ANT') == vars.get('§SI')) && (((vars.get('§FS_SCA_MON_ANT1') == vars.get('§SI')) && (vars.get('§FS_MON_ANT1') == vars.get('§SI')) && (vars.get('§L_SPO_MON_ANT1') == 0) && (vars.get('§L_SBA_ANT1') == 0)) && ((vars.get('§FS_SCA_MON_ANT2') == vars.get('§SI')) && (vars.get('§FS_MON_ANT2') == vars.get('§SI')) && (vars.get('§L_SPO_MON_ANT2') == 0) && (vars.get('§L_SBA_ANT2') == 0)))) {
        vars.setCF(2);
    }
    //#16
    if ((vars.get('§FS_ACC_FRO') == vars.get('§SI')) && (vars.get('§FS_ACC_FIN') == vars.get('§SI'))) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
