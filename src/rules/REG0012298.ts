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

export const REG0012298: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012298
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_TXT = §SI
    // THEN:
    // *SET *CF = §PD_LARG_ML
    // #3
    // COND:
    // §FS_TXT = §SI AND §PD_LARG_ML_DOWN > #0
    // THEN:
    // *SET *CF = §PD_LARG_ML_DOWN
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_TXT') == vars.get('§SI')) {
        vars.setCF(vars.get('§PD_LARG_ML'));
    }
    
    //#3
    if (vars.get('§FS_TXT') == vars.get('§SI') && vars.get('§PD_LARG_ML_DOWN') > 0) {
        vars.setCF(vars.get('§PD_LARG_ML_DOWN'));
    }
    // GENERATED

    return vars.output;
};
