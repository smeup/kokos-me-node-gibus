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

export const REG0000784: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000784
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_NOTELO = §SI
    // THEN:
    // *SET *LG = ''
    // #2
    // COND:
    // §FS_CAM_TS = §SI
    // THEN:
    // *SET *LG = ''
    // #3
    // COND:
    // §FS_TELO_TERZIST = 'TLT'
    // THEN:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_NOTELO') == vars.get('§SI')) {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§FS_CAM_TS') == vars.get('§SI')) {
        vars.setLG('');
    }
    
    //#3
    if (vars.get('§FS_TELO_TERZIST') == 'TLT') {
        vars.setLG('');
    }
    
    // GENERATED

    return vars.output;
};
