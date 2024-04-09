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

export const REG0006677: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006677
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A=§VR_SLI_CAR
    // #2
    // COND:
    // *CON-A = '0072'
    // THEN:
    // *SET *CON-A = '0103'
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('§VR_SLI_CAR'));
    
    //#2
    if (vars.getCON_A() == '0072') {
        vars.setCON_A('0103');
    }
    // GENERATED

    return vars.output;
};
