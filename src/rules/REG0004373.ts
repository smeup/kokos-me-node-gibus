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

export const REG0004373: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004373
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // ( §FS_FAM2_165=§SI ) AND ( §FS_MED_ACCOPP<>§SI ) AND (§FS_FAM2_WALL<>§SI )
    // THEN:
    // *SET *CF=[ §N_MODULI + #1 ]
    // #3
    // COND:
    // ( §FS_FAM2_165=§SI ) AND (( §FS_ACC_INI=§SI ) OR (§FS_ACC_FIN=§SI )) AND (§FS_FAM2_WALL<>§SI )
    // THEN:
    // *SET *CF= [ §N_MODULI + #0 ]
    // #4
    // COND:
    // ( §FS_FAM2_165=§SI ) AND (( §FS_ACC_INI=§SI ) OR ( §FS_ACC_FIN=§SI )) AND ( §FS_FAM2_WALL<>§SI ) AND ( §FS_STA_ACC_ANT<>§SI )
    // THEN:
    // *SET *CF= [ §N_MODULI + #1 ]
    // #5
    // COND:
    // ( §FS_FAM2_165=§SI ) AND ( §FS_ACC_CEN=§SI ) AND ( §FS_FAM2_WALL<>§SI ) AND ( ( §FS_ACC_ANT_SX=§SI ) OR (§FS_ACC_ANT_DX=§SI))
    // THEN:
    // *SET *CF= [ §N_MODULI ]
    // #6
    // COND:
    // ( §FS_FAM2_165=§SI ) AND ( §FS_ACC_CEN=§SI ) AND ( §FS_FAM2_WALL<>§SI ) AND ( §FS_ACC_ANT_SX=§SI ) AND (§FS_ACC_ANT_DX=§SI)
    // THEN:
    // *SET *CF= [ §N_MODULI - #1 ]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if ((vars.get('§FS_FAM2_165') == vars.get('§SI')) && (vars.get('§FS_MED_ACCOPP') != vars.get('§SI')) && (vars.get('§FS_FAM2_WALL') != vars.get('§SI'))) {
        vars.setCF(vars.get('§N_MODULI') + 1);
    }
    
    //#3
    if ((vars.get('§FS_FAM2_165') == vars.get('§SI')) && ((vars.get('§FS_ACC_INI') == vars.get('§SI')) || (vars.get('§FS_ACC_FIN') == vars.get('§SI'))) && (vars.get('§FS_FAM2_WALL') != vars.get('§SI'))) {
        vars.setCF(vars.get('§N_MODULI') + 0);
    }
    
    //#4
    //                 ( §FS_FAM2_165=§SI )           AND (( §FS_ACC_INI=§SI )                         OR                       ( §FS_ACC_FIN=§SI )) AND       ( §FS_FAM2_WALL<>§SI )  AND                  ( §FS_STA_ACC_ANT<>§SI )
    if ((vars.get('§FS_FAM2_165') == vars.get('§SI')) && ((vars.get('§FS_ACC_INI') == vars.get('§SI')) || (vars.get('§FS_ACC_FIN') == vars.get('§SI'))) && (vars.get('§FS_FAM2_WALL') != vars.get('§SI')) && (vars.get('§FS_STA_ACC_ANT') != vars.get('§SI'))) {
        vars.setCF(vars.get('§N_MODULI') + 1);
    }
    
    //#5
    if ((vars.get('§FS_FAM2_165') == vars.get('§SI')) && (vars.get('§FS_ACC_CEN') == vars.get('§SI')) && (vars.get('§FS_FAM2_WALL') != vars.get('§SI')) && ((vars.get('§FS_ACC_ANT_SX') == vars.get('§SI')) || (vars.get('§FS_ACC_ANT_DX') == vars.get('§SI')))) {
        vars.setCF(vars.get('§N_MODULI'));
    }
    
    //#6
    if ((vars.get('§FS_FAM2_165') == vars.get('§SI')) && (vars.get('§FS_ACC_CEN') == vars.get('§SI')) && (vars.get('§FS_FAM2_WALL') != vars.get('§SI')) && (vars.get('§FS_ACC_ANT_SX') == vars.get('§SI')) && (vars.get('§FS_ACC_ANT_DX') == vars.get('§SI'))) {
        vars.setCF(vars.get('§N_MODULI') - 1);
    }
    
    // GENERATED

    return vars.output;
};
