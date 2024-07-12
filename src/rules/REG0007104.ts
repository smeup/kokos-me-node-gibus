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

export const REG0007104: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0007104
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=§NR_FRANGI
    // *SET *CON-A = '0000'
    // *SET *CON-B = [§L_SCA_LAM + #50]
    // #2
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(vars.get('§NR_FRANGI'));
    vars.setCON_A('0000');
    vars.setCON_B(vars.get('§L_SCA_LAM') + 50);
    
    //#2
    vars.setCF(0);
    // GENERATED

    return vars.output;
};
