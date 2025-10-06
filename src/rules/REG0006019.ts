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

export const REG0006019: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006019
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET §DUMMYN1= [ *LUNG * #104,5 ]
    // #2
    // THEN:
    // *SET *CF= [ §DUMMYN1 / #10000 ]
    // """
    // RESPONSE:
    //#1
    vars.setDUMMYN1(vars.get('§LUNG') * 104.5);
    
    //#2
    vars.setCF(vars.get('§DUMMYN1') / 10000);
    // GENERATED

    return vars.output;
};
