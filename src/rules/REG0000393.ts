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

export const REG0000393: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000393
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_ZEROGRADI = §SI AND (§FS_ATT_PARETE = §SI OR §FS_ATT_SOFFITTO = §SI)
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_ZEROGRADI') == vars.get('§SI') && (vars.get('§FS_ATT_PARETE') == vars.get('§SI') || vars.get('§FS_ATT_SOFFITTO') == vars.get('§SI'))) {
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
