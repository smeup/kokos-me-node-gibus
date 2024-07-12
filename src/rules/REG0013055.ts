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

export const REG0013055: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0013055
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = §VR_LAME
    // #2
    // COND:
    // §FS_FAM2_VARIA = §SI AND §AUM_SPO_T01 < #13
    // THEN:
    // *SET *CF = #2
    // #3
    // COND:
    // §FS_FAM2_TWIST = §SI AND §AUM_SPO_T01 < #9
    // THEN:
    // *SET *CF = #2
    // #4
    // THEN:
    // *SET *CON-A = '0073'
    // #5
    // COND:
    // §VR_ABB_LAM = '01'
    // THEN:
    // *SET *CON-A = '0055'
    // #6
    // COND:
    // §VR_ABB_LAM = '02'
    // THEN:
    // *SET *CON-A = '0053'
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VR_LAME'));
    
    //#2
    if (vars.get('§FS_FAM2_VARIA') == vars.get('§SI') && vars.get('§AUM_SPO_T01') < 13) {
        vars.setCF(2);
    }
    
    //#3
    if (vars.get('§FS_FAM2_TWIST') == vars.get('§SI') && vars.get('§AUM_SPO_T01') < 9) {
        vars.setCF(2);
    }
    
    //#4
    vars.setCON_A('0073');
    
    //#5
    if (vars.get('§VR_ABB_LAM') == '01') {
        vars.setCON_A('0055');
    }
    
    //#6
    if (vars.get('§VR_ABB_LAM') == '02') {
        vars.setCON_A('0053');
    }
    // GENERATED

    return vars.output;
};
