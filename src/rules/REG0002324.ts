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

export const REG0002324: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002324
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_ZIP = §SI
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // §FS_MOT_SFU = §SI AND §FS_MOT_CAL <> §SI
    // THEN:
    // *SET *LG = ''
    // #3
    // COND:
    // §FS_DUE_2G_ZIP = §SI
    // THEN:
    // *SET *CF = #2
    // #4
    // COND:
    // §FS_CLI_ZIP_TWI = §SI AND §FS_TEL1_TWI = §NO
    // THEN:
    // *SET *CF = #0
    // #5
    // COND:
    // §FS_CLI_TWI_BG = §SI AND §FS_TEL1_TWI = §NO
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_ZIP') == vars.get('§SI')) {
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§FS_MOT_SFU') == vars.get('§SI') && vars.get('§FS_MOT_CAL') != vars.get('§SI')) {
        vars.setLG('');
    }
    
    //#3
    if (vars.get('§FS_DUE_2G_ZIP') == vars.get('§SI')) {
        vars.setCF(2);
    }
    
    //#4
    if (vars.get('§FS_CLI_ZIP_TWI') == vars.get('§SI') && vars.get('§FS_TEL1_TWI') == vars.get('§NO')) {
        vars.setCF(0);
    }
    
    //#5
    if (vars.get('§FS_CLI_TWI_BG') == vars.get('§SI') && vars.get('§FS_TEL1_TWI') == vars.get('§NO')) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
