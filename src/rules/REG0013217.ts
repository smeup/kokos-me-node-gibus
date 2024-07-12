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

export const REG0013217: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0013217
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_VET_SCORR = §SI AND §FS_PR_CH_SPAZI = §SI AND §QPR_CH_SPAZI > #0
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // *SET *CON-B = #600
    // *SET *CF = §QPR_CH_SPAZI
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_VET_SCORR') == vars.get('§SI') && vars.get('§FS_PR_CH_SPAZI') == vars.get('§SI') && vars.get('§QPR_CH_SPAZI') > 0) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B(600);
        vars.setCF(vars.get('§QPR_CH_SPAZI'));
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
