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

export const REG0008247: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008247
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // §FS_FAM2_FLY_R = §SI
    // THEN:
    // *SET *CF=#4
    // *SET *CON-A='0000'
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_FAM2_FLY_R') == vars.get('§SI')) {
        vars.setCF(4);
        vars.setCON_A('0000');
    }
    // GENERATED

    return vars.output;
};
