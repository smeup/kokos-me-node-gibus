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

export const REG0002408: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002408
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_RUL_78_LIS = §SI AND §L_PER_CAL = #25
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §FS_SEGNO = §SI AND §FS_LED_FRO = §SI
    // THEN:
    // *SET *CF = #0
    // #4
    // COND:
    // §NR_DIV_TEN = #2
    // THEN:
    // *SET *S1 = 'MG01'
    // #5
    // COND:
    // §FS_AL_LED_T01 = §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_RUL_78_LIS') == vars.get('§SI') && vars.get('§L_PER_CAL') == 25) {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§FS_SEGNO') == vars.get('§SI') && vars.get('§FS_LED_FRO') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#4
    if (vars.get('§NR_DIV_TEN') == 2) {
        vars.setS1('MG01');
    }
    
    //#5
    if (vars.get('§FS_AL_LED_T01') == vars.get('§SI')) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
