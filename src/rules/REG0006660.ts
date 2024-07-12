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

export const REG0006660: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006660
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET §DUMMYN1 =#0
    // *SET §DUMMYN2 =#0
    // *SET §DUMMYN3 =#0
    // #2
    // THEN:
    // *SET §DUMMYN1 =[ §SPOR - #25 ]
    // #3
    // THEN:
    // *SET §DUMMYN2 =[ §DUMMYN1 * #2 ]
    // #4
    // THEN:
    // *SET §DUMMYN3 = [ §DUMMYN2 + #34 ]
    // #5
    // THEN:
    // *SET *CF = [ §DUMMYN3 /#100 ]
    // """
    // RESPONSE:
    //#1
    vars.setDUMMYN1(0);
    vars.setDUMMYN2(0);
    vars.setDUMMYN3(0);
    
    //#2
    vars.setDUMMYN1(vars.get('§SPOR') - 25);
    
    //#3
    vars.setDUMMYN2(vars.get('§DUMMYN1') * 2);
    
    //#4
    vars.setDUMMYN3(vars.get('§DUMMYN2') + 34);
    
    //#5
    vars.setCF(vars.get('§DUMMYN3') / 100);
    // GENERATED

    return vars.output;
};
