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

export const REG0006751: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006751
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET §DUMMYN1=#0
    // #2
    // THEN:
    // *SET §DUMMYN1 = [ §LARG - #45,8 ]
    // #3
    // THEN:
    // *SET *CF= [ §DUMMYN1/ #100 ]
    // """
    // RESPONSE:
    //#1
    vars.setDUMMYN1(0);
    
    //#2
    vars.setDUMMYN1(vars.get('§LARG') - 45.8);
    
    //#3
    vars.setCF(vars.get('§DUMMYN1') / 100);
    // GENERATED

    return vars.output;
};
