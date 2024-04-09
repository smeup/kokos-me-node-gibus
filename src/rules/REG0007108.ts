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

export const REG0007108: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0007108
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A=§VERN_1_COM
    // *SET *CON-B= §L_CAN_SLA_STD
    // #2
    // THEN:
    // *SET *CF = #0
    // #3
    // COND:
    // §NR_CAN_SLA = #1
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('§VERN_1_COM'));
    vars.setCON_B(vars.get('§L_CAN_SLA_STD'));
    
    //#2
    vars.setCF(0);
    
    //#3
    if (vars.get('§NR_CAN_SLA') == 1) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
