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

export const REG0012639: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012639
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET §DUMMYN1 = #0
    // #2
    // COND:
    // §LARG > #400
    // THEN:
    // *SET §DUMMYN1 = #1
    // #3
    // COND:
    // §LARG > #500
    // THEN:
    // *SET §DUMMYN1 = #2
    // #4
    // COND:
    // §LARG > #600
    // THEN:
    // *SET §DUMMYN1 = #3
    // #5
    // THEN:
    // *SET *CF = [ §DUMMYN1 + #2 ]
    // """
    // RESPONSE:
    //#1
    vars.setDUMMYN1(0);
    
    //#2
    if (vars.get('§LARG') > 400) {
        vars.setDUMMYN1(1);
    }
    
    //#3
    if (vars.get('§LARG') > 500) {
        vars.setDUMMYN1(2);
    }
    
    //#4
    if (vars.get('§LARG') > 600) {
        vars.setDUMMYN1(3);
    }
    
    //#5
    vars.setCF(vars.get('§DUMMYN1') + 2);
    // GENERATED

    return vars.output;
};
