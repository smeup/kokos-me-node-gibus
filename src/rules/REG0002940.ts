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

export const REG0002940: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002940
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §ALTE_TC > #0
    // THEN:
    // *SET *CF = #4
    // #3
    // COND:
    // §ALTE_TC > #200
    // THEN:
    // *SET *CF = #6
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    //#2
    if (vars.get('§ALTE_TC') > 0) {
        vars.setCF(4);
    }
    //#3
    if (vars.get('§ALTE_TC') > 200) {
        vars.setCF(6);
    }
    // GENERATED

    return vars.output;
};
