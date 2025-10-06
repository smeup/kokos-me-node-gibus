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

export const REG0009429: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009429
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = [ §NR_CAN_SLA * #4 ]
    // #2
    // COND:
    // §PD_LAM_2_DOWN > #0
    // THEN:
    // *SET *CF = §PD_LAM_2_DOWN
    // """
    // RESPONSE:
    //#1
    vars.setCF(vars.get('§NR_CAN_SLA') * 4);
    
    //#2
    if (vars.get('§PD_LAM_2_DOWN') > 0) {
        vars.setCF(vars.get('§PD_LAM_2_DOWN'));
    }
    // GENERATED

    return vars.output;
};
