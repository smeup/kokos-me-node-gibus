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

export const REG0007391: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0007391
    // REQUEST:
    // """
    // #1
    // COND:
    // ( §TI_PR_ANT1='02' ) AND ( §FS_PIE_ANT1_MAG<>§SI )
    // THEN:
    // *SET *CF=#1
    // ELSE:
    // *SET *CF=#0
    // """
    // RESPONSE:
    //#1
    if (vars.get('§TI_PR_ANT1') == '02' && vars.get('§FS_PIE_ANT1_MAG') != vars.get('§SI')) {
        vars.setCF(1);
    } else {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
