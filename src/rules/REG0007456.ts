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

export const REG0007456: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0007456
    // REQUEST:
    // """
    // #1
    // COND:
    // ( §TECNOL_MOTORE = 'SOMFY_STD'  OR  §TECNOL_MOTORE = 'SOMFY_RTS' OR §TECNOL_MOTORE= 'SOMFY_IO' )  AND ( §FS_LS60<>§SI )
    // THEN:
    // *SET *CF = #1
    // ELSE:
    // *SET *LG=''
    // #2
    // COND:
    // §FS_MOT_SFU = §SI
    // THEN:
    // *SET *CF = #0
    // #3
    // COND:
    // §FS_MOT_MED_COM = §SI
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    if ((vars.get('§TECNOL_MOTORE') == 'SOMFY_STD' || vars.get('§TECNOL_MOTORE') == 'SOMFY_RTS' || vars.get('§TECNOL_MOTORE') == 'SOMFY_IO') && vars.get('§FS_LS60') != vars.get('§SI')) {
        vars.setCF(1);
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§FS_MOT_SFU') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#3
    if (vars.get('§FS_MOT_MED_COM') == vars.get('§SI')) {
        vars.setCF(1);
    } 
    
    // GENERATED

    return vars.output;
};
