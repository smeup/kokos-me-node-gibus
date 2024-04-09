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

export const REG0000362: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000362
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = *COL
    // #2
    // COND:
    // *LUNG <= #100
    // THEN:
    // *SET *CF =#4
    // ELSE:
    // *SET *CF =#6
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.getCOL());
    
    //#2
    if (vars.getLUNG() <= 100) {
        vars.setCF(4);
    } else {
        vars.setCF(6);
    }
    // GENERATED

    return vars.output;
};
