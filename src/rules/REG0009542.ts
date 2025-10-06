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

export const REG0009542: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009542
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = §VR_SLI_CAR
    // #2
    // COND:
    // *CON-A = 'P072'
    // THEN:
    // *SET *CON-A = 'P187'
    // #3
    // COND:
    // *CON-A = 'P055'
    // THEN:
    // *SET *CON-A = 'P187'
    // #4
    // THEN:
    // *SET *CON-A = 'P187'
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('§VR_SLI_CAR'));
    
    //#2
    if (vars.get('§CON_A') == 'P072') {
        vars.setCON_A('P187');
    }
    
    //#3
    if (vars.get('§CON_A') == 'P055') {
        vars.setCON_A('P187');
    }
    
    //#4
    vars.setCON_A('P187');
    // GENERATED

    return vars.output;
};
