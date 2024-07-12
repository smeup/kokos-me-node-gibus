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

export const REG0002545: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002545
    // REQUEST:
    // """
    // #1
    // COND:
    // §VERN_1_COM = '0055' OR §VERN_1_COM  = '0053' OR §VERN_1_COM  = '0065'
    // THEN:
    // *SET *CON-A = 'P055'
    // ELSE:
    // *SET *CON-A = 'P072'
    // """
    // RESPONSE:
    //#1
    if (vars.get('§VERN_1_COM') == '0055' || vars.get('§VERN_1_COM') == '0053' || vars.get('§VERN_1_COM') == '0065') {
        vars.setCON_A('P055');
    } else {
        vars.setCON_A('P072');
    }
    // GENERATED

    return vars.output;
};
