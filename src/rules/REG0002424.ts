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

export const REG0002424: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002424
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_APPOGGIATA = §SI AND §FS_ACC_FIN = §SI
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // §FS_APPOGGIATA = §SI AND §FS_ACC_FIN = §SI
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_APPOGGIATA') == vars.get('§SI') && vars.get('§FS_ACC_FIN') == vars.get('§SI')) {
    } else {
        vars.setLG('');
    }
    //#2
    if (vars.get('§FS_APPOGGIATA') == vars.get('§SI') && vars.get('§FS_ACC_FIN') == vars.get('§SI')) {
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
