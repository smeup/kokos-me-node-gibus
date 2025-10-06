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

export const REG0002615: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002615
    // REQUEST:
    // """
    // #1
    // #2
    // THEN:
    // *SET §DUMMYN1 = [§N_MODULI - #1]
    // #3
    // THEN:
    // *SET §DUMMYN2 = [§NR_FRANGI + #2 ]
    // #4
    // THEN:
    // *SET *CF = [§DUMMYN1 * §DUMMYN2]
    // """
    // RESPONSE:
    //#1
    vars.setDUMMYN1(vars.get('§N_MODULI') - 1);
    
    //#2
    vars.setDUMMYN2(vars.get('§NR_FRANGI') + 2);
    
    //#3
    vars.setCF(vars.get('§DUMMYN1') * vars.get('§DUMMYN2'));
    // GENERATED

    return vars.output;
};
