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

export const REG0012514: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012514
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §TI_TES_MOT = '03'
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §FS_MOT_CLI = §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§TI_TES_MOT') == '03') {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§FS_MOT_CLI') == vars.get('§SI')) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
