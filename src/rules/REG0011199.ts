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

export const REG0011199: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011199
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // *SET *CON-B = #14,7
    // *SET *S2 = #14,7
    // #2
    // THEN:
    // *SET *CON-A = '0187'
    // #3
    // COND:
    // §VR_ABB = '01'
    // THEN:
    // *SET *CON-A = '0055'
    // #4
    // COND:
    // §VR_ABB = '02'
    // THEN:
    // *SET *CON-A = '0053'
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('§VERN_1_COM'));
    vars.setCON_B(14.7);
    vars.setS2(14.7);
    
    //#2
    vars.setCON_A('0187');
    
    //#3
    if (vars.get('§VR_ABB') == '01') {
        vars.setCON_A('0055');
    }
    
    //#4
    if (vars.get('§VR_ABB') == '02') {
        vars.setCON_A('0053');
    }
    // GENERATED

    return vars.output;
};
