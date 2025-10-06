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

export const REG0002717: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002717
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // #3
    // COND:
    // §L_FIX_TIM_B > #0
    // THEN:
    // *SET *CON-A = §VR_PRO_ALU
    // *SET *CON-B = §L_FIX_TIM_B
    // *SET *CF = #1
    // #4
    // COND:
    // §L_FIX_TIM_B > #600 AND §TIM_MOGIVA = §SI
    // THEN:
    // *SET *CON-B = [ §L_FIX_TIM_B / #2 ]
    // *SET *CF = #2
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#3
    if (vars.get('§L_FIX_TIM_B') > 0) {
        vars.setCON_A(vars.get('§VR_PRO_ALU'));
        vars.setCON_B(vars.get('§L_FIX_TIM_B'));
        vars.setCF(1);
    }
    
    //#4
    if (vars.get('§L_FIX_TIM_B') > 600 && vars.get('§TIM_MOGIVA') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§L_FIX_TIM_B') / 2);
        vars.setCF(2);
    }
    // GENERATED

    return vars.output;
};
