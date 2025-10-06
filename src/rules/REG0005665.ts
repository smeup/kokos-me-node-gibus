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

export const REG0005665: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005665
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // ( §FS_ADD_LAT_POS=§SI ) AND (§FS_ACC_POS_ANT=§SI ) AND (§FS_ACC_PRI<>§SI ) AND ( §FS_ACC_PRI_02<>§SI ) AND                    (§FS_ACC_CEN<>§SI ) AND (§FS_ACC_FIN<>§SI ) AND ( ( §FS_SCA_MON_ANT1<>§SI ) OR ( §FS_SCA_MON_ANT2<>§SI ) )
    // THEN:
    // *SET *CF=#1
    // #3
    // COND:
    // ( §FS_ADD_LAT_POS=§SI ) AND ( §FS_ACC_POS_ANT=§SI ) AND ( §FS_ACC_PRI<>§SI ) AND ( §FS_ACC_PRI_02<>§SI ) AND                   (§FS_ACC_CEN<>§SI ) AND (§FS_ACC_FIN<>§SI ) AND (( §FS_SCA_MON_ANT1<>§SI ) AND ( §FS_SCA_MON_ANT2<>§SI ) )
    // THEN:
    // *SET *CF=#2
    // #4
    // COND:
    // ( §FS_ADD_LAT_POS=§SI ) AND (§FS_ACC_POS_ANT=§SI ) AND (§FS_ACC_PRI<>§SI ) AND ( §FS_ACC_PRI_02<>§SI ) AND                    (§FS_ACC_CEN<>§SI ) AND (§FS_ACC_FIN<>§SI ) AND ( (§FS_SCA_MON_ANT1=§SI ) AND ( §FS_SCA_MON_ANT2=§SI ) )
    // THEN:
    // *SET *CF=#0
    // #5
    // COND:
    // ( §FS_ADD_LAT_POS=§SI ) AND ( §FS_ACC_POS_ANT=§SI ) AND ( §FS_ACC_PRI=§SI ) AND ( §FS_ACC_PRI_02<>§SI ) AND                    ( §FS_ACC_CEN<>§SI ) AND ( §FS_ACC_FIN<>§SI ) AND ( §FS_SCA_MON_ANT1<>§SI )
    // THEN:
    // *SET *CF=#1
    // #6
    // COND:
    // ( §FS_ADD_LAT_POS=§SI ) AND ( §FS_ACC_POS_ANT=§SI ) AND ( §FS_ACC_PRI=§SI ) AND ( §FS_ACC_PRI_02<>§SI ) AND                   ( §FS_ACC_CEN<>§SI ) AND ( §FS_ACC_FIN<>§SI ) AND ( §FS_SCA_MON_ANT1=§SI )
    // THEN:
    // *SET *CF=#0
    // #7
    // COND:
    // ( §FS_ADD_LAT_POS=§SI ) AND ( §FS_ACC_FIN=§SI ) AND ( §FS_ACC_LAT=§SI ) AND ( §FS_SCA_MON_ANT2<>§SI )
    // THEN:
    // *SET *CF=#1
    // #8
    // COND:
    // ( §FS_ADD_LAT_POS=§SI ) AND ( §FS_ACC_FIN=§SI ) AND ( §FS_ACC_LAT=§SI ) AND ( §FS_SCA_MON_ANT2=§SI )
    // THEN:
    // *SET *CF=#0
    // #9
    // COND:
    // ( §FS_ACC_POS_ANT=§SI ) AND ( §FS_ACC_FIN=§SI ) AND ( §FS_ACC_FRO=§SI ) AND (( §FS_SCA_MON_ANT1<>§SI ) OR                     ( §FS_SCA_MON_ANT2<>§SI ))
    // THEN:
    // *SET *CF=#1
    // #10
    // COND:
    // ( §FS_ACC_POS_ANT=§SI ) AND ( §FS_ACC_FIN=§SI ) AND ( §FS_ACC_FRO=§SI ) AND ((§FS_SCA_MON_ANT1<>§SI ) AND                     ( §FS_SCA_MON_ANT2<>§SI ))
    // THEN:
    // *SET *CF=#2
    // #11
    // COND:
    // ( §FS_ACC_POS_ANT=§SI ) AND ( §FS_ACC_FIN=§SI ) AND ( §FS_ACC_FRO=§SI ) AND (( §FS_SCA_MON_ANT1=§SI ) AND                     ( §FS_SCA_MON_ANT2=§SI ))
    // THEN:
    // *SET *CF=#0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if ((vars.get('§FS_ADD_LAT_POS') == vars.get('§SI')) && (vars.get('§FS_ACC_POS_ANT') == vars.get('§SI')) && (vars.get('§FS_ACC_PRI') != vars.get('§SI')) && (vars.get('§FS_ACC_PRI_02') != vars.get('§SI')) && (vars.get('§FS_ACC_CEN') != vars.get('§SI')) && (vars.get('§FS_ACC_FIN') != vars.get('§SI')) && ((vars.get('§FS_SCA_MON_ANT1') != vars.get('§SI')) || (vars.get('§FS_SCA_MON_ANT2') != vars.get('§SI')))) {
        vars.setCF(1);
    }
    
    //#3
    if ((vars.get('§FS_ADD_LAT_POS') == vars.get('§SI')) && (vars.get('§FS_ACC_POS_ANT') == vars.get('§SI')) && (vars.get('§FS_ACC_PRI') != vars.get('§SI')) && (vars.get('§FS_ACC_PRI_02') != vars.get('§SI')) && (vars.get('§FS_ACC_CEN') != vars.get('§SI')) && (vars.get('§FS_ACC_FIN') != vars.get('§SI')) && ((vars.get('§FS_SCA_MON_ANT1') != vars.get('§SI')) && (vars.get('§FS_SCA_MON_ANT2') != vars.get('§SI')))) {
        vars.setCF(2);
    }
    
    //#4
    if ((vars.get('§FS_ADD_LAT_POS') == vars.get('§SI')) && (vars.get('§FS_ACC_POS_ANT') == vars.get('§SI')) && (vars.get('§FS_ACC_PRI') != vars.get('§SI')) && (vars.get('§FS_ACC_PRI_02') != vars.get('§SI')) && (vars.get('§FS_ACC_CEN') != vars.get('§SI')) && (vars.get('§FS_ACC_FIN') != vars.get('§SI')) && ((vars.get('§FS_SCA_MON_ANT1') == vars.get('§SI')) && (vars.get('§FS_SCA_MON_ANT2') == vars.get('§SI')))) {
        vars.setCF(0);
    }
    
    //#5
    if ((vars.get('§FS_ADD_LAT_POS') == vars.get('§SI')) && (vars.get('§FS_ACC_POS_ANT') == vars.get('§SI')) && (vars.get('§FS_ACC_PRI') == vars.get('§SI')) && (vars.get('§FS_ACC_PRI_02') != vars.get('§SI')) && (vars.get('§FS_ACC_CEN') != vars.get('§SI')) && (vars.get('§FS_ACC_FIN') != vars.get('§SI')) && (vars.get('§FS_SCA_MON_ANT1') != vars.get('§SI'))) {
        vars.setCF(1);
    }
    
    //#6
    if ((vars.get('§FS_ADD_LAT_POS') == vars.get('§SI')) && (vars.get('§FS_ACC_POS_ANT') == vars.get('§SI')) && (vars.get('§FS_ACC_PRI') == vars.get('§SI')) && (vars.get('§FS_ACC_PRI_02') != vars.get('§SI')) && (vars.get('§FS_ACC_CEN') != vars.get('§SI')) && (vars.get('§FS_ACC_FIN') != vars.get('§SI')) && (vars.get('§FS_SCA_MON_ANT1') == vars.get('§SI'))) {
        vars.setCF(0);
    }
    
    //#7
    if ((vars.get('§FS_ADD_LAT_POS') == vars.get('§SI')) && (vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§FS_ACC_LAT') == vars.get('§SI')) && (vars.get('§FS_SCA_MON_ANT2') != vars.get('§SI'))) {
        vars.setCF(1);
    }
    
    //#8
    if ((vars.get('§FS_ADD_LAT_POS') == vars.get('§SI')) && (vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§FS_ACC_LAT') == vars.get('§SI')) && (vars.get('§FS_SCA_MON_ANT2') == vars.get('§SI'))) {
        vars.setCF(0);
    }
    
    //#9
    if ((vars.get('§FS_ACC_POS_ANT') == vars.get('§SI')) && (vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§FS_ACC_FRO') == vars.get('§SI')) && ((vars.get('§FS_SCA_MON_ANT1') != vars.get('§SI')) || (vars.get('§FS_SCA_MON_ANT2') != vars.get('§SI')))) {
        vars.setCF(1);
    }
    
    //#10
    if ((vars.get('§FS_ACC_POS_ANT') == vars.get('§SI')) && (vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§FS_ACC_FRO') == vars.get('§SI')) && ((vars.get('§FS_SCA_MON_ANT1') != vars.get('§SI')) && (vars.get('§FS_SCA_MON_ANT2') != vars.get('§SI')))) {
        vars.setCF(2);
    }
    
    //#11
    if ((vars.get('§FS_ACC_POS_ANT') == vars.get('§SI')) && (vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§FS_ACC_FRO') == vars.get('§SI')) && ((vars.get('§FS_SCA_MON_ANT1') == vars.get('§SI')) && (vars.get('§FS_SCA_MON_ANT2') == vars.get('§SI')))) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
