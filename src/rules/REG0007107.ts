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

export const REG0007107: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0007107
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A=§VERN_1_COM
    // #2
    // THEN:
    // *SET §DUMMYN1 = [ §NR_GAM_NOR_ANT + §NR_GAM_AGG_ANT ]
    // #3
    // THEN:
    // *SET *CF = §DUMMYN1
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('§VERN_1_COM'));
    
    //#2
    vars.setDUMMYN1(vars.get('§NR_GAM_NOR_ANT') + vars.get('§NR_GAM_AGG_ANT'));
    
    //#3
    vars.setCF(vars.get('§DUMMYN1'));
    // GENERATED

    return vars.output;
};
