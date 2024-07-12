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

export const REG0007807: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0007807
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET §DUMMYN1 =#0
    // *SET §DUMMYN2 =#0
    // #2
    // THEN:
    // *SET §DUMMYN1 = #17
    // *SET §DUMMYN2 = #17
    // #3
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // *SET *CON-B = [ §SPOR - §DUMMYN1 - §DUMMYN2 ]
    // """
    // RESPONSE:
    //#1
    vars.setDUMMYN1(0);
    vars.setDUMMYN2(0);
    
    //#2
    vars.setDUMMYN1(17);
    vars.setDUMMYN2(17);
    
    //#3
    vars.setCON_A(vars.get('§VERN_1_COM'));
    vars.setCON_B(vars.get('§SPOR') - vars.get('§DUMMYN1') - vars.get('§DUMMYN2'));
    // GENERATED

    return vars.output;
};
