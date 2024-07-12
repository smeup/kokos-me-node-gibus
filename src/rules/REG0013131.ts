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

export const REG0013131: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0013131
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET §DUMMYN1 = [ *LUNG / #20 ]
    // #2
    // THEN:
    // *SET §DUMMYN2 = [ §DUMMYN1 - #2]
    // #3
    // THEN:
    // *SET §DUMMYN3 = [ §DUMMYN2 * #2]
    // #4
    // THEN:
    // *SET *CF = [ §DUMMYN3 + #1]
    // #5
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setDUMMYN1(vars.get('§LUNG') / 20);
    
    //#2
    vars.setDUMMYN2(vars.get('§DUMMYN1') - 2);
    
    //#3
    vars.setDUMMYN3(vars.get('§DUMMYN2') * 2);
    
    //#4
    vars.setCF(vars.get('§DUMMYN3') + 1);
    
    //#5
    vars.setCF(0);
    // GENERATED

    return vars.output;
};
