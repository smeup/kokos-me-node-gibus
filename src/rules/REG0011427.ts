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

export const REG0011427: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011427
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §TI_SCH = '02'
    // THEN:
    // *SET *CF = §NR_SCH_TOT
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    //#2
    if (vars.get('§TI_SCH') == '02') {
        vars.setCF(vars.get('§NR_SCH_TOT'));
    }
    // GENERATED

    return vars.output;
};
