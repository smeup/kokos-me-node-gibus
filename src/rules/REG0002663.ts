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

export const REG0002663: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002663
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_MOT_SOMFY = §SI AND §FS_LS60 = §SI
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_MOT_SOMFY') == vars.get('§SI') && vars.get('§FS_LS60') == vars.get('§SI')) {
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
