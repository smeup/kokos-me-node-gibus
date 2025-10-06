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

export const REG0005624: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005624
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // ( (( §FS_ADDL_DX=§SI ) OR ( §FS_ADDL_SX=§SI )) AND ( §FS_ACC_PRI=§SI ) AND ( §FS_ACC_LAT=§SI ) )
    // THEN:
    // *SET *CF= [ §NR_GAM_NOR_ANT + §NR_GAM_NOR_POS ]
    // #3
    // COND:
    // ( §FS_ADDL_SX=§SI ) AND (§FS_ACC_PRI=§SI ) AND ((( §FS_MON_ANT2=§SI ) AND ( §L_SPO_MON_ANT2=#0 )                              AND ( §L_SBA_ANT2=#0 )) OR ( ( §FS_MON_POS_2=§SI ) AND ( §L_SPO_MON_POS2=#0 ) AND ( §L_SBA_POS2=#0 ))  )
    // THEN:
    // *SET *CF=#1
    // #4
    // COND:
    // ( §FS_ADDL_SX=§SI ) AND (§FS_ACC_PRI=§SI ) AND ( (( §FS_MON_ANT2=§SI ) AND ( §L_SPO_MON_ANT2=#0 ) AND                         ( §L_SBA_ANT2=#0 )) AND ( ( §FS_MON_POS_2=§SI ) AND ( §L_SPO_MON_POS2=#0 ) AND ( §L_SBA_POS2=#0 ))  )
    // THEN:
    // *SET *CF=#2
    // #5
    // COND:
    // ( §FS_ADDL_SX=§SI ) AND (§FS_ACC_CEN=§SI ) AND ( §FS_ACC_LAT=§SI) AND ((( §FS_MON_ANT2=§SI ) AND ( §L_SPO_MON_ANT2=#0 ) AND   ( §L_SBA_ANT2=#0 )) OR (( §FS_MON_POS_2=§SI ) AND ( §L_SPO_MON_POS2=#0 ) AND ( §L_SBA_POS2=#0 ))  )
    // THEN:
    // *SET *CF=#1
    // #6
    // COND:
    // ( §FS_ADDL_SX=§SI ) AND (§FS_ACC_CEN=§SI ) AND ( §FS_ACC_LAT=§SI ) AND ((( §FS_MON_ANT2=§SI ) AND                              ( §L_SPO_MON_ANT2=#0 ) AND ( §L_SBA_ANT2=#0 )) AND (( §FS_MON_POS_2=§SI ) AND ( §L_SPO_MON_POS2=#0 ) AND                    ( §L_SBA_POS2=#0 ))  )
    // THEN:
    // *SET *CF=#2
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if ((vars.get('§FS_ADDL_DX') == vars.get('§SI') || vars.get('§FS_ADDL_SX') == vars.get('§SI')) && 
        vars.get('§FS_ACC_PRI') == vars.get('§SI') && 
        vars.get('§FS_ACC_LAT') == vars.get('§SI')) {
        vars.setCF(vars.get('§NR_GAM_NOR_ANT') + vars.get('§NR_GAM_NOR_POS'));
    }
    
    //#3
    if (vars.get('§FS_ADDL_SX') == vars.get('§SI') && 
        vars.get('§FS_ACC_PRI') == vars.get('§SI') && 
        ((vars.get('§FS_MON_ANT2') == vars.get('§SI') && vars.get('§L_SPO_MON_ANT2') == 0 && vars.get('§L_SBA_ANT2') == 0) || 
        (vars.get('§FS_MON_POS_2') == vars.get('§SI') && vars.get('§L_SPO_MON_POS2') == 0 && vars.get('§L_SBA_POS2') == 0))) {
        vars.setCF(1);
    }
    
    //#4
    if (vars.get('§FS_ADDL_SX') == vars.get('§SI') && 
        vars.get('§FS_ACC_PRI') == vars.get('§SI') && 
        ((vars.get('§FS_MON_ANT2') == vars.get('§SI') && vars.get('§L_SPO_MON_ANT2') == 0 && vars.get('§L_SBA_ANT2') == 0) && 
        (vars.get('§FS_MON_POS_2') == vars.get('§SI') && vars.get('§L_SPO_MON_POS2') == 0 && vars.get('§L_SBA_POS2') == 0))) {
        vars.setCF(2);
    }
    
    //#5
    if (vars.get('§FS_ADDL_SX') == vars.get('§SI') && 
        vars.get('§FS_ACC_CEN') == vars.get('§SI') && 
        vars.get('§FS_ACC_LAT') == vars.get('§SI') && 
        ((vars.get('§FS_MON_ANT2') == vars.get('§SI') && vars.get('§L_SPO_MON_ANT2') == 0 && vars.get('§L_SBA_ANT2') == 0) || 
        (vars.get('§FS_MON_POS_2') == vars.get('§SI') && vars.get('§L_SPO_MON_POS2') == 0 && vars.get('§L_SBA_POS2') == 0))) {
        vars.setCF(1);
    }
    
    //#6
    if (vars.get('§FS_ADDL_SX') == vars.get('§SI') && 
        vars.get('§FS_ACC_CEN') == vars.get('§SI') && 
        vars.get('§FS_ACC_LAT') == vars.get('§SI') && 
        ((vars.get('§FS_MON_ANT2') == vars.get('§SI') && vars.get('§L_SPO_MON_ANT2') == 0 && vars.get('§L_SBA_ANT2') == 0) && 
        (vars.get('§FS_MON_POS_2') == vars.get('§SI') && vars.get('§L_SPO_MON_POS2') == 0 && vars.get('§L_SBA_POS2') == 0))) {
        vars.setCF(2);
    }
    
    // GENERATED

    return vars.output;
};
