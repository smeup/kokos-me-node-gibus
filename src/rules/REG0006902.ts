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

export const REG0006902: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006902
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // §N_MODULI>=#1
    // THEN:
    // *SET *CF=[ §L_GUIDA/ #100 ]
    // *SET *CON-A='P072'
    // #3
    // COND:
    // §VERN_1_COM='0055' OR §VR_ABB = '01'
    // THEN:
    // *SET *CON-A='P055'
    // #4
    // COND:
    // §VERN_1_COM='0053' OR §VR_ABB = '02'
    // THEN:
    // *SET *CON-A='P053'
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§N_MODULI') >= 1) {
        vars.setCF(vars.get('§L_GUIDA') / 100);
        vars.setCON_A('P072');
    }
    
    //#3
    if (vars.get('§VERN_1_COM') == '0055' || vars.get('§VR_ABB') == '01') {
        vars.setCON_A('P055');
    }
    
    //#4
    if (vars.get('§VERN_1_COM') == '0053' || vars.get('§VR_ABB') == '02') {
        vars.setCON_A('P053');
    }
    // GENERATED

    return vars.output;
};
