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

export const REG0001920: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001920
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_FAM2_ADDL = §SI AND §TI_ACC_TW <> '01'
    // THEN:
    // *SET *CF = #2
    // #3
    // COND:
    // §FS_FAM2_ADDL = §SI AND §TI_ACC_TW = '01' AND §FS_ACC_INI = §SI
    // THEN:
    // *SET *CF = #2
    // #4
    // COND:
    // §FS_FAM2_ADDF = §SI AND §TI_ACC_TW <> '02'
    // THEN:
    // *SET *CF = #2
    // #5
    // COND:
    // §FS_FAM2_ADDF = §SI AND §TI_ACC_TW = '02' AND §FS_ACC_INI = SI
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_FAM2_ADDL') == vars.get('§SI') && vars.get('§TI_ACC_TW') != '01') {
        vars.setCF(2);
    }
    
    //#3
    if (vars.get('§FS_FAM2_ADDL') == vars.get('§SI') && vars.get('§TI_ACC_TW') == '01' && vars.get('§FS_ACC_INI') == vars.get('§SI')) {
        vars.setCF(2);
    }
    
    //#4
    if (vars.get('§FS_FAM2_ADDF') == vars.get('§SI') && vars.get('§TI_ACC_TW') != '02') {
        vars.setCF(2);
    }
    
    //#5
    if (vars.get('§FS_FAM2_ADDF') == vars.get('§SI') && vars.get('§TI_ACC_TW') == '02' && vars.get('§FS_ACC_INI') == 'SI') {
        vars.setCF(2);
    }
    // GENERATED

    return vars.output;
};
