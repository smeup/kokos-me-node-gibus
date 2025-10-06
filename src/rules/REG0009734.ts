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

export const REG0009734: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009734
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = §VERN_1_COM
    // *SET §DUMMYB1 = ''
    // *SET §DUMMYB2 = ''
    // #2
    // COND:
    // §LU_SCO_ACC1 > #0
    // THEN:
    // *SET *CON-B = §LU_SCO_ACC1
    // *SET *CF = #1
    // #3
    // COND:
    // §VER_SCO_T01 = '2020'
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VERN_1_COM'));
    vars.setDUMMYB1('');
    vars.setDUMMYB2('');
    
    //#2
    if (vars.get('§LU_SCO_ACC1') > 0) {
        vars.setCON_B(vars.get('§LU_SCO_ACC1'));
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§VER_SCO_T01') == '2020') {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
