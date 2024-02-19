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

export const REG0006077: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006077
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_LT50 = §SI AND §FS_MOT_SOMFY = §SI
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §FS_LT50 = §SI AND §TI_TES_MOT = '01'
    // THEN:
    // *SET *CF = #1
    // #4
    // COND:
    // §FS_LT50 = §SI AND §TI_TES_MOT = '03'
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_LT50') == vars.get('§SI') && vars.get('§FS_MOT_SOMFY') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§FS_LT50') == vars.get('§SI') && vars.get('§TI_TES_MOT') == '01') {
        vars.setCF(1);
    }
    
    //#4
    if (vars.get('§FS_LT50') == vars.get('§SI') && vars.get('§TI_TES_MOT') == '03') {
        vars.setCF(1);
    }
    
    // GENERATED

    return vars.output;
};
