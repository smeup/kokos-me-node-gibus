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

export const REG0007745: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0007745
    // REQUEST:
    // """
    // #1
    // COND:
    // ( §FS_TRA_LAT_SX=§SI ) AND ( §L_TR1_SP >#0 )
    // ELSE:
    // *SET *LG=''
    // """
    // RESPONSE:
    if (vars.get('§FS_TRA_LAT_SX') == vars.get('§SI') && vars.get('§L_TR1_SP') > 0) {
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
