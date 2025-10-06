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

export const REG0003598: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003598
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_MED_ACCOPP<>§SI
    // THEN:
    // *SET *CF=§NR_MON_MAN
    // #2
    // COND:
    // ( §FS_MED_ACCOPP=§SI ) AND ( §FS_ACC_INI = §SI )
    // THEN:
    // *SET *CF=§NR_MON_MAN
    // #3
    // COND:
    // ( §FS_MED_ACCOPP=§SI ) AND ( ( §FS_ACC_CEN=§SI ) OR ( §FS_ACC_FIN=§SI ) ) AND ( §FS_MON_ANT1<>§SI )
    // THEN:
    // *SET *CF= [ §NR_MON_MAN - #1 ]
    // #4
    // COND:
    // ( §FS_MED_ACCOPP=§SI ) AND ( ( §FS_ACC_CEN = §SI ) OR ( §FS_ACC_FIN = §SI ) ) AND ( §FS_MON_ANT1=§SI )
    // THEN:
    // *SET *CF=§NR_MON_MAN
    // #5
    // COND:
    // ( §FS_ACC_CEN=§SI ) AND ( (( §FS_ACC_ANT_SX<>§SI ) AND ( §FS_MON_ANT1<>§SI )) OR ( ( §FS_ACC_ANT_DX<>§SI ) AND                  (§FS_MON_ANT3<>§SI ) ) )  AND ( §NR_MON_MAN=#1 )
    // THEN:
    // *SET *CF=#1
    // #6
    // COND:
    // ( §FS_ACC_CEN=§SI ) AND ( §FS_ACC_ANT_SX<>§SI ) AND ( §FS_MON_ANT1<>§SI ) AND ( §FS_ACC_ANT_DX<>§SI ) AND                      ( §FS_MON_ANT3<>§SI )
    // THEN:
    // *SET *CF=#2
    // #7
    // COND:
    // ( §FS_ACC_CEN=§SI ) AND ( (( §FS_ACC_ANT_SX<>§SI ) AND ( §FS_MON_ANT1<>§SI )) OR (( §FS_ACC_ANT_DX<>§SI ) AND                   ( §FS_MON_ANT3<>§SI )) )  AND ( §NR_MON_MAN >#1 )
    // THEN:
    // *SET *CF= [ §NR_MON_MAN ]
    // #8
    // COND:
    // ( §FS_ACC_FIN=§SI ) AND ( §FS_STA_ACC_POS=§SI ) AND (§FS_STA_ACC_ANT<>§SI )
    // THEN:
    // *SET *CF=§NR_MON_MAN
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_MED_ACCOPP') != vars.get('§SI')) {
        vars.setCF(vars.get('§NR_MON_MAN'));
    }
    
    //#2
    if ((vars.get('§FS_MED_ACCOPP') == vars.get('§SI')) && (vars.get('§FS_ACC_INI') == vars.get('§SI'))) {
        vars.setCF(vars.get('§NR_MON_MAN'));
    }
    
    //#3
    if ((vars.get('§FS_MED_ACCOPP') == vars.get('§SI')) && ((vars.get('§FS_ACC_CEN') == vars.get('§SI')) || (vars.get('§FS_ACC_FIN') == vars.get('§SI'))) && (vars.get('§FS_MON_ANT1') != vars.get('§SI'))) {
        vars.setCF(vars.get('§NR_MON_MAN') - 1);
    }
    
    //#4
    //                       ( §FS_MED_ACCOPP=§SI )     AND              ( ( §FS_ACC_CEN = §SI )          OR ( §FS_ACC_FIN = §SI ) )                                     AND ( §FS_MON_ANT1=§SI )
    if ((vars.get('§FS_MED_ACCOPP') == vars.get('§SI')) && ((vars.get('§FS_ACC_CEN') == vars.get('§SI')) || (vars.get('§FS_ACC_FIN') == vars.get('§SI'))) && (vars.get('§FS_MON_ANT1') == vars.get('§SI'))) {
        vars.setCF(vars.get('§NR_MON_MAN'));
    }
    
    //#5
    //                  ( §FS_ACC_CEN=§SI )         AND ( (( §FS_ACC_ANT_SX<>§SI )                        AND   ( §FS_MON_ANT1<>§SI ))                      OR               ( ( §FS_ACC_ANT_DX<>§SI )          AND               (§FS_MON_ANT3<>§SI ) ) )         AND ( §NR_MON_MAN=#1 )
    if ((vars.get('§FS_ACC_CEN') == vars.get('§SI')) && (((vars.get('§FS_ACC_ANT_SX') != vars.get('§SI')) && (vars.get('§FS_MON_ANT1') != vars.get('§SI'))) || ((vars.get('§FS_ACC_ANT_DX') != vars.get('§SI')) && (vars.get('§FS_MON_ANT3') != vars.get('§SI')))) && (vars.get('§NR_MON_MAN') == 1)) {
        vars.setCF(1);
    }

    //#6
    if ((vars.get('§FS_ACC_CEN') == vars.get('§SI')) && (vars.get('§FS_ACC_ANT_SX') != vars.get('§SI')) && (vars.get('§FS_MON_ANT1') != vars.get('§SI')) && (vars.get('§FS_ACC_ANT_DX') != vars.get('§SI')) && (vars.get('§FS_MON_ANT3') != vars.get('§SI'))) {
        vars.setCF(2);
    }
    
    //#7
    //               ( §FS_ACC_CEN=§SI )            AND ( (( §FS_ACC_ANT_SX<>§SI )                        AND ( §FS_MON_ANT1<>§SI ))                        OR            (( §FS_ACC_ANT_DX<>§SI )              AND                   ( §FS_MON_ANT3<>§SI )) )     AND      ( §NR_MON_MAN >#1 )
    if ((vars.get('§FS_ACC_CEN') == vars.get('§SI')) && (((vars.get('§FS_ACC_ANT_SX') != vars.get('§SI')) && (vars.get('§FS_MON_ANT1') != vars.get('§SI'))) || ((vars.get('§FS_ACC_ANT_DX') != vars.get('§SI')) && (vars.get('§FS_MON_ANT3') != vars.get('§SI')))) && (vars.get('§NR_MON_MAN') > 1)) {
        vars.setCF(vars.get('§NR_MON_MAN'));
    }
    
    //#8
    if ((vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§FS_STA_ACC_POS') == vars.get('§SI')) && (vars.get('§FS_STA_ACC_ANT') != vars.get('§SI'))) {
        vars.setCF(vars.get('§NR_MON_MAN'));
    }
    
    // GENERATED

    return vars.output;
};
