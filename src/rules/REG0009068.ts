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

export const REG0009068: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009068
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET §DUMMYN1 = #0
    // *SET §DUMMYN2 = #0
    // *SET §DUMMYN3 = #0
    // *SET §DUMMYN4 = #0
    // #2
    // COND:
    // §PC_LU_SX_AG1_C1 > #0
    // THEN:
    // *SET §DUMMYN1 = #1
    // #3
    // COND:
    // §PC_LU_SX_AG2_C1 > #0
    // THEN:
    // *SET §DUMMYN2 = #1
    // #4
    // COND:
    // §PC_LU_SX_MOD1 > #0
    // THEN:
    // *SET §DUMMYN3 = #1
    // #5
    // THEN:
    // *SET *CF = [§DUMMYN1 + §DUMMYN2 + §DUMMYN3]
    // """
    // RESPONSE:
    //#1
    vars.setDUMMYN1(0);
    vars.setDUMMYN2(0);
    vars.setDUMMYN3(0);
    vars.setDUMMYN4(0);
    //#2
    if (vars.get('§PC_LU_SX_AG1_C1') > 0) {
        vars.setDUMMYN1(1);
    }
    //#3
    if (vars.get('§PC_LU_SX_AG2_C1') > 0) {
        vars.setDUMMYN2(1);
    }
    //#4
    if (vars.get('§PC_LU_SX_MOD1') > 0) {
        vars.setDUMMYN3(1);
    }
    //#5
    vars.setCF(vars.get('§DUMMYN1') + vars.get('§DUMMYN2') + vars.get('§DUMMYN3'));
    // GENERATED

    return vars.output;
};
