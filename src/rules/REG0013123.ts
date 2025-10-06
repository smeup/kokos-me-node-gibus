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

export const REG0013123: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0013123
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET §DUMMYN1 = §SPOR_MST
    // *SET §DUMMYN2 = §H_GAM_MST
    // #2
    // COND:
    // §SPOR > #0
    // THEN:
    // *SET §DUMMYN1 = §SPOR
    // #3
    // COND:
    // §H_GAMBA > #0
    // THEN:
    // *SET §DUMMYN2 = §H_GAMBA
    // #4
    // THEN:
    // *SET *CF = [ §DUMMYN1 / #100 + §DUMMYN2 / #100 + #1 ]
    // #5
    // COND:
    // §L_CAV_T01 > #0
    // THEN:
    // *SET *CF = §L_CAV_T01
    // """
    // RESPONSE:
    Traduzione:
    //#1
    vars.setDUMMYN1(vars.get('§SPOR_MST'));
    vars.setDUMMYN2(vars.get('§H_GAM_MST'));
    //#2
    if (vars.get('§SPOR') > 0) {
        vars.setDUMMYN1(vars.get('§SPOR'));
    }
    //#3
    if (vars.get('§H_GAMBA') > 0) {
        vars.setDUMMYN2(vars.get('§H_GAMBA'));
    }
    //#4
    vars.setCF(vars.get('§DUMMYN1') / 100 + vars.get('§DUMMYN2') / 100 + 1);
    //#5
    if (vars.get('§L_CAV_T01') > 0) {
        vars.setCF(vars.get('§L_CAV_T01'));
    }
    // GENERATED

    return vars.output;
};
