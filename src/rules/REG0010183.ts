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

export const REG0010183: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010183
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_ROLLO = §SI
    // ELSE:
    // *SET *LG = ''
    // #2
    // THEN:
    // *SET *CON-A = '0072'
    // #3
    // COND:
    // §VR_ABB = '01'
    // THEN:
    // *SET *CON-A = '0055'
    // #4
    // COND:
    // §VERN_1_COM = '0053' OR §VERN_1_COM = '0065' OR §VERN_1_COM = '0208'
    // THEN:
    // *SET *CON-A = '0055'
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_ROLLO') == vars.get('§SI')) {
    } else {
        vars.setLG('');
    }
    
    //#2
    vars.setCON_A('0072');
    
    //#3
    if (vars.get('§VR_ABB') == '01') {
        vars.setCON_A('0055');
    }
    
    //#4
    if (vars.get('§VERN_1_COM') == '0053' || vars.get('§VERN_1_COM') == '0065' || vars.get('§VERN_1_COM') == '0208') {
        vars.setCON_A('0055');
    }
    // GENERATED

    return vars.output;
};
