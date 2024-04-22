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

export const REG0012620: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012620
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET §DUMMYN1 = [ *LUNG / #20 ]
    // #2
    // THEN:
    // *SET §DUMMYN2 = [ §DUMMYN1 - #1 ]
    // #3
    // THEN:
    // *SET *CF = §DUMMYN2
    // #4
    // THEN:
    // *SET *CON-A = 'P073'
    // """
    // RESPONSE:
    //#1
    vars.setDUMMYN1(vars.getLUNG() / 20);
    
    //#2
    vars.setDUMMYN2(vars.get('§DUMMYN1') - 1);
    
    //#3
    vars.setCF(vars.get('§DUMMYN2'));
    
    //#4
    vars.setCON_A('P073');
    // GENERATED

    return vars.output;
};
