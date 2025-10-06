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

export const REG0001466: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001466
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_FAR_COMP = §SI AND §AT_FAR_COMP = '01' AND §NR_FAR_COMP = #0
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_FAR_COMP') == vars.get('§SI') && vars.get('§AT_FAR_COMP') == '01' && vars.get('§NR_FAR_COMP') == 0) {
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
