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

export const REG0000633: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000633
    // REQUEST:
    // """
    // #1
    // COND:
    // (§FS_TOLO_GC = §SI) OR (§FS_TOLO_BP = §SI) OR (§FS_TOLO_CL = §SI)
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if ((vars.get('§FS_TOLO_GC') == vars.get('§SI')) || (vars.get('§FS_TOLO_BP') == vars.get('§SI')) || (vars.get('§FS_TOLO_CL') == vars.get('§SI'))) {
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
