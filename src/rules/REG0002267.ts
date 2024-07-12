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

export const REG0002267: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002267
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_IMPERO = §SI
    // THEN:
    // *SET *CON-A ='0000'
    // *SET *CON-B = [§L_BRACCETTI - #14]
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_IMPERO') == vars.get('§SI')) {
        vars.setCON_A('0000');
        vars.setCON_B(vars.get('§L_BRACCETTI') - 14);
    } else {
        vars.setLG('');
    }
    
    // GENERATED

    return vars.output;
};
