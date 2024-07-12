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

export const REG0011317: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011317
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // THEN:
    // *SET *CF = §NR_SCH_TOT
    // #3
    // COND:
    // §TI_SCH = '02'
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    //#2
    vars.setCF(vars.get('§NR_SCH_TOT'));
    //#3
    if (vars.get('§TI_SCH') == '02') {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
