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

export const REG0001334: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001334
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_LED_SPOT = 'SI'
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // §FS_NOPTELO = §SI
    // THEN:
    // *SET *LG = ''
    // #3
    // COND:
    // §FS_TEN_NUO = §SI
    // THEN:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_LED_SPOT') == 'SI') {
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§FS_NOPTELO') == vars.get('§SI')) {
        vars.setLG('');
    }
    
    //#3
    if (vars.get('§FS_TEN_NUO') == vars.get('§SI')) {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
