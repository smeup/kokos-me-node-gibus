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

export const REG0005610: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005610
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A='0072'
    // #2
    // COND:
    // §VERN_1_COM='0055' OR §VR_ABB = '01'
    // THEN:
    // *SET *CON-A='0055'
    // #3
    // COND:
    // §VERN_1_COM='0053' OR §VR_ABB = '02'
    // THEN:
    // *SET *CON-A='0053'
    // #4
    // COND:
    // §VERN_1_COM='0065' OR §VR_ABB = '03'
    // THEN:
    // *SET *CON-A='0065'
    // """
    // RESPONSE:
    //#1
    vars.setCON_A('0072');
    
    //#2
    if (vars.get('§VERN_1_COM') == '0055' || vars.get('§VR_ABB') == '01') {
        vars.setCON_A('0055');
    }
    
    //#3
    if (vars.get('§VERN_1_COM') == '0053' || vars.get('§VR_ABB') == '02') {
        vars.setCON_A('0053');
    }
    
    //#4
    if (vars.get('§VERN_1_COM') == '0065' || vars.get('§VR_ABB') == '03') {
        vars.setCON_A('0065');
    }
    
    // GENERATED

    return vars.output;
};
