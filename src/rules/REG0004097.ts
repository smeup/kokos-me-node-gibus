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

export const REG0004097: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004097
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // §FS_SCA_MON_ANT2 = §SI
    // THEN:
    // *SET *CF= #1
    // #3
    // COND:
    // (§FS_FAM2_ADDL = §SI ) AND ( §FS_ACC_PRI = §SI ) AND ( §LA_ADD_LAT='SX' )
    // THEN:
    // *SET *CF= #0
    // #4
    // COND:
    // (§FS_FAM2_ADDL = §SI ) AND ( §FS_ACC_PRI <> §SI ) AND ( §LA_ADD_LAT = 'SX' ) AND ( §FS_SCA_MON_ANT2 = §SI )
    // THEN:
    // *SET *CF=#1
    // #5
    // COND:
    // (§TI_ACC_TWI = '01') AND (§TI_POS_ACC='02') AND (§FS_FAM2_ADDL=§SI )
    // THEN:
    // *SET *CF=#0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_SCA_MON_ANT2') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#3
    if ((vars.get('§FS_FAM2_ADDL') == vars.get('§SI')) && (vars.get('§FS_ACC_PRI') == vars.get('§SI')) && (vars.get('§LA_ADD_LAT') == 'SX')) {
        vars.setCF(0);
    }
    
    //#4
    if ((vars.get('§FS_FAM2_ADDL') == vars.get('§SI')) && (vars.get('§FS_ACC_PRI') != vars.get('§SI')) && (vars.get('§LA_ADD_LAT') == 'SX') && (vars.get('§FS_SCA_MON_ANT2') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    
    //#5
    if ((vars.get('§TI_ACC_TWI') == '01') && (vars.get('§TI_POS_ACC') == '02') && (vars.get('§FS_FAM2_ADDL') == vars.get('§SI')) ) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
