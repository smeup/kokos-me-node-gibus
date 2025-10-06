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

export const REG0004671: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004671
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = §VR_PLA_LAM
    // #2
    // COND:
    // *CON-A = 'P069'
    // THEN:
    // *SET *CON-A = 'P073'
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('§VR_PLA_LAM'));
    //#2
    if (vars.getCON_A() == 'P069') {
        vars.setCON_A('P073');
    }
    // GENERATED

    return vars.output;
};
