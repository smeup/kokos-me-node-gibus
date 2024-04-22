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

export const REG0012417: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012417
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_MD_JOY = §SI
    // THEN:
    // *SET *CON-A = §CF_BASE_MDDISPL
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_MD_JOY') == vars.get('§SI')) {
        vars.setCON_A(vars.get('§CF_BASE_MDDISPL'));
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
