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

export const REG0005831: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005831
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §H_GAMBA <= #240
    // THEN:
    // *SET *CON-B = #240
    // #3
    // COND:
    // §H_GAMBA > #240
    // THEN:
    // *SET *CON-B = §H_GAMBA
    // #4
    // COND:
    // §FS_FAM2_WALL = §SI
    // THEN:
    // *SET *CF = #1
    // #5
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // #6
    // COND:
    // §VR_ABB = '01'
    // THEN:
    // *SET *CON-A = '0055'
    // #7
    // COND:
    // §VR_ABB = '02'
    // THEN:
    // *SET *CON-A = '0053'
    // #8
    // COND:
    // §VR_ABB = '03'
    // THEN:
    // *SET *CON-A = '0069'
    // #9
    // COND:
    // §VR_ABB = '04'
    // THEN:
    // *SET *CON-A = '0073'
    // #10
    // COND:
    // §VR_ABB = '05'
    // THEN:
    // *SET *CON-A = '0073'
    // #11
    // COND:
    // §VR_ABB = '06'
    // THEN:
    // *SET *CON-A = '0069'
    // #12
    // COND:
    // §VR_ABB = '07'
    // THEN:
    // *SET *CON-A = '0229'
    // #13
    // COND:
    // §VR_ABB = '08'
    // THEN:
    // *SET *CON-A = '0073'
    // #14
    // COND:
    // §VR_ABB = '09'
    // THEN:
    // *SET *CON-A = '0073'
    // #15
    // COND:
    // §VR_ABB = '10'
    // THEN:
    // *SET *CON-A = '0073'
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§H_GAMBA') <= 240) {
        vars.setCON_B(240);
    }
    
    //#3
    if (vars.get('§H_GAMBA') > 240) {
        vars.setCON_B(vars.get('§H_GAMBA'));
    }
    
    //#4
    if (vars.get('§FS_FAM2_WALL') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#5
    vars.setCON_A(vars.get('§VERN_1_COM'));
    
    //#6
    if (vars.get('§VR_ABB') == '01') {
        vars.setCON_A('0055');
    }
    
    //#7
    if (vars.get('§VR_ABB') == '02') {
        vars.setCON_A('0053');
    }
    
    //#8
    if (vars.get('§VR_ABB') == '03') {
        vars.setCON_A('0069');
    }
    
    //#9
    if (vars.get('§VR_ABB') == '04') {
        vars.setCON_A('0073');
    }
    
    //#10
    if (vars.get('§VR_ABB') == '05') {
        vars.setCON_A('0073');
    }
    
    //#11
    if (vars.get('§VR_ABB') == '06') {
        vars.setCON_A('0069');
    }
    
    //#12
    if (vars.get('§VR_ABB') == '07') {
        vars.setCON_A('0229');
    }
    
    //#13
    if (vars.get('§VR_ABB') == '08') {
        vars.setCON_A('0073');
    }
    
    //#14
    if (vars.get('§VR_ABB') == '09') {
        vars.setCON_A('0073');
    }
    
    //#15
    if (vars.get('§VR_ABB') == '10') {
        vars.setCON_A('0073');
    }
    // GENERATED

    return vars.output;
};
