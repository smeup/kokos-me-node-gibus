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

export const REG0013054: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0013054
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = '0055'
    // #2
    // COND:
    // §FS_FAM2_VARIA = §SI AND §AUM_SPO_T01 > #12
    // THEN:
    // *SET *CF = #2
    // #3
    // COND:
    // §FS_FAM2_TWIST = §SI AND §AUM_SPO_T01 > #8
    // THEN:
    // *SET *CF = #2
    // #4
    // COND:
    // §VR_PLA_LAM = 'P053'
    // THEN:
    // *SET *CON-A = '0053'
    // #5
    // COND:
    // §VR_PLA_LAM = 'P073'
    // THEN:
    // *SET *CON-A = '0073'
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A('0055');
    
    //#2
    if (vars.get('§FS_FAM2_VARIA') == vars.get('§SI') && vars.get('§AUM_SPO_T01') > 12) {
        vars.setCF(2);
    }
    
    //#3
    if (vars.get('§FS_FAM2_TWIST') == vars.get('§SI') && vars.get('§AUM_SPO_T01') > 8) {
        vars.setCF(2);
    }
    
    //#4
    if (vars.get('§VR_PLA_LAM') == 'P053') {
        vars.setCON_A('0053');
    }
    
    //#5
    if (vars.get('§VR_PLA_LAM') == 'P073') {
        vars.setCON_A('0073');
    }
    // GENERATED

    return vars.output;
};
