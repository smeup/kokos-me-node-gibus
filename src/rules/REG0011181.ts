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

export const REG0011181: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011181
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_PR_CH_SPAZI = §SI
    // THEN:
    // *SET *CF = §QPR_CH_SPAZI
    // *SET *CON-A = §VERN_1_COM
    // *SET *CON-B = #600
    // ELSE:
    // *SET *LG = ''
    // #2
    // THEN:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_PR_CH_SPAZI') == vars.get('§SI')) {
        vars.setCF(vars.get('§QPR_CH_SPAZI'));
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B(600);
    } else {
        vars.setLG('');
    }
    
    //#2
    vars.setLG('');
    // GENERATED

    return vars.output;
};
