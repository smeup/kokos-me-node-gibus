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

export const REG0011865: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011865
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §WS001PRO01 > #0
    // THEN:
    // *SET *CF = §WS001PRO01
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§WS001PRO01') > 0) {
        vars.setCF(vars.get('§WS001PRO01'));
    }
    // GENERATED

    return vars.output;
};
