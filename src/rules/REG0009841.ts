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

export const REG0009841: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009841
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_LED_RGB_SX = §SI
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §FS_LED_PER_SX = §SI
    // THEN:
    // *SET *CF = #1
    // #4
    // COND:
    // §FS_FAM2_JOY = §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    //#2
    if (vars.get('§FS_LED_RGB_SX') == vars.get('§SI')) {
        vars.setCF(1);
    }
    //#3
    if (vars.get('§FS_LED_PER_SX') == vars.get('§SI')) {
        vars.setCF(1);
    }
    //#4
    if (vars.get('§FS_FAM2_JOY') == vars.get('§SI')) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
