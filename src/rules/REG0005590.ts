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

export const REG0005590: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005590
    // REQUEST:
    // """
    // #1
    // COND:
    // (§FS_MON_ANT2_ACC=§SI)  OR ( §TI_ANG_ANT2='04' )
    // THEN:
    // *SET *CF=#0
    // """
    // RESPONSE:
    //#1
    if ((vars.get('§FS_MON_ANT2_ACC') == vars.get('§SI')) || (vars.get('§TI_ANG_ANT2') == '04')) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
