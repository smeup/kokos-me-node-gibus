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

export const REG0011995: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011995
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = §VR_PLA_TEL
    // #2
    // COND:
    // §X_CHI_RET > #0
    // THEN:
    // *SET *CF = [ §X_CHI_RET * #2]
    // #3
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VR_PLA_TEL'));
    
    //#2
    if (vars.get('§X_CHI_RET') > 0) {
        vars.setCF(vars.get('§X_CHI_RET') * 2);
    }
    
    //#3
    vars.setCF(0);
    // GENERATED

    return vars.output;
};
