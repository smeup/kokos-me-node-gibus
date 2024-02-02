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

export const REG0007203: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0007203
    // REQUEST:
    // """
    // #1
    // #2
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §FS_GU_56 = §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(1);
    //#2
    vars.setCF(1);
    //#3
    if (vars.get('§FS_GU_56') == vars.get('§SI')) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
