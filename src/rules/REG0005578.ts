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

export const REG0005578: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005578
    // REQUEST:
    // """
    // #1
    // COND:
    // §PER_1_L_TET_1 >  #0
    // THEN:
    // *SET *CON-A = §VR_PROF_TET
    // *SET *CON-B = [§PER_1_L_TET_1 - #7]
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§PER_1_L_TET_1') > 0) {
        vars.setCON_A(vars.get('§VR_PROF_TET'));
        vars.setCON_B(vars.get('§PER_1_L_TET_1') - 7);
    } else {
        vars.setLG('');
    }
    
    // GENERATED

    return vars.output;
};
