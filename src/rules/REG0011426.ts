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

export const REG0011426: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011426
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // THEN:
    // *SET §DUMMYN1 = [ §L_FIX_TIM_A + §L_FIX_TIM_B + §L_FIX_TIM_C + §L_FIX_TIM_D ]
    // #3
    // COND:
    // §TIM_GRAFFET = §SI
    // THEN:
    // *SET *CF = [ §DUMMYN1 / #100 ]
    // #4
    // THEN:
    // *SET *CON-A = 'P072'
    // #5
    // COND:
    // §VR_ABB = '01'
    // THEN:
    // *SET *CON-A = 'P055'
    // #6
    // COND:
    // §VR_ABB = '02'
    // THEN:
    // *SET *CON-A = 'P053'
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    vars.setDUMMYN1(vars.get('§L_FIX_TIM_A') + vars.get('§L_FIX_TIM_B') + vars.get('§L_FIX_TIM_C') + vars.get('§L_FIX_TIM_D'));
    
    //#3
    if (vars.get('§TIM_GRAFFET') == vars.get('§SI')) {
        vars.setCF(vars.get('§DUMMYN1') / 100);
    }
    
    //#4
    vars.setCON_A('P072');
    
    //#5
    if (vars.get('§VR_ABB') == '01') {
        vars.setCON_A('P055');
    }
    
    //#6
    if (vars.get('§VR_ABB') == '02') {
        vars.setCON_A('P053');
    }
    
    // GENERATED

    return vars.output;
};
