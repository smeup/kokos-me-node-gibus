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

export const REG0002061: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002061
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §TIM_POLIC = §SI
    // THEN:
    // *SET *LG = ''
    // #4
    // COND:
    // §FS_NO_PRO_TIM = §SI
    // THEN:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    vars.setCF(1);
    
    //#3
    if (vars.get('§TIM_POLIC') == vars.get('§SI')) {
        vars.setLG('');
    }
    
    //#4
    if (vars.get('§FS_NO_PRO_TIM') == vars.get('§SI')) {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
