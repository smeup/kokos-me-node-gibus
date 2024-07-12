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

export const REG0004605: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004605
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // ( §FS_FAM2_ISOLA=§SI ) AND ( §FS_ACC_PRI=§SI ) AND (( §FS_SCA_MON_ANT2=§SI ) OR ( §FS_SCA_MON_POS2=§SI ))
    // THEN:
    // *SET *CF=#1
    // #3
    // COND:
    // ( §FS_FAM2_ISOLA=§SI ) AND ( §FS_ACC_PRI=§SI ) AND ( §FS_SCA_MON_ANT2=§SI ) AND ( §FS_SCA_MON_POS2=§SI )
    // THEN:
    // *SET *CF=#2
    // #4
    // COND:
    // ( §FS_FAM2_ISOLA=§SI ) AND ( §FS_ACC_PRI_02=§SI ) AND (( §FS_SCA_MON_ANT1=§SI ) OR ( §FS_SCA_MON_ANT2=§SI ))
    // THEN:
    // *SET *CF=#1
    // #5
    // COND:
    // ( §FS_FAM2_ISOLA=§SI ) AND ( §FS_ACC_PRI_02=§SI ) AND ( §FS_SCA_MON_ANT1=§SI ) AND ( §FS_SCA_MON_ANT2=§SI )
    // THEN:
    // *SET *CF=#2
    // #6
    // COND:
    // ( §FS_FAM2_ISOLA=§SI ) AND ( §FS_ACC_CEN=§SI ) AND ( §TI_ACC_TWI='01' ) AND (( §FS_SCA_MON_ANT2=§SI ) OR                       ( §FS_SCA_MON_POS2=§SI ))
    // THEN:
    // *SET *CF=#1
    // #7
    // COND:
    // ( §FS_FAM2_ISOLA=§SI ) AND ( §FS_ACC_CEN=§SI ) AND ( §TI_ACC_TWI='01' ) AND ( §FS_SCA_MON_ANT2=§SI ) AND                       ( §FS_SCA_MON_POS2=§SI )
    // THEN:
    // *SET *CF=#2
    // #8
    // COND:
    // ( §FS_FAM2_ISOLA=§SI ) AND ( §FS_ACC_CEN=§SI ) AND ( §TI_ACC_TWI='02' ) AND (( §FS_SCA_MON_ANT1=§SI ) OR                       ( §FS_SCA_MON_ANT2=§SI ))
    // THEN:
    // *SET *CF=#1
    // #9
    // COND:
    // ( §FS_FAM2_ISOLA=§SI ) AND ( §FS_ACC_CEN=§SI ) AND ( §TI_ACC_TWI='02' ) AND ( §FS_SCA_MON_ANT1=§SI ) AND                      ( §FS_SCA_MON_ANT2=§SI )
    // THEN:
    // *SET *CF=#2
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if ((vars.get('§FS_FAM2_ISOLA') == vars.get('§SI')) && (vars.get('§FS_ACC_PRI') == vars.get('§SI')) && ((vars.get('§FS_SCA_MON_ANT2') == vars.get('§SI')) || (vars.get('§FS_SCA_MON_POS2') == vars.get('§SI')))) {
        vars.setCF(1);
    }
    
    //#3
    if ((vars.get('§FS_FAM2_ISOLA') == vars.get('§SI')) && (vars.get('§FS_ACC_PRI') == vars.get('§SI')) && (vars.get('§FS_SCA_MON_ANT2') == vars.get('§SI')) && (vars.get('§FS_SCA_MON_POS2') == vars.get('§SI'))) {
        vars.setCF(2);
    }
    
    //#4
    if ((vars.get('§FS_FAM2_ISOLA') == vars.get('§SI')) && (vars.get('§FS_ACC_PRI_02') == vars.get('§SI')) && ((vars.get('§FS_SCA_MON_ANT1') == vars.get('§SI')) || (vars.get('§FS_SCA_MON_ANT2') == vars.get('§SI')))) {
        vars.setCF(1);
    }
    
    //#5
    if ((vars.get('§FS_FAM2_ISOLA') == vars.get('§SI')) && (vars.get('§FS_ACC_PRI_02') == vars.get('§SI')) && (vars.get('§FS_SCA_MON_ANT1') == vars.get('§SI')) && (vars.get('§FS_SCA_MON_ANT2') == vars.get('§SI'))) {
        vars.setCF(2);
    }
    
    //#6
    if ((vars.get('§FS_FAM2_ISOLA') == vars.get('§SI')) && (vars.get('§FS_ACC_CEN') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '01') && ((vars.get('§FS_SCA_MON_ANT2') == vars.get('§SI')) || (vars.get('§FS_SCA_MON_POS2') == vars.get('§SI')))) {
        vars.setCF(1);
    }
    
    //#7
    if ((vars.get('§FS_FAM2_ISOLA') == vars.get('§SI')) && (vars.get('§FS_ACC_CEN') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '01') && (vars.get('§FS_SCA_MON_ANT2') == vars.get('§SI') && vars.get('§FS_SCA_MON_POS2') == vars.get('§SI'))) {
        vars.setCF(2);
    }
    
    //#8
    if ((vars.get('§FS_FAM2_ISOLA') == vars.get('§SI')) && (vars.get('§FS_ACC_CEN') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '02') && ((vars.get('§FS_SCA_MON_ANT1') == vars.get('§SI')) || (vars.get('§FS_SCA_MON_ANT2') == vars.get('§SI')))) {
        vars.setCF(1);
    }
    
    //#9
    if ((vars.get('§FS_FAM2_ISOLA') == vars.get('§SI')) && (vars.get('§FS_ACC_CEN') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '02') && (vars.get('§FS_SCA_MON_ANT1') == vars.get('§SI') && vars.get('§FS_SCA_MON_ANT2') == vars.get('§SI'))) {
        vars.setCF(2);
    }
    // GENERATED

    return vars.output;
};
