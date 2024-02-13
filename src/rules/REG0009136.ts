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

export const REG0009136: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009136
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = §VR_PLA_LAM
    // #2
    // COND:
    // *CON-A = 'P072'
    // THEN:
    // *SET *CON-A = 'P073'
    // #3
    // COND:
    // §FS_LAM_BIO = §SI AND §FS_RIS_LAM = §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('§VR_PLA_LAM'));
    
    //#2
    if (vars.getCON_A() == 'P072') {
        vars.setCON_A('P073');
    }
    
    //#3
    if (vars.get('§FS_LAM_BIO') == vars.get('§SI') && vars.get('§FS_RIS_LAM') == vars.get('§SI')) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
