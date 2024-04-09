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

export const REG0011263: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011263
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_FORGIATO = §SI
    // THEN:
    // *SET *CF = #1
    // #3
    // THEN:
    // *SET *CON-A = '0072'
    // #4
    // COND:
    // §VR_ABB = '01'
    // THEN:
    // *SET *CON-A = '0055'
    // #5
    // COND:
    // §VERN_1_COM = '0053' OR §VERN_1_COM = '0065' OR §VERN_1_COM = '0208'
    // THEN:
    // *SET *CON-A = '0055'
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_FORGIATO') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#3
    vars.setCON_A('0072');
    
    //#4
    if (vars.get('§VR_ABB') == '01') {
        vars.setCON_A('0055');
    }
    
    //#5
    if (vars.get('§VERN_1_COM') == '0053' || vars.get('§VERN_1_COM') == '0065' || vars.get('§VERN_1_COM') == '0208') {
        vars.setCON_A('0055');
    }
    // GENERATED

    return vars.output;
};
