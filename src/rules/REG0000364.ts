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

export const REG0000364: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000364
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = *COL
    // #2
    // COND:
    // *LUNG <= #100
    // THEN:
    // *SET *CF = #16
    // ELSE:
    // *SET *CF = #20
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.getCOL());
    
    //#2
    if (vars.getLUNG() <= 100) {
        vars.setCF(16);
    } else {
        vars.setCF(20);
    }
    // GENERATED

    return vars.output;
};
