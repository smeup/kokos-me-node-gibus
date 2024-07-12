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

export const REG0005256: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005256
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // ( §FS_ACC_PRI<>§SI ) AND ( §FS_ACC_PRI_02 <> §SI ) AND ( §FS_ACC_CEN<>§SI ) AND (§FS_ACC_FIN <>§SI )
    // THEN:
    // *SET *CF=[ §NR_GAM_ANG_SCA ]
    // #3
    // COND:
    // ( §FS_ACC_PRI=§SI ) AND ( §FS_ACC_DX_SX=§SI ) AND (( §FS_SCA_MON_ANT2=§SI) OR ( §FS_SCA_MON_POS2=§SI ))
    // THEN:
    // *SET *CF=#1
    // #4
    // COND:
    // ( §FS_ACC_PRI=§SI ) AND ( §FS_ACC_DX_SX=§SI ) AND (( §FS_SCA_MON_ANT2=§SI ) AND (§FS_SCA_MON_POS2=§SI ))
    // THEN:
    // *SET *CF=#2
    // #5
    // COND:
    // ( §FS_ACC_PRI=§SI ) AND (§FS_ACC_SX_DX=§SI ) AND ( ( §FS_SCA_MON_ANT1=§SI ) OR ( §FS_SCA_MON_POS1=§SI ))
    // THEN:
    // *SET *CF=#1
    // #6
    // COND:
    // ( §FS_ACC_PRI=§SI ) AND (§FS_ACC_SX_DX=§SI ) AND ( ( §FS_SCA_MON_ANT1=§SI ) AND ( §FS_SCA_MON_POS1=§SI ))
    // THEN:
    // *SET *CF=#2
    // #7
    // COND:
    // §FS_ACC_CEN=§SI
    // THEN:
    // *SET *CF=#0
    // #8
    // COND:
    // (§FS_ACC_FIN=§SI ) AND (§FS_ACC_LAT=§SI ) AND ( §FS_ACC_DX_SX=§SI ) AND (( §FS_SCA_MON_ANT1=§SI) OR ( §FS_SCA_MON_POS1=§SI ))
    // THEN:
    // *SET *CF=#1
    // #9
    // COND:
    // (§FS_ACC_FIN=§SI ) AND (§FS_ACC_LAT=§SI ) AND ( §FS_ACC_DX_SX=§SI ) AND (( §FS_SCA_MON_ANT1=§SI ) AND (§FS_SCA_MON_POS1=§SI))
    // THEN:
    // *SET *CF=#2
    // #10
    // COND:
    // (§FS_ACC_FIN=§SI ) AND (§FS_ACC_LAT=§SI ) AND (§FS_ACC_SX_DX=§SI ) AND (( §FS_SCA_MON_ANT2=§SI ) OR ( §FS_SCA_MON_POS2=§SI ))
    // THEN:
    // *SET *CF=#1
    // #11
    // COND:
    // (§FS_ACC_FIN=§SI ) AND (§FS_ACC_LAT=§SI ) AND (§FS_ACC_SX_DX=§SI ) AND (( §FS_SCA_MON_ANT2=§SI ) AND (§FS_SCA_MON_POS2=§SI ))
    // THEN:
    // *SET *CF=#2
    // #12
    // COND:
    // ( §FS_ACC_PRI_02=§SI ) AND ( §FS_ACC_FRO=§SI ) AND (( §FS_SCA_MON_POS1=§SI ) OR ( §FS_SCA_MON_POS2=§SI ))
    // THEN:
    // *SET *CF=#1
    // #13
    // COND:
    // ( §FS_ACC_PRI_02=§SI ) AND ( §FS_ACC_FRO=§SI ) AND (( §FS_SCA_MON_POS1 = §SI ) AND ( §FS_SCA_MON_POS2 = §SI ))
    // THEN:
    // *SET *CF=#2
    // #14
    // COND:
    // ( §FS_ACC_FRO=§SI ) AND ( §FS_ACC_FIN=§SI ) AND (( §FS_SCA_MON_ANT1=§SI ) OR ( §FS_SCA_MON_ANT2=§SI ))
    // THEN:
    // *SET *CF=#1
    // #15
    // COND:
    // ( §FS_ACC_FRO=§SI ) AND ( §FS_ACC_FIN=§SI ) AND (( §FS_SCA_MON_ANT1=§SI ) AND ( §FS_SCA_MON_ANT2=§SI ))
    // THEN:
    // *SET *CF=#2
    // #16
    // COND:
    // ( §FS_ACC_FRO=§SI ) AND ( §FS_ACC_FIN=§SI ) AND (( §FS_SCA_MON_ANT1<>§SI ) OR ( §FS_SCA_MON_ANT2<>§SI ))
    // THEN:
    // *SET *CF=#1
    // #17
    // COND:
    // ( §FS_ACC_FRO=§SI ) AND ( §FS_ACC_FIN=§SI ) AND (( §FS_SCA_MON_ANT1<>§SI ) AND ( §FS_SCA_MON_ANT2<>§SI ))
    // THEN:
    // *SET *CF=#0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if ((vars.get('§FS_ACC_PRI') != vars.get('§SI')) && (vars.get('§FS_ACC_PRI_02') != vars.get('§SI')) && (vars.get('§FS_ACC_CEN') != vars.get('§SI')) && (vars.get('§FS_ACC_FIN') != vars.get('§SI'))) {
        vars.setCF(vars.get('§NR_GAM_ANG_SCA'));
    }
    
    //#3
    if ((vars.get('§FS_ACC_PRI') == vars.get('§SI')) && (vars.get('§FS_ACC_DX_SX') == vars.get('§SI')) && ((vars.get('§FS_SCA_MON_ANT2') == vars.get('§SI')) || (vars.get('§FS_SCA_MON_POS2') == vars.get('§SI')))) {
        vars.setCF(1);
    }
    
    //#4
    if ((vars.get('§FS_ACC_PRI') == vars.get('§SI')) && (vars.get('§FS_ACC_DX_SX') == vars.get('§SI')) && ((vars.get('§FS_SCA_MON_ANT2') == vars.get('§SI')) && (vars.get('§FS_SCA_MON_POS2') == vars.get('§SI')))) {
        vars.setCF(2);
    }
    
    //#5
    if ((vars.get('§FS_ACC_PRI') == vars.get('§SI')) && (vars.get('§FS_ACC_SX_DX') == vars.get('§SI')) && ((vars.get('§FS_SCA_MON_ANT1') == vars.get('§SI')) || (vars.get('§FS_SCA_MON_POS1') == vars.get('§SI')))) {
        vars.setCF(1);
    }
    
    //#6
    if ((vars.get('§FS_ACC_PRI') == vars.get('§SI')) && (vars.get('§FS_ACC_SX_DX') == vars.get('§SI')) && ((vars.get('§FS_SCA_MON_ANT1') == vars.get('§SI')) && (vars.get('§FS_SCA_MON_POS1') == vars.get('§SI')))) {
        vars.setCF(2);
    }
    
    //#7
    if (vars.get('§FS_ACC_CEN') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#8
    if ((vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§FS_ACC_LAT') == vars.get('§SI')) && (vars.get('§FS_ACC_DX_SX') == vars.get('§SI')) && ((vars.get('§FS_SCA_MON_ANT1') == vars.get('§SI')) || (vars.get('§FS_SCA_MON_POS1') == vars.get('§SI')))) {
        vars.setCF(1);
    }
    
    //#9
    if ((vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§FS_ACC_LAT') == vars.get('§SI')) && (vars.get('§FS_ACC_DX_SX') == vars.get('§SI')) && ((vars.get('§FS_SCA_MON_ANT1') == vars.get('§SI')) && (vars.get('§FS_SCA_MON_POS1') == vars.get('§SI')))) {
        vars.setCF(2);
    }
    
    //#10
    if ((vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§FS_ACC_LAT') == vars.get('§SI')) && (vars.get('§FS_ACC_SX_DX') == vars.get('§SI')) && ((vars.get('§FS_SCA_MON_ANT2') == vars.get('§SI')) || (vars.get('§FS_SCA_MON_POS2') == vars.get('§SI')))) {
        vars.setCF(1);
    }
    
    //#11
    if ((vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§FS_ACC_LAT') == vars.get('§SI')) && (vars.get('§FS_ACC_SX_DX') == vars.get('§SI')) && ((vars.get('§FS_SCA_MON_ANT2') == vars.get('§SI')) && (vars.get('§FS_SCA_MON_POS2') == vars.get('§SI')))) {
        vars.setCF(2);
    }
    
    //#12
    if ((vars.get('§FS_ACC_PRI_02') == vars.get('§SI')) && (vars.get('§FS_ACC_FRO') == vars.get('§SI')) && ((vars.get('§FS_SCA_MON_POS1') == vars.get('§SI')) || (vars.get('§FS_SCA_MON_POS2') == vars.get('§SI')))) {
        vars.setCF(1);
    }
    
    //#13
    if ((vars.get('§FS_ACC_PRI_02') == vars.get('§SI')) && (vars.get('§FS_ACC_FRO') == vars.get('§SI')) && ((vars.get('§FS_SCA_MON_POS1') == vars.get('§SI')) && (vars.get('§FS_SCA_MON_POS2') == vars.get('§SI')))) {
        vars.setCF(2);
    }
    
    //#14
    if ((vars.get('§FS_ACC_FRO') == vars.get('§SI')) && (vars.get('§FS_ACC_FIN') == vars.get('§SI')) && ((vars.get('§FS_SCA_MON_ANT1') == vars.get('§SI')) || (vars.get('§FS_SCA_MON_ANT2') == vars.get('§SI')))) {
        vars.setCF(1);
    }
    
    //#15
    if ((vars.get('§FS_ACC_FRO') == vars.get('§SI')) && (vars.get('§FS_ACC_FIN') == vars.get('§SI')) && ((vars.get('§FS_SCA_MON_ANT1') == vars.get('§SI')) && (vars.get('§FS_SCA_MON_ANT2') == vars.get('§SI')))) {
        vars.setCF(2);
    }
    
    //#16
    if ((vars.get('§FS_ACC_FRO') == vars.get('§SI')) && (vars.get('§FS_ACC_FIN') == vars.get('§SI')) && ((vars.get('§FS_SCA_MON_ANT1') != vars.get('§SI')) || (vars.get('§FS_SCA_MON_ANT2') != vars.get('§SI')))) {
        vars.setCF(1);
    }
    
    //#17
    if ((vars.get('§FS_ACC_FRO') == vars.get('§SI')) && (vars.get('§FS_ACC_FIN') == vars.get('§SI')) && ((vars.get('§FS_SCA_MON_ANT1') != vars.get('§SI')) && (vars.get('§FS_SCA_MON_ANT2') != vars.get('§SI')))) {
        vars.setCF(0);
    }
    
    // GENERATED

    return vars.output;
};
