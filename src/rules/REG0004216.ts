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

export const REG0004216: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004216
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = '0072'
    // #2
    // COND:
    // §VR_ABB = '01'
    // THEN:
    // *SET *CON-A = '0055'
    // #3
    // COND:
    // §FS_COM_SX = §SI
    // ELSE:
    // *SET *LG = ''
    // #4
    // COND:
    // §VERN_1_COM = '0053' OR §VERN_1_COM = '0065' OR §VERN_1_COM = '0208'
    // THEN:
    // *SET *CON-A = '0055'
    // """
    // RESPONSE:
    //#1
    vars.setCON_A('0072');
    
    //#2
    if (vars.get('§VR_ABB') == '01') {
        vars.setCON_A('0055');
    }
    
    //#3
    if (vars.get('§FS_COM_SX') == vars.get('§SI')) {
    } else {
        vars.setLG('');
    }
    
    //#4
    if (vars.get('§VERN_1_COM') == '0053' || vars.get('§VERN_1_COM') == '0065' || vars.get('§VERN_1_COM') == '0208') {
        vars.setCON_A('0055');
    }
    // GENERATED

    return vars.output;
};
