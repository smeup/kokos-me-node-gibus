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

export const REG0003159: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003159
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_MOT_SFU = §SI
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_MOT_MED_COM = §SI
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_MOT_SFU') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#2
    if (vars.get('§FS_MOT_MED_COM') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    // GENERATED

    return vars.output;
};
