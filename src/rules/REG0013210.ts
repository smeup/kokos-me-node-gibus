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

export const REG0013210: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0013210
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #12
    // #2
    // COND:
    // §LARG >= #480
    // THEN:
    // *SET *CF = #16
    // """
    // RESPONSE:
    //#1
    vars.setCF(12);
    
    //#2
    if (vars.get('§LARG') >= 480) {
        vars.setCF(16);
    }
    // GENERATED

    return vars.output;
};
