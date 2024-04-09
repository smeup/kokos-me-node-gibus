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

export const REG0003477: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003477
    // REQUEST:
    // """
    // #1
    // COND:
    // §FRONTALE_ANT2 >#0
    // THEN:
    // *SET *CF=#1
    // #2
    // COND:
    // §FRONTALE_ANT3 >#0
    // THEN:
    // *SET *CF=#2
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FRONTALE_ANT2') > 0) {
        vars.setCF(1);
    }
    
    //#2
    if (vars.get('§FRONTALE_ANT3') > 0) {
        vars.setCF(2);
    }
    // GENERATED

    return vars.output;
};
