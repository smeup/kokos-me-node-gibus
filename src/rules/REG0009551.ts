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

export const REG0009551: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009551
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = 'P073'
    // #2
    // COND:
    // §VR_ABB_LAM = '01'
    // THEN:
    // *SET *CON-A = 'P055'
    // #3
    // COND:
    // §VR_ABB_LAM = '02'
    // THEN:
    // *SET *CON-A = 'P053'
    // #4
    // COND:
    // §VR_PLA_LAM <> ''
    // THEN:
    // *SET *CON-A = §VR_PLA_LAM
    // #5
    // COND:
    // §FS_LAM_BIO_JOY = §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCON_A('P073');
    //#2
    if (vars.get('§VR_ABB_LAM') == '01') {
        vars.setCON_A('P055');
    }
    //#3
    if (vars.get('§VR_ABB_LAM') == '02') {
        vars.setCON_A('P053');
    }
    //#4
    if (vars.get('§VR_PLA_LAM') != '') {
        vars.setCON_A(vars.get('§VR_PLA_LAM'));
    }
    //#5
    if (vars.get('§FS_LAM_BIO_JOY') == vars.get('§SI')) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
