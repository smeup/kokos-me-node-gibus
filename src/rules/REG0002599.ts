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

export const REG0002599: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002599
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §TRA_TET_POS1 > #0
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §TRA_TET_POS2 > #0
    // THEN:
    // *SET *CF = #2
    // #4
    // COND:
    // §TRA_TET_POS3 > #0
    // THEN:
    // *SET *CF = #3
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§TRA_TET_POS1') > 0) {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§TRA_TET_POS2') > 0) {
        vars.setCF(2);
    }
    
    //#4
    if (vars.get('§TRA_TET_POS3') > 0) {
        vars.setCF(3);
    }
    // GENERATED

    return vars.output;
};
