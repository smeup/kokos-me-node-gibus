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

export const REG0009276: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009276
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #2
    // *SET §DUMMYN1 = #0
    // *SET §DUMMYN2 = #0
    // #2
    // THEN:
    // *SET §DUMMYN1 = [(§LARG - #40) / #100]
    // #3
    // COND:
    // §DUMMYN1 > #1
    // THEN:
    // *SET §DUMMYN2 = #2
    // #4
    // COND:
    // §DUMMYN1 > #2
    // THEN:
    // *SET §DUMMYN2 = #3
    // #5
    // COND:
    // §DUMMYN1 > #3
    // THEN:
    // *SET §DUMMYN2 = #4
    // #6
    // COND:
    // §DUMMYN1 > #4
    // THEN:
    // *SET §DUMMYN2 = #5
    // #7
    // COND:
    // §DUMMYN1 > #5
    // THEN:
    // *SET §DUMMYN2 = #6
    // #8
    // COND:
    // §DUMMYN1 > #6
    // THEN:
    // *SET §DUMMYN2 = #7
    // #9
    // COND:
    // §DUMMYN2 > #0
    // THEN:
    // *SET *CF = [§DUMMYN2 + #1]
    // """
    // RESPONSE:
    
    //#1
    vars.setCF(2);
    vars.setDUMMYN1(0);
    vars.setDUMMYN2(0);
    //#2
    vars.setDUMMYN1((vars.get('§LARG') - 40) / 100);
    //#3
    if (vars.get('§DUMMYN1') > 1) {
        vars.setDUMMYN2(2);
    }
    //#4
    if (vars.get('§DUMMYN1') > 2) {
        vars.setDUMMYN2(3);
    }
    //#5
    if (vars.get('§DUMMYN1') > 3) {
        vars.setDUMMYN2(4);
    }
    //#6
    if (vars.get('§DUMMYN1') > 4) {
        vars.setDUMMYN2(5);
    }
    //#7
    if (vars.get('§DUMMYN1') > 5) {
        vars.setDUMMYN2(6);
    }
    //#8
    if (vars.get('§DUMMYN1') > 6) {
        vars.setDUMMYN2(7);
    }
    //#9
    if (vars.get('§DUMMYN2') > 0) {
        vars.setCF(vars.get('§DUMMYN2') + 1);
    }
    // GENERATED

    return vars.output;
};
