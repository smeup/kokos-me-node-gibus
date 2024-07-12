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

export const REG0009158: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009158
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // THEN:
    // *SET §DUMMYN1 = #6
    // #3
    // COND:
    // §NR_BAN_FRA >= #11
    // THEN:
    // *SET §DUMMYN1 = #8
    // #4
    // COND:
    // §NR_BAN_FRA >= #14
    // THEN:
    // *SET §DUMMYN1 = #10
    // #5
    // COND:
    // §NR_BAN_FRA >= #17
    // THEN:
    // *SET §DUMMYN1 = #12
    // #6
    // COND:
    // §NR_BAN_FRA >= #20
    // THEN:
    // *SET §DUMMYN1 = #14
    // #7
    // COND:
    // §NR_BAN_FRA >= #23
    // THEN:
    // *SET §DUMMYN1 = #16
    // #8
    // COND:
    // §NR_BAN_FRA >= #26
    // THEN:
    // *SET §DUMMYN1 = #18
    // #9
    // COND:
    // §NR_BAN_FRA >= #29
    // THEN:
    // *SET §DUMMYN1 = #20
    // #10
    // COND:
    // §NR_BAN_FRA >= #32
    // THEN:
    // *SET §DUMMYN1 = #22
    // #11
    // THEN:
    // *SET *CF = [ §DUMMYN1 + #2]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    //#2
    vars.setDUMMYN1(6);
    //#3
    if (vars.get('§NR_BAN_FRA') >= 11) {
        vars.setDUMMYN1(8);
    }
    //#4
    if (vars.get('§NR_BAN_FRA') >= 14) {
        vars.setDUMMYN1(10);
    }
    //#5
    if (vars.get('§NR_BAN_FRA') >= 17) {
        vars.setDUMMYN1(12);
    }
    //#6
    if (vars.get('§NR_BAN_FRA') >= 20) {
        vars.setDUMMYN1(14);
    }
    //#7
    if (vars.get('§NR_BAN_FRA') >= 23) {
        vars.setDUMMYN1(16);
    }
    //#8
    if (vars.get('§NR_BAN_FRA') >= 26) {
        vars.setDUMMYN1(18);
    }
    //#9
    if (vars.get('§NR_BAN_FRA') >= 29) {
        vars.setDUMMYN1(20);
    }
    //#10
    if (vars.get('§NR_BAN_FRA') >= 32) {
        vars.setDUMMYN1(22);
    }
    //#11
    vars.setCF(vars.get('§DUMMYN1') + 2);
    // GENERATED

    return vars.output;
};
