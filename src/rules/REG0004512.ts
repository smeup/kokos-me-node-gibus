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

export const REG0004512: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004512
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // ( §FS_ACC_PRI<>§SI ) AND (§FS_ACC_PRI_02<>§SI ) AND (§FS_ACC_CEN<>§SI ) AND (§FS_ACC_FIN<>§SI)  AND                         ( (  §FS_SCA_MON_ANT2=§SI ) OR ( §FS_SCA_MON_ANT1=§SI ) )
    // THEN:
    // *SET *CF=#1
    // #3
    // COND:
    // ( §FS_ACC_PRI<>§SI ) AND (§FS_ACC_PRI_02<>§SI ) AND (§FS_ACC_CEN<>§SI ) AND (§FS_ACC_FIN<>§SI)  AND                           ( ( §FS_SCA_MON_ANT2=§SI) AND ( §FS_SCA_MON_ANT1=§SI ) )
    // THEN:
    // *SET *CF=#2
    // #4
    // COND:
    // ( §FS_ACC_PRI=§SI ) AND (§FS_ACC_DX_SX=§SI) AND ( §FS_SCA_MON_ANT2=§SI )
    // THEN:
    // *SET *CF=#1
    // #5
    // COND:
    // ( §FS_ACC_PRI=§SI ) AND ( §FS_ACC_SX_DX=§SI ) AND ( §FS_SCA_MON_ANT1=§SI )
    // THEN:
    // *SET *CF=#1
    // #6
    // COND:
    // §FS_ACC_CEN=§SI
    // THEN:
    // *SET *CF=#0
    // #7
    // COND:
    // ( §TI_ACC_TWI='01' ) AND (§FS_ACC_FIN=§SI ) AND (§FS_ACC_SX_DX=§SI ) AND ( §FS_SCA_MON_ANT2=§SI )
    // THEN:
    // *SET *CF=#1
    // #8
    // COND:
    // ( §TI_ACC_TWI='01') AND (§FS_ACC_FIN=§SI ) AND (§FS_ACC_DX_SX=§SI ) AND ( §FS_SCA_MON_ANT1=§SI )
    // THEN:
    // *SET *CF=#1
    // #9
    // COND:
    // ( §TI_ACC_TWI='02') AND ( §FS_ACC_FIN =§SI )
    // THEN:
    // *SET *CF = [ §NR_GAM_ANG_SCA ]
    // #10
    // COND:
    // ( §FS_ACC_FIN=§SI ) AND ( §FS_ACC_DX_SX=§SI ) AND ( §TI_ACC_TWI='01' ) AND ( §FS_SCA_MON_ANT1<>§SI )
    // THEN:
    // *SET *CF=#0
    // #11
    // COND:
    // ( §FS_ACC_FIN=§SI ) AND (§FS_ACC_DX_SX=§SI) AND ( §TI_ACC_TWI='02' ) AND (( §FS_SCA_MON_ANT1<>§SI ) OR                        ( §FS_SCA_MON_ANT2<>§SI ))
    // THEN:
    // *SET *CF=#1
    // #12
    // COND:
    // ( §FS_ACC_FIN=§SI ) AND (§FS_ACC_DX_SX=§SI) AND ( §TI_ACC_TWI='02') AND ( ( §FS_SCA_MON_ANT1<>§SI ) AND                       ( §FS_SCA_MON_ANT2<>§SI ) )
    // THEN:
    // *SET *CF=#0
    // #13
    // COND:
    // ( §FS_ACC_FIN=§SI ) AND (§FS_ACC_SX_DX=§SI) AND ( §TI_ACC_TWI='02' ) AND ( ( §FS_SCA_MON_ANT1<>§SI ) OR                       ( §FS_SCA_MON_ANT2<>§SI ) )
    // THEN:
    // *SET *CF=#1
    // #14
    // COND:
    // ( §FS_ACC_FIN=§SI ) AND (§FS_ACC_SX_DX=§SI) AND ( §TI_ACC_TWI='02') AND ( ( §FS_SCA_MON_ANT1<>§SI ) AND                       ( §FS_SCA_MON_ANT2<>§SI ) )
    // THEN:
    // *SET *CF=#0
    // #15
    // COND:
    // ( §FS_ACC_PRI<>§SI ) AND ( §FS_ACC_PRI_02<>§SI ) AND ( §FS_ACC_CEN<>§SI ) AND ( §FS_ACC_FIN<>§SI )  AND                       ( ( §FS_STA_MUR_POS1<>§SI ) OR ( §FS_STA_MUR_POS2<>§SI ) )
    // THEN:
    // *SET *CF = §NR_GAM_ANG_SCA
    // """
    // RESPONSE:
    
    //#1
    vars.setCF(0);
    //#2
    if ((vars.get('§FS_ACC_PRI') != vars.get('§SI')) && (vars.get('§FS_ACC_PRI_02') != vars.get('§SI')) && (vars.get('§FS_ACC_CEN') != vars.get('§SI')) && (vars.get('§FS_ACC_FIN') != vars.get('§SI')) && ((vars.get('§FS_SCA_MON_ANT2') == vars.get('§SI')) || (vars.get('§FS_SCA_MON_ANT1') == vars.get('§SI')))) {
        vars.setCF(1);
    }
    //#3
    if ((vars.get('§FS_ACC_PRI') != vars.get('§SI')) && (vars.get('§FS_ACC_PRI_02') != vars.get('§SI')) && (vars.get('§FS_ACC_CEN') != vars.get('§SI')) && (vars.get('§FS_ACC_FIN') != vars.get('§SI')) && ((vars.get('§FS_SCA_MON_ANT2') == vars.get('§SI')) && (vars.get('§FS_SCA_MON_ANT1') == vars.get('§SI')))) {
        vars.setCF(2);
    }
    //#4
    if ((vars.get('§FS_ACC_PRI') == vars.get('§SI')) && (vars.get('§FS_ACC_DX_SX') == vars.get('§SI')) && (vars.get('§FS_SCA_MON_ANT2') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    //#5
    if ((vars.get('§FS_ACC_PRI') == vars.get('§SI')) && (vars.get('§FS_ACC_SX_DX') == vars.get('§SI')) && (vars.get('§FS_SCA_MON_ANT1') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    //#6
    if (vars.get('§FS_ACC_CEN') == vars.get('§SI')) {
        vars.setCF(0);
    }
    //#7
    if ((vars.get('§TI_ACC_TWI') == '01') && (vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§FS_ACC_SX_DX') == vars.get('§SI')) && (vars.get('§FS_SCA_MON_ANT2') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    //#8
    if ((vars.get('§TI_ACC_TWI') == '01') && (vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§FS_ACC_DX_SX') == vars.get('§SI')) && (vars.get('§FS_SCA_MON_ANT1') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    //#9
    if ((vars.get('§TI_ACC_TWI') == '02') && (vars.get('§FS_ACC_FIN') == vars.get('§SI'))) {
        vars.setCF(vars.get('§NR_GAM_ANG_SCA'));
    }
    //#10
    if ((vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§FS_ACC_DX_SX') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '01') && (vars.get('§FS_SCA_MON_ANT1') != vars.get('§SI'))) {
        vars.setCF(0);
    }
    //#11
    if ((vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§FS_ACC_DX_SX') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '02') && ((vars.get('§FS_SCA_MON_ANT1') != vars.get('§SI')) || (vars.get('§FS_SCA_MON_ANT2') != vars.get('§SI')))) {
        vars.setCF(1);
    }
    //#12
    if ((vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§FS_ACC_DX_SX') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '02') && ((vars.get('§FS_SCA_MON_ANT1') != vars.get('§SI')) && (vars.get('§FS_SCA_MON_ANT2') != vars.get('§SI')))) {
        vars.setCF(0);
    }
    //#13
    if ((vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§FS_ACC_SX_DX') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '02') && ((vars.get('§FS_SCA_MON_ANT1') != vars.get('§SI')) || (vars.get('§FS_SCA_MON_ANT2') != vars.get('§SI')))) {
        vars.setCF(1);
    }
    //#14
    if ((vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§FS_ACC_SX_DX') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '02') && ((vars.get('§FS_SCA_MON_ANT1') != vars.get('§SI')) && (vars.get('§FS_SCA_MON_ANT2') != vars.get('§SI')))) {
        vars.setCF(0);
    }
    //#15
    if ((vars.get('§FS_ACC_PRI') != vars.get('§SI')) && (vars.get('§FS_ACC_PRI_02') != vars.get('§SI')) && (vars.get('§FS_ACC_CEN') != vars.get('§SI')) && (vars.get('§FS_ACC_FIN') != vars.get('§SI')) && ((vars.get('§FS_STA_MUR_POS1') != vars.get('§SI')) || (vars.get('§FS_STA_MUR_POS2') != vars.get('§SI')))) {
        vars.setCF(vars.get('§NR_GAM_ANG_SCA'));
    }
    // GENERATED

    return vars.output;
};
