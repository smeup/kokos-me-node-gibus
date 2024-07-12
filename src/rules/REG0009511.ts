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

export const REG0009511: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009511
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *NT = §NOT_MOT_CLI
    // #2
    // COND:
    // §FS_TXT = §SI
    // THEN:
    // *SET *CF = #0
    // #3
    // COND:
    // §FS_SEGNO = §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setNT(vars.get('§NOT_MOT_CLI'));
    
    //#2
    if (vars.get('§FS_TXT') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#3
    if (vars.get('§FS_SEGNO') == vars.get('§SI')) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
