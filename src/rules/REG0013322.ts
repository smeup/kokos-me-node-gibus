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

export const REG0013322: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0013322
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §TI_ALI_T10 = '16'
    // THEN:
    // *SET *CF = §Q_AL_LED_RGB
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§TI_ALI_T10') == '16') {
        vars.setCF(vars.get('§Q_AL_LED_RGB'));
    }
    // GENERATED

    return vars.output;
};
