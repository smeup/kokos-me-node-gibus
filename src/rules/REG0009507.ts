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

export const REG0009507: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009507
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = [#39,7 / #100]
    // #2
    // THEN:
    // *SET *CON-A = 'P072'
    // #3
    // COND:
    // §VERN_1_COM = '0055' OR §VERN_1_COM = '0053' OR §VERN_1_COM = '0065' OR                                                      §VR_ABB = '01' OR §VR_ABB = '02' OR §VERN_1_COM = '0053'
    // THEN:
    // *SET *CON-A = 'P055'
    // """
    // RESPONSE:
    //#1
    vars.setCF(39.7 / 100);
    
    //#2
    vars.setCON_A('P072');
    
    //#3
    if (vars.get('§VERN_1_COM') == '0055' || vars.get('§VERN_1_COM') == '0053' || vars.get('§VERN_1_COM') == '0065' || vars.get('§VR_ABB') == '01' || vars.get('§VR_ABB') == '02' || vars.get('§VERN_1_COM') == '0053') {
        vars.setCON_A('P055');
    }
    // GENERATED

    return vars.output;
};
