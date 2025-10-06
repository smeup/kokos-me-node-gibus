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

export const REG0002347: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002347
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §TRA_TET_ANT2 > #0
    // THEN:
    // *SET *CF = #1
    // *SET *CON-A = §VERN_1_COM
    // *SET *CON-B = §TRA_TET_ANT2
    // #3
    // COND:
    // §VR_TRA_TET <> ''
    // THEN:
    // *SET *CON-A = §VR_TRA_TET
    // #4
    // COND:
    // *CON-A = '' AND §VR_PROF_TET <> ''
    // THEN:
    // *SET *CON-A = §VR_PROF_TET
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    //#2
    if (vars.get('§TRA_TET_ANT2') > 0) {
        vars.setCF(1);
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B(vars.get('§TRA_TET_ANT2'));
    }
    //#3
    if (vars.get('§VR_TRA_TET') != '') {
        vars.setCON_A(vars.get('§VR_TRA_TET'));
    }
    //#4
    if (vars.get('§CON_A') == '' && vars.get('§VR_PROF_TET') != '') {
        vars.setCON_A(vars.get('§VR_PROF_TET'));
    }
    // GENERATED

    return vars.output;
};
