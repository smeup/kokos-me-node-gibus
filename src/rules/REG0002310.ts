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

export const REG0002310: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002310
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_MOT_SFU = §SI AND §FS_MOT_CAL <> §SI
    // THEN:
    // *SET *LG = ''
    // #2
    // COND:
    // §FS_MOT_DOP = §SI
    // THEN:
    // *SET *LG = ''
    // #3
    // COND:
    // §FS_MOLLA_COMP = §SI AND (§LARG > #590 OR §NR_BRACCI > #2)
    // THEN:
    // *SET *LG = ''
    // #4
    // COND:
    // §FS_CLI_ZIP_TWI = §SI AND §FS_TEL1_TWI = §NO
    // THEN:
    // *SET *LG = ''
    // #5
    // COND:
    // §FS_CLI_TWI_BG = §SI AND §FS_TEL1_TWI = §NO
    // THEN:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_MOT_SFU') == vars.get('§SI') && vars.get('§FS_MOT_CAL') != vars.get('§SI')) {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§FS_MOT_DOP') == vars.get('§SI')) {
        vars.setLG('');
    }
    
    //#3
    if (vars.get('§FS_MOLLA_COMP') == vars.get('§SI') && (vars.get('§LARG') > 590 || vars.get('§NR_BRACCI') > 2)) {
        vars.setLG('');
    }
    
    //#4
    if (vars.get('§FS_CLI_ZIP_TWI') == vars.get('§SI') && vars.get('§FS_TEL1_TWI') == vars.get('§NO')) {
        vars.setLG('');
    }
    
    //#5
    if (vars.get('§FS_CLI_TWI_BG') == vars.get('§SI') && vars.get('§FS_TEL1_TWI') == vars.get('§NO')) {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
