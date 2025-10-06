/**
 * This rule represents a template implementation of a rule.
 * It takes an input value and performs some operations on it using the Variables class.
 * The result is returned as the output value.
 * 
 * @param iv The input value for the rule.
 * @returns The output value after applying the rule.
 */
import { Rule } from "../types/general";
import { Variables } from "../converter/variables";

export const REG0002369: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002369
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_DUE_2G_ZIP = §SI
    // THEN:
    // *SET *CF = #8
    // ELSE:
    // *SET *CF = #4
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_DUE_2G_ZIP') == vars.get('§SI')) {
        vars.setCF(8);
    } else {
        vars.setCF(4);
    }
    // GENERATED

    return vars.output;
};
