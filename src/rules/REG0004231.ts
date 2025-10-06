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

export const REG0004231: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004231
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
    // (§FS_ACC_PRI=§SI) AND (§FS_ACC_DX_SX=§SI) AND ( ( §FS_SCA_MON_ANT2<>§SI) OR (§FS_SCA_MON_POS2<>§SI) )
    // THEN:
    // *SET *CF=#1
    // #4
    // COND:
    // (§FS_ACC_PRI=§SI) AND (§FS_ACC_DX_SX=§SI) AND ( (§FS_SCA_MON_ANT2<>§SI) AND (§FS_SCA_MON_POS2<>§SI) )
    // THEN:
    // *SET *CF=#2
    // #5
    // COND:
    // (§FS_ACC_PRI=§SI) AND (§FS_ACC_SX_DX=§SI) AND ( (§FS_SCA_MON_ANT1<>§SI) OR (§FS_SCA_MON_POS1<>§SI) )
    // THEN:
    // *SET *CF=#1
    // #6
    // COND:
    // (§FS_ACC_PRI=§SI) AND (§FS_ACC_SX_DX=§SI) AND ( (§FS_SCA_MON_ANT1<>§SI) AND ( §FS_SCA_MON_POS1<>§SI ))
    // THEN:
    // *SET *CF=#2
    // #7
    // COND:
    // ( §FS_ACC_CEN=§SI ) AND ((§TI_ACC_TWI='01') OR (§TI_ACC_TWI='02'))
    // THEN:
    // *SET *CF=#0
    // #8
    // COND:
    // (§FS_ACC_FIN=§SI) AND (§FS_ACC_DX_SX=§SI) AND (§TI_ACC_TWI='01') AND ((§FS_SCA_MON_ANT1<>§SI) OR ( §FS_SCA_MON_POS1<>§SI))
    // THEN:
    // *SET *CF=#1
    // #9
    // COND:
    // ( §FS_ACC_PRI_02=§SI ) AND ( §FS_SCA_MON_ANT2=§SI ) AND ( §LA_ADD_LAT='SX' )  AND (§FS_ACC_INI = §SI )                         AND ( §FS_STA_MUR_POS1=§SI )
    // THEN:
    // *SET *CF=#3
    // #10
    // COND:
    // ( §FS_ACC_FIN=§SI) AND (§FS_ACC_DX_SX=§SI) AND (§TI_ACC_TWI='01') AND ( (§FS_SCA_MON_ANT1<>§SI) AND (§FS_SCA_MON_POS1<>§SI) )
    // THEN:
    // *SET *CF=#2
    // #11
    // COND:
    // (§FS_ACC_FIN=§SI) AND (§FS_ACC_SX_DX=§SI) AND (§TI_ACC_TWI='01') AND (( §FS_SCA_MON_ANT2<>§SI) OR ( §FS_SCA_MON_POS2<>§SI))
    // THEN:
    // *SET *CF=#1
    // #12
    // COND:
    // ( §FS_ACC_PRI_02=§SI ) AND (§FS_SCA_MON_ANT1=§SI ) AND (§LA_ADD_LAT='DX' ) AND ( §FS_ACC_INI = §SI ) AND                      AND ( §FS_STA_MUR_POS2=§SI )
    // THEN:
    // *SET *CF= #3
    // #13
    // COND:
    // (§FS_ACC_FIN=§SI) AND (§FS_ACC_SX_DX=§SI) AND (§TI_ACC_TWI='01') AND ((§FS_SCA_MON_ANT2<>§SI) AND (§FS_SCA_MON_POS2<>§SI) )
    // THEN:
    // *SET *CF=#2
    // #14
    // COND:
    // (§FS_ACC_PRI_02=§SI ) AND (§FS_ACC_POS_ANT=§SI ) AND (( §FS_SCA_MON_POS2<>§SI) OR ( §FS_SCA_MON_POS1<>§SI ))
    // THEN:
    // *SET *CF=#1
    // #15
    // COND:
    // ( §FS_ACC_PRI_02=§SI ) AND ( §FS_ACC_POS_ANT=§SI ) AND ((§FS_SCA_MON_POS2<>§SI) AND ( §FS_SCA_MON_POS1<>§SI ))
    // THEN:
    // *SET *CF=#2
    // #16
    // COND:
    // (§FS_ACC_FIN=§SI ) AND (§FS_ACC_POS_ANT=§SI) AND (§TI_ACC_TWI='02') AND ((§FS_SCA_MON_ANT2<>§SI) OR ((§FS_SCA_MON_ANT1<>§SI))
    // THEN:
    // *SET *CF=#1
    // #17
    // COND:
    // (§FS_ACC_CEN=§SI ) AND (§TI_ACC_TWI='01' )
    // THEN:
    // *SET *CF=#0
    // #18
    // COND:
    // (§FS_ACC_FIN=§SI ) AND (§FS_ACC_POS_ANT=§SI) AND (§TI_ACC_TWI='02') AND ((§FS_SCA_MON_ANT2<>§SI) AND (§FS_SCA_MON_ANT1<>§SI))
    // THEN:
    // *SET *CF=#2
    // #19
    // COND:
    // ( §FS_ACC_PRI<>§SI) AND ( §FS_ACC_PRI_02<>§SI ) AND ( §FS_ACC_FIN<>§SI ) AND (§TI_ACC_TWI<>'01' ) AND ( §TI_ACC_TWI<>'02' )
    // THEN:
    // *SET *CF= [ #4 - §NR_GAM_ANG_SCA ]
    // #20
    // COND:
    // (§FS_ACC_FIN=§SI ) AND ( §TI_ACC_TWI='01' )
    // THEN:
    // *SET *CF= [ §NR_GAM_ANG_SCA - §NR_GAM_NOR_SCA ]
    // #21
    // COND:
    // ( §FS_ACC_PRI<>§SI) AND ( §FS_ACC_PRI_02<>§SI ) AND ( §FS_ACC_FIN<>§SI ) AND ( §TI_ACC_TWI<>'01' ) AND ( §TI_ACC_TWI<>'02' )
    // THEN:
    // *SET *CF= [ #4 - §NR_GAM_ANG_SCA ]
    // #22
    // COND:
    // ( §FS_ACC_PRI=§SI )
    // THEN:
    // *SET *CF=#2
    // #23
    // COND:
    // ( §FS_ACC_PRI_02=§SI ) AND ( §FS_SCA_MON_POS2<>§SI ) AND (§LA_ADD_LAT='SX' ) AND ( §FS_STA_MUR_POS1=§SI)
    // THEN:
    // *SET *CF=#4
    // #24
    // COND:
    // ( §FS_ACC_FIN=§SI ) AND ( §LA_ADD_LAT='SX') AND ( ( §TI_ACC_TWI='01') OR ( §TI_ACC_TWI='02') )
    // THEN:
    // *SET *CF= [ #2 - §NR_GAM_ANG_SCA ]
    // #25
    // COND:
    // ( §FS_ACC_PRI_02=§SI ) AND ( §FS_SCA_MON_POS2=§SI ) AND ( §LA_ADD_LAT='SX' )  AND (§FS_ACC_INI = §SI )                          AND ( §FS_STA_MUR_POS1<>§SI ) AND ( §FS_SCA_MON_POS1=§SI )
    // THEN:
    // *SET *CF=#2
    // #26
    // COND:
    // ( §FS_ACC_PRI_02=§SI ) AND ( §LA_ADD_LAT='SX' )  AND (§FS_ACC_INI = §SI ) AND ( §FS_STA_MUR_POS1<>§SI ) AND                   ( ( §FS_SCA_MON_POS1<>§SI ) AND ( §FS_SCA_MON_POS2=§SI ) ) OR ( ( §FS_SCA_MON_POS1=§SI ) AND ( §FS_SCA_MON_POS2<>§SI ) )
    // THEN:
    // *SET *CF=#3
    // #27
    // COND:
    // ( §FS_ACC_PRI_02=§SI ) AND ( §FS_SCA_MON_POS2<>§SI ) AND (§LA_ADD_LAT='SX' ) AND ( §FS_STA_MUR_POS1<>§SI)                   AND ( §FS_SCA_MON_POS1<>§SI )
    // THEN:
    // *SET *CF=#4
    // """
    // RESPONSE:
    
    //#1
    vars.setCF(0);
    //#2
    vars.setCF(0);
    //#3
    if ((vars.get('§FS_ACC_PRI') == vars.get('§SI')) && (vars.get('§FS_ACC_DX_SX') == vars.get('§SI')) && ((vars.get('§FS_SCA_MON_ANT2') != vars.get('§SI')) || (vars.get('§FS_SCA_MON_POS2') != vars.get('§SI')))) {
        vars.setCF(1);
    }
    //#4
    if ((vars.get('§FS_ACC_PRI') == vars.get('§SI')) && (vars.get('§FS_ACC_DX_SX') == vars.get('§SI')) && ((vars.get('§FS_SCA_MON_ANT2') != vars.get('§SI')) && (vars.get('§FS_SCA_MON_POS2') != vars.get('§SI')))) {
        vars.setCF(2);
    }
    //#5
    if ((vars.get('§FS_ACC_PRI') == vars.get('§SI')) && (vars.get('§FS_ACC_SX_DX') == vars.get('§SI')) && ((vars.get('§FS_SCA_MON_ANT1') != vars.get('§SI')) || (vars.get('§FS_SCA_MON_POS1') != vars.get('§SI')))) {
        vars.setCF(1);
    }
    //#6
    if ((vars.get('§FS_ACC_PRI') == vars.get('§SI')) && (vars.get('§FS_ACC_SX_DX') == vars.get('§SI')) && ((vars.get('§FS_SCA_MON_ANT1') != vars.get('§SI')) && (vars.get('§FS_SCA_MON_POS1') != vars.get('§SI')))) {
        vars.setCF(2);
    }
    //#7
    if ((vars.get('§FS_ACC_CEN') == vars.get('§SI')) && ((vars.get('§TI_ACC_TWI') == '01') || (vars.get('§TI_ACC_TWI') == '02'))) {
        vars.setCF(0);
    }
    //#8
    if ((vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§FS_ACC_DX_SX') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '01') && ((vars.get('§FS_SCA_MON_ANT1') != vars.get('§SI')) || (vars.get('§FS_SCA_MON_POS1') != vars.get('§SI')))) {
        vars.setCF(1);
    }
    //#9
    if ((vars.get('§FS_ACC_PRI_02') == vars.get('§SI')) && (vars.get('§FS_SCA_MON_ANT2') == vars.get('§SI')) && (vars.get('§LA_ADD_LAT') == 'SX') && (vars.get('§FS_ACC_INI') == vars.get('§SI')) && (vars.get('§FS_STA_MUR_POS1') == vars.get('§SI'))) {
        vars.setCF(3);
    }
    //#10
    if ((vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§FS_ACC_DX_SX') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '01') && ((vars.get('§FS_SCA_MON_ANT1') != vars.get('§SI')) && (vars.get('§FS_SCA_MON_POS1') != vars.get('§SI')))) {
        vars.setCF(2);
    }
    //#11
    if ((vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§FS_ACC_SX_DX') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '01') && ((vars.get('§FS_SCA_MON_ANT2') != vars.get('§SI')) || (vars.get('§FS_SCA_MON_POS2') != vars.get('§SI')))) {
        vars.setCF(1);
    }
    //#12
    if ((vars.get('§FS_ACC_PRI_02') == vars.get('§SI')) && (vars.get('§FS_SCA_MON_ANT1') == vars.get('§SI')) && (vars.get('§LA_ADD_LAT') == 'DX') && (vars.get('§FS_ACC_INI') == vars.get('§SI')) && (vars.get('§FS_STA_MUR_POS2') == vars.get('§SI'))) {
        vars.setCF(3);
    }
    //#13
    if ((vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§FS_ACC_SX_DX') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '01') && ((vars.get('§FS_SCA_MON_ANT2') != vars.get('§SI')) && (vars.get('§FS_SCA_MON_POS2') != vars.get('§SI')))) {
        vars.setCF(2);
    }
    //#14
    if ((vars.get('§FS_ACC_PRI_02') == vars.get('§SI')) && (vars.get('§FS_ACC_POS_ANT') == vars.get('§SI')) && ((vars.get('§FS_SCA_MON_POS2') != vars.get('§SI')) || (vars.get('§FS_SCA_MON_POS1') != vars.get('§SI')))) {
        vars.setCF(1);
    }
    //#15
    if ((vars.get('§FS_ACC_PRI_02') == vars.get('§SI')) && (vars.get('§FS_ACC_POS_ANT') == vars.get('§SI')) && ((vars.get('§FS_SCA_MON_POS2') != vars.get('§SI')) && (vars.get('§FS_SCA_MON_POS1') != vars.get('§SI')))) {
        vars.setCF(2);
    }
    //#16
    if ((vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§FS_ACC_POS_ANT') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '02') && ((vars.get('§FS_SCA_MON_ANT2') != vars.get('§SI')) || (vars.get('§FS_SCA_MON_ANT1') != vars.get('§SI')))) {
        vars.setCF(1);
    }
    //#17
    if ((vars.get('§FS_ACC_CEN') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '01')) {
        vars.setCF(0);
    }
    //#18
    if ((vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§FS_ACC_POS_ANT') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '02') && ((vars.get('§FS_SCA_MON_ANT2') != vars.get('§SI')) && (vars.get('§FS_SCA_MON_ANT1') != vars.get('§SI')))) {
        vars.setCF(2);
    }
    //#19
    if ((vars.get('§FS_ACC_PRI') != vars.get('§SI')) && (vars.get('§FS_ACC_PRI_02') != vars.get('§SI')) && (vars.get('§FS_ACC_FIN') != vars.get('§SI')) && (vars.get('§TI_ACC_TWI') != '01') && (vars.get('§TI_ACC_TWI') != '02')) {
        vars.setCF(4 - vars.get('§NR_GAM_ANG_SCA'));
    }
    //#20
    if ((vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '01')) {
        vars.setCF(vars.get('§NR_GAM_ANG_SCA') - vars.get('§NR_GAM_NOR_SCA'));
    }
    //#21
    if ((vars.get('§FS_ACC_PRI') != vars.get('§SI')) && (vars.get('§FS_ACC_PRI_02') != vars.get('§SI')) && (vars.get('§FS_ACC_FIN') != vars.get('§SI')) && (vars.get('§TI_ACC_TWI') != '01') && (vars.get('§TI_ACC_TWI') != '02')) {
        vars.setCF(4 - vars.get('§NR_GAM_ANG_SCA'));
    }
    //#22
    if (vars.get('§FS_ACC_PRI') == vars.get('§SI')) {
        vars.setCF(2);
    }
    //#23
    if ((vars.get('§FS_ACC_PRI_02') == vars.get('§SI')) && (vars.get('§FS_SCA_MON_POS2') != vars.get('§SI')) && (vars.get('§LA_ADD_LAT') == 'SX') && (vars.get('§FS_STA_MUR_POS1') == vars.get('§SI'))) {
        vars.setCF(4);
    }
    //#24
    if ((vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§LA_ADD_LAT') == 'SX') && ((vars.get('§TI_ACC_TWI') == '01') || (vars.get('§TI_ACC_TWI') == '02'))) {
        vars.setCF(2 - vars.get('§NR_GAM_ANG_SCA'));
    }
    //#25
    if ((vars.get('§FS_ACC_PRI_02') == vars.get('§SI')) && (vars.get('§FS_SCA_MON_POS2') == vars.get('§SI')) && (vars.get('§LA_ADD_LAT') == 'SX') && (vars.get('§FS_ACC_INI') == vars.get('§SI')) && (vars.get('§FS_STA_MUR_POS1') != vars.get('§SI')) && (vars.get('§FS_SCA_MON_POS1') == vars.get('§SI'))) {
        vars.setCF(2);
    }
    //#26
    if ((vars.get('§FS_ACC_PRI_02') == vars.get('§SI')) && (vars.get('§LA_ADD_LAT') == 'SX') && (vars.get('§FS_ACC_INI') == vars.get('§SI')) && (vars.get('§FS_STA_MUR_POS1') != vars.get('§SI')) && (((vars.get('§FS_SCA_MON_POS1') != vars.get('§SI')) && (vars.get('§FS_SCA_MON_POS2') == vars.get('§SI'))) || ((vars.get('§FS_SCA_MON_POS1') == vars.get('§SI')) && (vars.get('§FS_SCA_MON_POS2') != vars.get('§SI'))))) {
        vars.setCF(3);
    }
    //#27
    if ((vars.get('§FS_ACC_PRI_02') == vars.get('§SI')) && (vars.get('§FS_SCA_MON_POS2') != vars.get('§SI')) && (vars.get('§LA_ADD_LAT') == 'SX') && (vars.get('§FS_STA_MUR_POS1') != vars.get('§SI')) && (vars.get('§FS_SCA_MON_POS1') != vars.get('§SI'))) {
        vars.setCF(4);
    }
    // GENERATED

    return vars.output;
};
