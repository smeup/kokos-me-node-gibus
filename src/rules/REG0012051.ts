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

export const REG0012051: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012051
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_ST_LAM = §SI AND §ST_TIPOLOGIA = 'ST'
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // *SET *CON-B = '00001'
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if ((vars.get('§FS_ST_LAM') == vars.get('§SI')) && (vars.get('§ST_TIPOLOGIA') == 'ST')) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B('00001');
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
