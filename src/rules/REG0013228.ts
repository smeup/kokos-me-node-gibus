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

export const REG0013228: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0013228
    // REQUEST:
    // """
    // #1
    // COND:
    // §AL_LED_RGB_240W = '250283' OR §AL_LED_RGB_240W = '250285' OR §AL_LED_RGB_320W = '250286' OR §AL_LED_RGB_320W = '250284'
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    if (vars.get('§AL_LED_RGB_240W') == '250283' || vars.get('§AL_LED_RGB_240W') == '250285' || vars.get('§AL_LED_RGB_320W') == '250286' || vars.get('§AL_LED_RGB_320W') == '250284') {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
