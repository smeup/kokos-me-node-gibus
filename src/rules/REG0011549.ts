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

export const REG0011549: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011549
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYN1 = #0
    // *SET §DUMMYN2 = #0
    // #2
    // COND:
    // §SPOR > #0
    // THEN:
    // *SET §DUMMYN1 = #1
    // #3
    // COND:
    // §SPOR > #310
    // THEN:
    // *SET §DUMMYN1 = #0
    // #4
    // COND:
    // §LARG > #0
    // THEN:
    // *SET §DUMMYN2 = #1
    // #5
    // COND:
    // §LARG > #310
    // THEN:
    // *SET §DUMMYN2 = #0
    // #6
    // THEN:
    // *SET *CF = [ §DUMMYN1 + §DUMMYN2 ]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYN1(0);
    vars.setDUMMYN2(0);
    //#2
    if (vars.get('§SPOR') > 0) {
        vars.setDUMMYN1(1);
    }
    //#3
    if (vars.get('§SPOR') > 310) {
        vars.setDUMMYN1(0);
    }
    //#4
    if (vars.get('§LARG') > 0) {
        vars.setDUMMYN2(1);
    }
    //#5
    if (vars.get('§LARG') > 310) {
        vars.setDUMMYN2(0);
    }
    //#6
    vars.setCF(vars.get('§DUMMYN1') + vars.get('§DUMMYN2'));
    // GENERATED

    return vars.output;
};
