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

export const REG0002498: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002498
    // REQUEST:
    // """
    // #1
    // COND:
    // (§FS_13_QU = §SI) OR (§FS_11_QUJ = §SI)
    // THEN:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_13_QU') == vars.get('§SI') || vars.get('§FS_11_QUJ') == vars.get('§SI')) {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
