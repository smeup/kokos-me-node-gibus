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

export const REG0008360: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008360
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET §DUMMYN1 = [ §L_GRO_1 + §L_GRO_2 + §L_GRO_3 ]
    // #2
    // THEN:
    // *SET *CF= [ §DUMMYN1/#100 ]
    // """
    // RESPONSE:
    //#1
    vars.setDUMMYN1(vars.get('§L_GRO_1') + vars.get('§L_GRO_2') + vars.get('§L_GRO_3'));
    
    //#2
    vars.setCF(vars.get('§DUMMYN1') / 100);
    // GENERATED

    return vars.output;
};
