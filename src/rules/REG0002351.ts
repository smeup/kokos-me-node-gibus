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

export const REG0002351: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002351
    // REQUEST:
    // """
    // #1
    // COND:
    // §TRA_TET_POS3 > #0
    // THEN:
    // *SET *CON-A = §VR_TRA_TET
    // *SET *CON-B = §TRA_TET_POS3
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§TRA_TET_POS3') > 0) {
        vars.setCON_A(vars.get('§VR_TRA_TET'));
        vars.setCON_B(vars.get('§TRA_TET_POS3'));
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
