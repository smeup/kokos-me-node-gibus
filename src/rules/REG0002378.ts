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

export const REG0002378: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002378
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = §VERN_PLAST
    // *SET *CF = #2
    // #2
    // COND:
    // §FS_DUE_2G_ZIP = §SI
    // THEN:
    // *SET *CF = #4
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('§VERN_PLAST'));
    vars.setCF(2);
    
    //#2
    if (vars.get('§FS_DUE_2G_ZIP') == vars.get('§SI')) {
        vars.setCF(4);
    }
    // GENERATED

    return vars.output;
};
