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

export const REG0001888: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001888
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §PER_2_L_TET_1 > #0
    // THEN:
    // *SET *CF = #1
    // *SET *CON-A = §VR_PROF_TET
    // *SET *CON-B = §PER_2_L_TET_1
    // #3
    // COND:
    // §PER_1_L_TET_2 > #0
    // THEN:
    // *SET *CF = #1
    // *SET *CON-A = §VR_PROF_TET
    // *SET *CON-B = §PER_1_L_TET_2
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§PER_2_L_TET_1') > 0) {
        vars.setCF(1);
        vars.setCON_A(vars.get('§VR_PROF_TET'));
        vars.setCON_B(vars.get('§PER_2_L_TET_1'));
    }
    
    //#3
    if (vars.get('§PER_1_L_TET_2') > 0) {
        vars.setCF(1);
        vars.setCON_A(vars.get('§VR_PROF_TET'));
        vars.setCON_B(vars.get('§PER_1_L_TET_2'));
    }
    // GENERATED

    return vars.output;
};
