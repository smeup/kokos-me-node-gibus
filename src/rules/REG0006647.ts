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

export const REG0006647: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006647
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // §FS_FAM2_AZIMUT = §SI
    // THEN:
    // *SET *CON-A='0051'
    // *SET *CON-B=#16,8
    // *SET *CF=#2
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_FAM2_AZIMUT') == vars.get('§SI')) {
        vars.setCON_A('0051');
        vars.setCON_B(16.8);
        vars.setCF(2);
    }
    // GENERATED

    return vars.output;
};
