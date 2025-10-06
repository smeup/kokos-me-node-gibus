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

export const REG0004232: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004232
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
    // (§FS_ACC_PRI=§SI) AND (§FS_ACC_DX_SX=§SI) AND ( ( §FS_SCA_MON_ANT2=§SI ) OR (§FS_SCA_MON_POS2=§SI) )
    // THEN:
    // *SET *CF=#1
    // #4
    // COND:
    // ( §FS_ACC_PRI_02=§SI ) AND ( §FS_SCA_MON_POS2=§SI ) AND (§LA_ADD_LAT='SX' )
    // THEN:
    // *SET *CF = #1
    // #5
    // COND:
    // ( §FS_ACC_PRI=§SI) AND (§FS_ACC_DX_SX=§SI) AND (( §FS_SCA_MON_ANT2=§SI ) AND ( §FS_SCA_MON_POS2=§SI ))
    // THEN:
    // *SET *CF=#2
    // #6
    // COND:
    // ( §FS_ACC_PRI_02=§SI ) AND (§FS_SCA_MON_ANT1=§SI ) AND (§LA_ADD_LAT='DX' )
    // THEN:
    // *SET *CF = #1
    // #7
    // COND:
    // ( §FS_ACC_PRI=§SI ) AND ( §FS_ACC_SX_DX=§SI ) AND ( ( §FS_SCA_MON_ANT1=§SI) OR ( §FS_SCA_MON_POS1=§SI ) )
    // THEN:
    // *SET *CF=#1
    // #8
    // COND:
    // ( §FS_ACC_CEN=§SI ) AND ( ( §TI_ACC_TWI='01' ) OR ( §TI_ACC_TWI='02' ) )
    // THEN:
    // *SET *CF=#0
    // #9
    // COND:
    // (§FS_ACC_PRI=§SI) AND (§FS_ACC_SX_DX=§SI) AND ( ( §FS_SCA_MON_ANT1=§SI ) AND ( §FS_SCA_MON_POS1=§SI ) )
    // THEN:
    // *SET *CF=#2
    // #10
    // COND:
    // ( §FS_ACC_CEN=§SI ) AND ((§TI_ACC_TWI='01') OR (§TI_ACC_TWI='02'))
    // THEN:
    // *SET *CF=#0
    // #11
    // COND:
    // ( §FS_ACC_PRI_02=§SI ) AND (§FS_SCA_MON_POS2<>§SI ) AND (§LA_ADD_LAT='SX' )
    // THEN:
    // *SET *CF=#0
    // #12
    // COND:
    // (§FS_ACC_FIN=§SI) AND (§FS_ACC_DX_SX=§SI) AND (§TI_ACC_TWI='01') AND ( ( §FS_SCA_MON_ANT1=§SI ) OR ( §FS_SCA_MON_POS1=§SI ))
    // THEN:
    // *SET *CF=#1
    // #13
    // COND:
    // ( §FS_ACC_PRI_02=§SI ) AND (§FS_SCA_MON_POS1=§SI ) AND (§LA_ADD_LAT='DX' )
    // THEN:
    // *SET *CF=#1
    // #14
    // COND:
    // ( §FS_ACC_FIN=§SI) AND (§FS_ACC_DX_SX=§SI) AND (§TI_ACC_TWI='01') AND (( §FS_SCA_MON_ANT1=§SI ) AND ( §FS_SCA_MON_POS1=§SI ))
    // THEN:
    // *SET *CF=#2
    // #15
    // COND:
    // ( §FS_ACC_PRI_02=§SI ) AND (§LA_ADD_LAT='SX' ) AND ( §FS_SCA_MON_POS2<>§SI )
    // THEN:
    // *SET *CF=#0
    // #16
    // COND:
    // ( §FS_ACC_FIN=§SI) AND (§FS_ACC_SX_DX=§SI) AND ( §TI_ACC_TWI='01') AND (( §FS_SCA_MON_ANT2=§SI) OR ( §FS_SCA_MON_POS2=§SI))
    // THEN:
    // *SET *CF=#1
    // #17
    // COND:
    // (§FS_ACC_FIN=§SI) AND (§FS_ACC_SX_DX=§SI) AND ( §TI_ACC_TWI='01') AND (( §FS_SCA_MON_ANT2=§SI ) AND ( §FS_SCA_MON_POS2=§SI))
    // THEN:
    // *SET *CF=#2
    // #18
    // COND:
    // ( §FS_FAM2_ADDL=§SI ) AND (§FS_ACC_CEN=§SI ) AND (§TI_ACC_TWI='02' )
    // THEN:
    // *SET *CF=#0
    // #19
    // COND:
    // ( §FS_ACC_PRI_02=§SI ) AND (§FS_ACC_POS_ANT=§SI ) AND (( §FS_SCA_MON_POS2=§SI) OR ( §FS_SCA_MON_POS1=§SI ))
    // THEN:
    // *SET *CF=#1
    // #20
    // COND:
    // ( §TI_ACC_TWI='02' ) AND (§LA_ADD_LAT='SX' ) AND (§FS_SCA_MON_POS2=§SI )
    // THEN:
    // *SET *CF=#1
    // #21
    // COND:
    // ( §FS_ACC_PRI_02=§SI ) AND ( §FS_ACC_POS_ANT=§SI ) AND ( ( §FS_SCA_MON_POS2=§SI) AND ( §FS_SCA_MON_POS1=§SI ) )
    // THEN:
    // *SET *CF=#2
    // #22
    // COND:
    // ( §TI_ACC_TWI='02' ) AND (§LA_ADD_LAT='DX' ) AND (§FS_SCA_MON_POS1<>§SI )
    // THEN:
    // *SET *CF=#0
    // #23
    // COND:
    // ( §FS_ACC_FIN=§SI ) AND (§FS_ACC_POS_ANT=§SI) AND (§TI_ACC_TWI='02') AND ( (§FS_SCA_MON_ANT2=§SI) OR (§FS_SCA_MON_ANT1=§SI) )
    // THEN:
    // *SET *CF=#1
    // #24
    // COND:
    // ( §FS_ACC_FIN=§SI ) AND (§FS_ACC_POS_ANT=§SI) AND (§TI_ACC_TWI='02') AND ((§FS_SCA_MON_ANT2=§SI) AND (§FS_SCA_MON_ANT1=§SI ))
    // THEN:
    // *SET *CF=#2
    // #25
    // COND:
    // ( §FS_ACC_FIN=§SI ) AND ( ( §TI_ACC_TWI='01') OR ( §TI_ACC_TWI='02' ) )
    // THEN:
    // *SET *CF = [ §NR_GAM_ANG_SCA  ]
    // #26
    // COND:
    // ( §FS_ACC_PRI<>§SI) AND ( §FS_ACC_PRI_02<>§SI ) AND ( §FS_ACC_FIN<>§SI ) AND (§TI_ACC_TWI<>'01' ) AND ( §TI_ACC_TWI<>'02' )
    // THEN:
    // *SET *CF = [ §NR_GAM_ANG_SCA  ]
    // #27
    // COND:
    // ( §FS_ACC_PRI_02=§SI ) AND ( §FS_SCA_MON_POS2=§SI ) AND (§LA_ADD_LAT='SX' ) AND (§FS_STA_MUR_POS1<>§SI ) AND                 ( §FS_SCA_MON_POS1=§SI )
    // THEN:
    // *SET *CF=#2
    // """
    // RESPONSE:
    
    //#1
    vars.setCF(0);
    //#2
    vars.setCF(0);
    //#3
    if ((vars.get('§FS_ACC_PRI') == vars.get('§SI')) && (vars.get('§FS_ACC_DX_SX') == vars.get('§SI')) && ((vars.get('§FS_SCA_MON_ANT2') == vars.get('§SI')) || (vars.get('§FS_SCA_MON_POS2') == vars.get('§SI')))) {
        vars.setCF(1);
    }
    //#4
    if ((vars.get('§FS_ACC_PRI_02') == vars.get('§SI')) && (vars.get('§FS_SCA_MON_POS2') == vars.get('§SI')) && (vars.get('§LA_ADD_LAT') == 'SX')) {
        vars.setCF(1);
    }
    //#5
    if ((vars.get('§FS_ACC_PRI') == vars.get('§SI')) && (vars.get('§FS_ACC_DX_SX') == vars.get('§SI')) && ((vars.get('§FS_SCA_MON_ANT2') == vars.get('§SI')) && (vars.get('§FS_SCA_MON_POS2') == vars.get('§SI')))) {
        vars.setCF(2);
    }
    //#6
    if ((vars.get('§FS_ACC_PRI_02') == vars.get('§SI')) && (vars.get('§FS_SCA_MON_ANT1') == vars.get('§SI')) && (vars.get('§LA_ADD_LAT') == 'DX')) {
        vars.setCF(1);
    }
    //#7
    if ((vars.get('§FS_ACC_PRI') == vars.get('§SI')) && (vars.get('§FS_ACC_SX_DX') == vars.get('§SI')) && ((vars.get('§FS_SCA_MON_ANT1') == vars.get('§SI')) || (vars.get('§FS_SCA_MON_POS1') == vars.get('§SI')))) {
        vars.setCF(1);
    }
    //#8
    if ((vars.get('§FS_ACC_CEN') == vars.get('§SI')) && ((vars.get('§TI_ACC_TWI') == '01') || (vars.get('§TI_ACC_TWI') == '02'))) {
        vars.setCF(0);
    }
    //#9
    if ((vars.get('§FS_ACC_PRI') == vars.get('§SI')) && (vars.get('§FS_ACC_SX_DX') == vars.get('§SI')) && ((vars.get('§FS_SCA_MON_ANT1') == vars.get('§SI')) && (vars.get('§FS_SCA_MON_POS1') == vars.get('§SI')))) {
        vars.setCF(2);
    }
    //#10
    if ((vars.get('§FS_ACC_CEN') == vars.get('§SI')) && ((vars.get('§TI_ACC_TWI') == '01') || (vars.get('§TI_ACC_TWI') == '02'))) {
        vars.setCF(0);
    }
    //#11
    if ((vars.get('§FS_ACC_PRI_02') == vars.get('§SI')) && (vars.get('§FS_SCA_MON_POS2') != vars.get('§SI')) && (vars.get('§LA_ADD_LAT') == 'SX')) {
        vars.setCF(0);
    }
    //#12
    if ((vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§FS_ACC_DX_SX') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '01') && ((vars.get('§FS_SCA_MON_ANT1') == vars.get('§SI')) || (vars.get('§FS_SCA_MON_POS1') == vars.get('§SI')))) {
        vars.setCF(1);
    }
    //#13
    if ((vars.get('§FS_ACC_PRI_02') == vars.get('§SI')) && (vars.get('§FS_SCA_MON_POS1') == vars.get('§SI')) && (vars.get('§LA_ADD_LAT') == 'DX')) {
        vars.setCF(1);
    }
    //#14
    if ((vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§FS_ACC_DX_SX') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '01') && ((vars.get('§FS_SCA_MON_ANT1') == vars.get('§SI')) && (vars.get('§FS_SCA_MON_POS1') == vars.get('§SI')))) {
        vars.setCF(2);
    }
    //#15
    if ((vars.get('§FS_ACC_PRI_02') == vars.get('§SI')) && (vars.get('§LA_ADD_LAT') == 'SX') && (vars.get('§FS_SCA_MON_POS2') != vars.get('§SI'))) {
        vars.setCF(0);
    }
    //#16
    if ((vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§FS_ACC_SX_DX') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '01') && ((vars.get('§FS_SCA_MON_ANT2') == vars.get('§SI')) || (vars.get('§FS_SCA_MON_POS2') == vars.get('§SI')))) {
        vars.setCF(1);
    }
    //#17
    if ((vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§FS_ACC_SX_DX') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '01') && ((vars.get('§FS_SCA_MON_ANT2') == vars.get('§SI')) && (vars.get('§FS_SCA_MON_POS2') == vars.get('§SI')))) {
        vars.setCF(2);
    }
    //#18
    if ((vars.get('§FS_FAM2_ADDL') == vars.get('§SI')) && (vars.get('§FS_ACC_CEN') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '02')) {
        vars.setCF(0);
    }
    //#19
    if ((vars.get('§FS_ACC_PRI_02') == vars.get('§SI')) && (vars.get('§FS_ACC_POS_ANT') == vars.get('§SI')) && ((vars.get('§FS_SCA_MON_POS2') == vars.get('§SI')) || (vars.get('§FS_SCA_MON_POS1') == vars.get('§SI')))) {
        vars.setCF(1);
    }
    //#20
    if ((vars.get('§TI_ACC_TWI') == '02') && (vars.get('§LA_ADD_LAT') == 'SX') && (vars.get('§FS_SCA_MON_POS2') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    //#21
    if ((vars.get('§FS_ACC_PRI_02') == vars.get('§SI')) && (vars.get('§FS_ACC_POS_ANT') == vars.get('§SI')) && ((vars.get('§FS_SCA_MON_POS2') == vars.get('§SI')) && (vars.get('§FS_SCA_MON_POS1') == vars.get('§SI')))) {
        vars.setCF(2);
    }
    //#22
    if ((vars.get('§TI_ACC_TWI') == '02') && (vars.get('§LA_ADD_LAT') == 'DX') && (vars.get('§FS_SCA_MON_POS1') != vars.get('§SI'))) {
        vars.setCF(0);
    }
    //#23
    if ((vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§FS_ACC_POS_ANT') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '02') && ((vars.get('§FS_SCA_MON_ANT2') == vars.get('§SI')) || (vars.get('§FS_SCA_MON_ANT1') == vars.get('§SI')))) {
        vars.setCF(1);
    }
    //#24
    if ((vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§FS_ACC_POS_ANT') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '02') && ((vars.get('§FS_SCA_MON_ANT2') == vars.get('§SI')) && (vars.get('§FS_SCA_MON_ANT1') == vars.get('§SI')))) {
        vars.setCF(2);
    }
    //#25
    if ((vars.get('§FS_ACC_FIN') == vars.get('§SI')) && ((vars.get('§TI_ACC_TWI') == '01') || (vars.get('§TI_ACC_TWI') == '02'))) {
        vars.setCF(vars.get('§NR_GAM_ANG_SCA'));
    }
    //#26
    if ((vars.get('§FS_ACC_PRI') != vars.get('§SI')) && (vars.get('§FS_ACC_PRI_02') != vars.get('§SI')) && (vars.get('§FS_ACC_FIN') != vars.get('§SI')) && (vars.get('§TI_ACC_TWI') != '01') && (vars.get('§TI_ACC_TWI') != '02')) {
        vars.setCF(vars.get('§NR_GAM_ANG_SCA'));
    }
    //#27
    if ((vars.get('§FS_ACC_PRI_02') == vars.get('§SI')) && (vars.get('§FS_SCA_MON_POS2') == vars.get('§SI')) && (vars.get('§LA_ADD_LAT') == 'SX') && (vars.get('§FS_STA_MUR_POS1') != vars.get('§SI')) && (vars.get('§FS_SCA_MON_POS1') == vars.get('§SI'))) {
        vars.setCF(2);
    }
    // GENERATED

    return vars.output;
};
