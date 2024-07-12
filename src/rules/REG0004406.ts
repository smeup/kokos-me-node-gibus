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

export const REG0004406: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004406
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET §DUMMYN1= [§L_PORTANTE1 + §L_PORTANTE2 + §L_PORTANTE3 ]
    // #2
    // THEN:
    // *SET *CF= [§DUMMYN1/#100 ]
    // *SET *CON-A='P072'
    // #3
    // COND:
    // (§VERN_1_COM='0055') OR ( §VERN_1_COM = '0053' ) OR §VR_ABB = '01' OR §VR_ABB = '02'
    // THEN:
    // *SET *CON-A='P055'
    // """
    // RESPONSE:
    //#1
    vars.setDUMMYN1(vars.get('§L_PORTANTE1') + vars.get('§L_PORTANTE2') + vars.get('§L_PORTANTE3'));
    
    //#2
    vars.setCF(vars.get('§DUMMYN1') / 100);
    vars.setCON_A('P072');
    
    //#3
    if ((vars.get('§VERN_1_COM') == '0055') || (vars.get('§VERN_1_COM') == '0053') || vars.get('§VR_ABB') == '01' || vars.get('§VR_ABB') == '02') {
        vars.setCON_A('P055');
    }
    // GENERATED

    return vars.output;
};
