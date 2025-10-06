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

export const REG0006563: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006563
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET §DUMMYN1=#0
    // #2
    // THEN:
    // *SET §DUMMYN1 = [ §LARG_M1 - #2,8 ]
    // #3
    // THEN:
    // *SET *CON-A=§VERN_FRANGI
    // *SET *CON-B=§DUMMYN1
    // """
    // RESPONSE:
    //#1
    vars.setDUMMYN1(0);
    
    //#2
    vars.setDUMMYN1(vars.get('§LARG_M1') - 2.8);
    
    //#3
    vars.setCON_A(vars.get('§VERN_FRANGI'));
    vars.setCON_B(vars.get('§DUMMYN1'));
    // GENERATED

    return vars.output;
};
