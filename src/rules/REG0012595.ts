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

export const REG0012595: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012595
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET §DUMMYN1 = [ ( *LUNG - #30 ) / #20 ]
    // #2
    // THEN:
    // *SET *CF = [ #3 * §DUMMYN1 - #2 ]
    // """
    // RESPONSE:
    //#1
    vars.setDUMMYN1((vars.getLUNG() - 30) / 20);
    
    //#2
    vars.setCF(3 * vars.get('§DUMMYN1') - 2);
    // GENERATED

    return vars.output;
};
