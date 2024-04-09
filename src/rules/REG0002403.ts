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

export const REG0002403: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002403
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_13_QU = §SI OR §FS_VERTI90 = §SI OR §FS_VERTI90_Z_BA = §SI
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §FS_13_0 = §SI
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_13_QU') == vars.get('§SI') || vars.get('§FS_VERTI90') == vars.get('§SI') || vars.get('§FS_VERTI90_Z_BA') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§FS_13_0') == vars.get('§SI')) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
