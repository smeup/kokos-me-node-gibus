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

export const REG0002323: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002323
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_MOT_SFU = §SI AND §FS_MOT_CAL <> §SI
    // THEN:
    // *SET *LG = ''
    // #2
    // COND:
    // §FS_FAM2_DUETTO = §SI
    // THEN:
    // *SET *CF = #2
    // #3
    // COND:
    // §FS_DUE_VER_ZIP = §SI
    // THEN:
    // *SET *CF = #1
    // #4
    // COND:
    // §FS_AL_LED_T01 = §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_MOT_SFU') == vars.get('§SI') && vars.get('§FS_MOT_CAL') != vars.get('§SI')) {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§FS_FAM2_DUETTO') == vars.get('§SI')) {
        vars.setCF(2);
    }
    
    //#3
    if (vars.get('§FS_DUE_VER_ZIP') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#4
    if (vars.get('§FS_AL_LED_T01') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    // GENERATED

    return vars.output;
};
