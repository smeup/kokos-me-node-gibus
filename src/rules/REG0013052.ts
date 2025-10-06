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

export const REG0013052: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0013052
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = §VR_LAME
    // *SET *CON-A = '0055'
    // #2
    // COND:
    // §FS_FAM2_JOY = §SI AND §AUM_SPO_T01 < #11
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §VR_PLA_LAM = 'P053'
    // THEN:
    // *SET *CON-A = '0053'
    // #4
    // COND:
    // §VR_PLA_LAM = 'P073'
    // THEN:
    // *SET *CON-A = '0073'
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VR_LAME'));
    vars.setCON_A('0055');
    //#2
    if (vars.get('§FS_FAM2_JOY') == vars.get('§SI') && vars.get('§AUM_SPO_T01') < 11) {
        vars.setCF(1);
    }
    //#3
    if (vars.get('§VR_PLA_LAM') == 'P053') {
        vars.setCON_A('0053');
    }
    //#4
    if (vars.get('§VR_PLA_LAM') == 'P073') {
        vars.setCON_A('0073');
    }
    // GENERATED

    return vars.output;
};
