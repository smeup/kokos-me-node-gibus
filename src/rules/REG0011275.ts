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

export const REG0011275: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011275
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_VET_SCORR = §SI AND §FS_APERTURA_CEN = §SI AND §SPESS_VETRO_MM = '10'
    // THEN:
    // *SET *CF = #1
    // *SET *CON-A = 'P000'
    // *SET *CON-B = '315'
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if ((vars.get('§FS_VET_SCORR') == vars.get('§SI')) && (vars.get('§FS_APERTURA_CEN') == vars.get('§SI')) && (vars.get('§SPESS_VETRO_MM') == '10')) {
        vars.setCF(1);
        vars.setCON_A('P000');
        vars.setCON_B('315');
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
