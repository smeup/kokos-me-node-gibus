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

export const REG0009740: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009740
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYA1 = §TES_TW_2_MAT
    // #2
    // COND:
    // §DUMMYA1 = '0015'
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §DUMMYA1 = '0069'
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYA1(vars.get('§TES_TW_2_MAT'));
    //#2
    if (vars.get('§DUMMYA1') == '0015') {
        vars.setCF(1);
    }
    //#3
    if (vars.get('§DUMMYA1') == '0069') {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
