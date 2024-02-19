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

export const REG0003261: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003261
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A='0192'
    // #2
    // COND:
    // (§VERN_1_COM='0053') OR (§VERN_1_COM='0073') OR (§VERN_1_COM='0069')
    // THEN:
    // *SET *CON-A='0193'
    // #3
    // COND:
    // §VERN_1_COM='0055'
    // THEN:
    // *SET *CON-A='0194'
    // """
    // RESPONSE:
    //#1
    vars.setCON_A('0192');
    
    //#2
    if (vars.get('§VERN_1_COM') == '0053' || vars.get('§VERN_1_COM') == '0073' || vars.get('§VERN_1_COM') == '0069') {
        vars.setCON_A('0193');
    }
    
    //#3
    if (vars.get('§VERN_1_COM') == '0055') {
        vars.setCON_A('0194');
    }
    // GENERATED

    return vars.output;
};
