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

export const REG0011884: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011884
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §WS001_BC > #0
    // THEN:
    // *SET *CF = §WS001_BC
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§WS001_BC') > 0) {
        vars.setCF(vars.get('§WS001_BC'));
    }
    // GENERATED

    return vars.output;
};
