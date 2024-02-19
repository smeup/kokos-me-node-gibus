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

export const REG0005446: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005446
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_CUSC_INOX<>§SI
    // ELSE:
    // *SET *LG=''
    // #2
    // COND:
    // §FS_MOT_SFU = §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_CUSC_INOX') != vars.get('§SI')) {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§FS_MOT_SFU') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    // GENERATED

    return vars.output;
};
