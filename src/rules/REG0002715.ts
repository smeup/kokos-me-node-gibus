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

export const REG0002715: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002715
    // REQUEST:
    // """
    // #1
    // COND:
    // §L_FIX_TIM_A1 > #0
    // THEN:
    // *SET *CON-A = §VR_PRO_ALU
    // *SET *CON-B = §L_FIX_TIM_A1
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§L_FIX_TIM_A1') > 0) {
        vars.setCON_A(vars.get('§VR_PRO_ALU'));
        vars.setCON_B(vars.get('§L_FIX_TIM_A1'));
    } else {
        vars.setLG('');
    }
    
    // GENERATED

    return vars.output;
};
