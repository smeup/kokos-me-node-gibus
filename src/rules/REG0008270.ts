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

export const REG0008270: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008270
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // THEN:
    // *SET §DUMMYN1 = [ §NR_GAM_NOR_CEN1 + §NR_GAM_NOR_CEN2 ]
    // #3
    // THEN:
    // *SET *CF = §DUMMYN1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    vars.setDUMMYN1(vars.get('§NR_GAM_NOR_CEN1') + vars.get('§NR_GAM_NOR_CEN2'));
    
    //#3
    vars.setCF(vars.get('§DUMMYN1'));
    // GENERATED

    return vars.output;
};
