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

export const REG0011559: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011559
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYN1 = #0
    // *SET §DUMMYN2 = #0
    // #2
    // COND:
    // §SPOR > #130
    // THEN:
    // *SET §DUMMYN1 = #1
    // #3
    // COND:
    // §SPOR > #350
    // THEN:
    // *SET §DUMMYN1 = #0
    // #4
    // COND:
    // §SPOR > #510
    // THEN:
    // *SET §DUMMYN1 = #2
    // #5
    // COND:
    // §LARG > #130
    // THEN:
    // *SET §DUMMYN2 = #1
    // #6
    // COND:
    // §LARG > #350
    // THEN:
    // *SET §DUMMYN2 = #0
    // #7
    // THEN:
    // *SET *CF = [ §DUMMYN1 + §DUMMYN2 ]
    // #8
    // THEN:
    // *SET *CF = #0
    // #9
    // COND:
    // §NR_STR_T02 > #0
    // THEN:
    // *SET *CF = §NR_STR_T02
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYN1(0);
    vars.setDUMMYN2(0);
    //#2
    if (vars.get('§SPOR') > 130) {
        vars.setDUMMYN1(1);
    }
    //#3
    if (vars.get('§SPOR') > 350) {
        vars.setDUMMYN1(0);
    }
    //#4
    if (vars.get('§SPOR') > 510) {
        vars.setDUMMYN1(2);
    }
    //#5
    if (vars.get('§LARG') > 130) {
        vars.setDUMMYN2(1);
    }
    //#6
    if (vars.get('§LARG') > 350) {
        vars.setDUMMYN2(0);
    }
    //#7
    vars.setCF(vars.get('§DUMMYN1') + vars.get('§DUMMYN2'));
    //#8
    vars.setCF(0);
    //#9
    if (vars.get('§NR_STR_T02') > 0) {
        vars.setCF(vars.get('§NR_STR_T02'));
    }
    // GENERATED

    return vars.output;
};
