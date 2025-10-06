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

export const REG0002197: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002197
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §PER_3_L_TET_1 > #0
    // THEN:
    // *SET *CF = #1
    // *SET *CON-A = §VR_PROF_TET
    // *SET *CON-B = §PER_3_L_TET_1
    // #3
    // COND:
    // §PER_1_L_TET_3 > #0
    // THEN:
    // *SET *CF = #1
    // *SET *CON-A = §VR_PROF_TET
    // *SET *CON-B = §PER_1_L_TET_3
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§PER_3_L_TET_1') > 0) {
        vars.setCF(1);
        vars.setCON_A(vars.get('§VR_PROF_TET'));
        vars.setCON_B(vars.get('§PER_3_L_TET_1'));
    }
    
    //#3
    if (vars.get('§PER_1_L_TET_3') > 0) {
        vars.setCF(1);
        vars.setCON_A(vars.get('§VR_PROF_TET'));
        vars.setCON_B(vars.get('§PER_1_L_TET_3'));
    }
    // GENERATED

    return vars.output;
};
