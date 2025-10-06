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

export const REG0012278: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012278
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYN1 = #0
    // #2
    // COND:
    // §H_ANT_M1 > #0
    // THEN:
    // *SET §DUMMYN2 = §DUMMYN1
    // #3
    // COND:
    // §H_ANT_M1 > #0
    // THEN:
    // *SET §DUMMYN1 = [ §DUMMYN2 + #2 - §PCH_N_ANT_M1 ]
    // #4
    // COND:
    // §H_ANT_M2 > #0
    // THEN:
    // *SET §DUMMYN2 = §DUMMYN1
    // #5
    // COND:
    // §H_ANT_M2 > #0
    // THEN:
    // *SET §DUMMYN1 = [ §DUMMYN2 + #2 - §PCH_N_ANT_M2 ]
    // #6
    // THEN:
    // *SET *CF = [ §DUMMYN1 * §H_GAMBA / #100 ]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYN1(0);
    //#2
    if (vars.get('§H_ANT_M1') > 0) {
        vars.setDUMMYN2(vars.get('§DUMMYN1'));
    }
    //#3
    if (vars.get('§H_ANT_M1') > 0) {
        vars.setDUMMYN1(vars.get('§DUMMYN2') + 2 - vars.get('§PCH_N_ANT_M1'));
    }
    //#4
    if (vars.get('§H_ANT_M2') > 0) {
        vars.setDUMMYN2(vars.get('§DUMMYN1'));
    }
    //#5
    if (vars.get('§H_ANT_M2') > 0) {
        vars.setDUMMYN1(vars.get('§DUMMYN2') + 2 - vars.get('§PCH_N_ANT_M2'));
    }
    //#6
    vars.setCF(vars.get('§DUMMYN1') * vars.get('§H_GAMBA') / 100);
    // GENERATED

    return vars.output;
};
