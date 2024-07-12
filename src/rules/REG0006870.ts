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

export const REG0006870: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006870
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_DIDUE = §SI
    // THEN:
    // *SET *CF = [§L_GUARN_CASS / #100]
    // #3
    // THEN:
    // *SET *CON-A = 'P072'
    // #4
    // COND:
    // §VR_ABB = '01'
    // THEN:
    // *SET *CON-A = 'P055'
    // #5
    // COND:
    // §VERN_1_COM = '0065' OR §VERN_1_COM = '0208' OR §VERN_1_COM = '0053' OR §VERN_1_COM = '0266'
    // THEN:
    // *SET *CON-A = 'P055'
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_DIDUE') == vars.get('§SI')) {
        vars.setCF(vars.get('§L_GUARN_CASS') / 100);
    }
    
    //#3
    vars.setCON_A('P072');
    
    //#4
    if (vars.get('§VR_ABB') == '01') {
        vars.setCON_A('P055');
    }
    
    //#5
    if (vars.get('§VERN_1_COM') == '0065' || vars.get('§VERN_1_COM') == '0208' || vars.get('§VERN_1_COM') == '0053' || vars.get('§VERN_1_COM') == '0266') {
        vars.setCON_A('P055');
    }
    // GENERATED

    return vars.output;
};
