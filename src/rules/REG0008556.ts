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

export const REG0008556: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008556
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #1
    // #2
    // COND:
    // §FS_STA_MUR_ANT2 = §SI
    // THEN:
    // *SET *CF = #0
    // #3
    // """
    // RESPONSE:
    //#1
    vars.setCF(1);
    //#2
    if (vars.get('§FS_STA_MUR_ANT2') == vars.get('§SI')) {
        vars.setCF(0);
    }
    //#3
    // GENERATED

    return vars.output;
};
