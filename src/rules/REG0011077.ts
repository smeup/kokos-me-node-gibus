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

export const REG0011077: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011077
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYB1 = ''
    // *SET §DUMMYB2 = ''
    // #2
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // *SET *CON-B = §LU_SCO_ACC2
    // #3
    // COND:
    // §LU_SCO_ACC2 > #0
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #4
    // COND:
    // §VER_SCO_T01 = '2020'
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #5
    // COND:
    // §DUMMYB1 = §SI AND §DUMMYB2 = §SI
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYB1('');
    vars.setDUMMYB2('');
    //#2
    vars.setCON_A(vars.get('§VERN_1_COM'));
    vars.setCON_B(vars.get('§LU_SCO_ACC2'));
    //#3
    if (vars.get('§LU_SCO_ACC2') > 0) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    //#4
    if (vars.get('§VER_SCO_T01') == '2020') {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    //#5
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§DUMMYB2') == vars.get('§SI')) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
