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

export const REG0009976: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009976
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = '0192'
    // #2
    // COND:
    // §VERN_1_COM = '0055' OR §VR_ABB = '01'
    // THEN:
    // *SET *CON-A = '0194'
    // #3
    // COND:
    // §VR_ABB = '02' OR §VR_ABB = '04' OR §VR_ABB = '06'
    // THEN:
    // *SET *CON-A = '0193'
    // """
    // RESPONSE:
    //#1
    vars.setCON_A('0192');
    
    //#2
    if (vars.get('§VERN_1_COM') == '0055' || vars.get('§VR_ABB') == '01') {
        vars.setCON_A('0194');
    }
    
    //#3
    if (vars.get('§VR_ABB') == '02' || vars.get('§VR_ABB') == '04' || vars.get('§VR_ABB') == '06') {
        vars.setCON_A('0193');
    }
    // GENERATED

    return vars.output;
};
