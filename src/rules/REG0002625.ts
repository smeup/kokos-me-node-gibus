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

export const REG0002625: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002625
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = *COL
    // #2
    // THEN:
    // *SET *CON-A = §VR_PLA_TEL
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.getCOL());
    
    //#2
    vars.setCON_A(vars.get('§VR_PLA_TEL'));
    // GENERATED

    return vars.output;
};
