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

export const REG0011520: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011520
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-B = #300
    // #2
    // COND:
    // §NR_PLU_T01 > #0
    // THEN:
    // *SET *CF = §NR_PLU_T01
    // #3
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // #4
    // COND:
    // §VR_ABB = '01'
    // THEN:
    // *SET *CON-A = '0055'
    // #5
    // COND:
    // §VR_ABB = '02'
    // THEN:
    // *SET *CON-A = '0053'
    // #6
    // COND:
    // §VR_ABB = '03'
    // THEN:
    // *SET *CON-A = '0069'
    // #7
    // COND:
    // §VR_ABB = '04'
    // THEN:
    // *SET *CON-A = '0073'
    // #8
    // COND:
    // §VR_ABB = '05'
    // THEN:
    // *SET *CON-A = '0073'
    // #9
    // COND:
    // §VR_ABB = '06'
    // THEN:
    // *SET *CON-A = '0069'
    // #10
    // COND:
    // §VR_ABB = '07'
    // THEN:
    // *SET *CON-A = '0229'
    // #11
    // COND:
    // §VR_ABB = '08'
    // THEN:
    // *SET *CON-A = '0073'
    // #12
    // COND:
    // §VR_ABB = '09'
    // THEN:
    // *SET *CON-A = '0073'
    // #13
    // COND:
    // §VR_ABB = '10'
    // THEN:
    // *SET *CON-A = '0073'
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_B(300);
    
    //#2
    if (vars.get('§NR_PLU_T01') > 0) {
        vars.setCF(vars.get('§NR_PLU_T01'));
    }
    
    //#3
    vars.setCON_A(vars.get('§VERN_1_COM'));
    
    //#4
    if (vars.get('§VR_ABB') == '01') {
        vars.setCON_A('0055');
    }
    
    //#5
    if (vars.get('§VR_ABB') == '02') {
        vars.setCON_A('0053');
    }
    
    //#6
    if (vars.get('§VR_ABB') == '03') {
        vars.setCON_A('0069');
    }
    
    //#7
    if (vars.get('§VR_ABB') == '04') {
        vars.setCON_A('0073');
    }
    
    //#8
    if (vars.get('§VR_ABB') == '05') {
        vars.setCON_A('0073');
    }
    
    //#9
    if (vars.get('§VR_ABB') == '06') {
        vars.setCON_A('0069');
    }
    
    //#10
    if (vars.get('§VR_ABB') == '07') {
        vars.setCON_A('0229');
    }
    
    //#11
    if (vars.get('§VR_ABB') == '08') {
        vars.setCON_A('0073');
    }
    
    //#12
    if (vars.get('§VR_ABB') == '09') {
        vars.setCON_A('0073');
    }
    
    //#13
    if (vars.get('§VR_ABB') == '10') {
        vars.setCON_A('0073');
    }
    // GENERATED

    return vars.output;
};
