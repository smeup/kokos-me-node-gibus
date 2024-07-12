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

export const REG0006398: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006398
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_CAM_TS = §SI
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_AL_LED_T01 = §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_CAM_TS') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#2
    if (vars.get('§FS_AL_LED_T01') == vars.get('§SI')) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
