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

export const REG0010709: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010709
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §AL_LED_RGB_240W = '250283'
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    //#2
    if (vars.get('§AL_LED_RGB_240W') == '250283') {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
