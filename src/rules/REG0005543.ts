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

export const REG0005543: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005543
    // REQUEST:
    // """
    // #1
    // COND:
    // ( §FS_LED_RGB_DX=§SI )
    // THEN:
    // *SET *CF=#1
    // ELSE:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_LED_RGB_DX') == vars.get('§SI')) {
        vars.setCF(1);
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
