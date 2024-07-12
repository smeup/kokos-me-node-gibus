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

export const REG0001070: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001070
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = §VERN_GUIDE
    // #2
    // COND:
    // §AUMENTO_ALTE > #0 AND §POS_AUMEN_ALTE = 'SX'
    // THEN:
    // *SET *CON-B = [§L_SU_GUI_ZIP + §AUMENTO_ALTE ]
    // *SET *CF = #1
    // #3
    // COND:
    // §AUMENTO_ALTE > #0 AND §POS_AUMEN_ALTE = 'DX'
    // THEN:
    // *SET *CON-B = §L_SU_GUI_ZIP
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VERN_GUIDE'));
    
    //#2
    if (vars.get('§AUMENTO_ALTE') > 0 && vars.get('§POS_AUMEN_ALTE') == 'SX') {
        vars.setCON_B(vars.get('§L_SU_GUI_ZIP') + vars.get('§AUMENTO_ALTE'));
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§AUMENTO_ALTE') > 0 && vars.get('§POS_AUMEN_ALTE') == 'DX') {
        vars.setCON_B(vars.get('§L_SU_GUI_ZIP'));
        vars.setCF(1);
    }
    
    // GENERATED

    return vars.output;
};
