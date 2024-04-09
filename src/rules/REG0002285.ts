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

export const REG0002285: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002285
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_AC = §SI AND (§FS_NOTELO <> §SI AND §FS_NOPTELO <> §SI)
    // THEN:
    // *SET *LG = ''
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_AC') == vars.get('§SI') && (vars.get('§FS_NOTELO') != vars.get('§SI') && vars.get('§FS_NOPTELO') != vars.get('§SI'))) {
        vars.setLG('');
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
