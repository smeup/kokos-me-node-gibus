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

export const REG0002485: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002485
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_ROLLO = §SI AND §FS_COM_MOTORE = §SI
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_ROLLO') == vars.get('§SI') && vars.get('§FS_COM_MOTORE') == vars.get('§SI')) {
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
