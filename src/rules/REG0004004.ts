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

export const REG0004004: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004004
    // REQUEST:
    // """
    // #1
    // COND:
    // (( §H_ANT_M2=#0 ) OR (( §FS_ACC_PRI = §SI ) AND ( §LA_ADD_LAT='SX'))) AND ( §FS_FAM2_ADDL= §SI )
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // (§FS_FAM2_ADDL = §SI) AND (((§FS_ACC_PRI=§SI) AND (§LA_ADD_LAT ='SX')) OR ((§TI_ACC_TWI = '01') AND (§TI_POS_ACC='02')))
    // THEN:
    // *SET *CF= #0
    // #3
    // COND:
    // ((§LA_ADD_LAT='SX') AND (§TI_ACC_TWI='01')) AND ((§TI_POS_ACC='02') OR (§TI_POS_ACC='03'))
    // THEN:
    // *SET *CF=#0
    // """
    // RESPONSE:
    
    //#1
    if (((vars.get('§H_ANT_M2') == 0) || ((vars.get('§FS_ACC_PRI') == vars.get('§SI')) && (vars.get('§LA_ADD_LAT') == 'SX'))) && (vars.get('§FS_FAM2_ADDL') == vars.get('§SI'))) {
        vars.setCF(0);
    }
    //#2
    if ((vars.get('§FS_FAM2_ADDL') == vars.get('§SI')) && (((vars.get('§FS_ACC_PRI') == vars.get('§SI')) && (vars.get('§LA_ADD_LAT') == 'SX')) || ((vars.get('§TI_ACC_TWI') == '01') && (vars.get('§TI_POS_ACC') == '02')))) {
        vars.setCF(0);
    }
    //#3
    if (((vars.get('§LA_ADD_LAT') == 'SX') && (vars.get('§TI_ACC_TWI') == '01')) && ((vars.get('§TI_POS_ACC') == '02') || (vars.get('§TI_POS_ACC') == '03'))) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
