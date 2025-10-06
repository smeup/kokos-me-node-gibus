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

export const REG0002620: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002620
    // REQUEST:
    // """
    // #1
    // #2
    // THEN:
    // *SET §DUMMYN1 = [§NR_FRANGI + #2]
    // #3
    // THEN:
    // *SET *CF = [§DUMMYN1 * #2]
    // """
    // RESPONSE:
    //#1
    vars.setDUMMYN1(vars.get('§NR_FRANGI') + 2);
    
    //#2
    vars.setCF(vars.get('§DUMMYN1') * 2);
    // GENERATED

    return vars.output;
};
