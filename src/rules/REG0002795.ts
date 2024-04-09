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

export const REG0002795: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002795
    // REQUEST:
    // """
    // #1
    // COND:
    // §TI_FIX_TRA_TET = '02'
    // THEN:
    // *SET *CON-A = §VR_TRA_TET
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // §VER_STA_T01 = '2021'
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    if (vars.get('§TI_FIX_TRA_TET') == '02') {
        vars.setCON_A(vars.get('§VR_TRA_TET'));
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§VER_STA_T01') == '2021') {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
