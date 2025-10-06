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

export const REG0009729: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009729
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §TES_TW_1_MAT <> ''
    // THEN:
    // *SET §DUMMYN1 = [§LARG - #1,4]
    // #3
    // COND:
    // §TES_TW_1_MAT <> ''
    // THEN:
    // *SET *CF =  [§DUMMYN1 / #100]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    //#2
    if (vars.get('§TES_TW_1_MAT') != '') {
        vars.setDUMMYN1(vars.get('§LARG') - 1.4);
    }
    //#3
    if (vars.get('§TES_TW_1_MAT') != '') {
        vars.setCF(vars.get('§DUMMYN1') / 100);
    }
    // GENERATED

    return vars.output;
};
