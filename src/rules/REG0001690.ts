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

export const REG0001690: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001690
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_DIM_400 = §SI
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §FS_SPA_75 = §SI AND §NR_DIV_TEN > #1 AND #1 = #2
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    //#2
    if (vars.get('§FS_DIM_400') == vars.get('§SI')) {
        vars.setCF(1);
    }
    //#3
    if ((vars.get('§FS_SPA_75') == vars.get('§SI')) && (vars.get('§NR_DIV_TEN') > 1) && (false)) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
