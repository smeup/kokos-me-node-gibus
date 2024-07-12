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

export const REG0007972: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0007972
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // ( §FS_FAM2_TWIST=§SI ) AND ( §FS_LED_RGB_ALL=§SI ) AND ( §FS_LED_PER_ALL=§SI )
    // THEN:
    // *SET *CF=#7
    // #3
    // COND:
    // ( §FS_FAM2_ZENIT=§SI ) AND ( §FS_LED_RGB_ALL=§SI ) AND ( §FS_LED_PER_ALL=§SI )
    // THEN:
    // *SET *CF=#8
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if ((vars.get('§FS_FAM2_TWIST') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_ALL') == vars.get('§SI')) && (vars.get('§FS_LED_PER_ALL') == vars.get('§SI'))) {
        vars.setCF(7);
    }
    
    //#3
    if ((vars.get('§FS_FAM2_ZENIT') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_ALL') == vars.get('§SI')) && (vars.get('§FS_LED_PER_ALL') == vars.get('§SI'))) {
        vars.setCF(8);
    }
    
    // GENERATED

    return vars.output;
};
