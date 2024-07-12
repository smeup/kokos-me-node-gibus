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

export const REG0005344: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005344
    // REQUEST:
    // """
    // #1
    // COND:
    // ( §FS_LED_PER=§SI ) AND ( §FS_LED_RGB=§SI )
    // ELSE:
    // *SET *LG=''
    // #2
    // COND:
    // ( §FS_LED_PER_DX=§SI )
    // THEN:
    // *SET *CF=#1
    // #3
    // COND:
    // ( §FS_LED_RGB_DX=§SI ) OR (( §FS_LED_PER_DX=§SI ) AND ( §FS_LED_RGB_DX=§SI ))
    // THEN:
    // *SET *CF=#2
    // """
    // RESPONSE:
    //#1
    if ((vars.get('§FS_LED_PER') == vars.get('§SI')) && (vars.get('§FS_LED_RGB') == vars.get('§SI'))) {
    } else {
        vars.setLG("");
    }
    
    //#2
    if (vars.get('§FS_LED_PER_DX') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#3
    if ((vars.get('§FS_LED_RGB_DX') == vars.get('§SI')) || ((vars.get('§FS_LED_PER_DX') == vars.get('§SI')) && (vars.get('§FS_LED_RGB_DX') == vars.get('§SI')))) {
        vars.setCF(2);
    }
    
    // GENERATED

    return vars.output;
};
