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

export const REG0004408: Rule = (iv) => {

    const vars = new Variables(iv);
    
    // GENERATED
    // RULE: REG0004408
    // REQUEST:
    // """
    // #1
    // COND:
    // (§L_PORTANTE1> #0 ) AND (§FS_FAM2_165=§SI )
    // ELSE:
    // *SET *LG=''
    // """
    // RESPONSE:
    if ((vars.get('§L_PORTANTE1') > 0) && (vars.get('§FS_FAM2_165') == vars.get('§SI'))) {
    } else {
        vars.setLG("");
    }
    // GENERATED

    return vars.output;
};
