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

export const REG0002359: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002359
    // REQUEST:
    // """
    // #1
    // COND:
    // §TI_TRA_TET_INC = '60X150'
    // THEN:
    // *SET *CON-A = *COL
    // *SET *CON-B = *LUNG
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§TI_TRA_TET_INC') == '60X150') {
        vars.setCON_A(vars.get('*COL'));
        vars.setCON_B(vars.get('*LUNG'));
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
