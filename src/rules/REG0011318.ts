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

export const REG0011318: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011318
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §TI_RUL_TS = '07' AND §FS_FAM2_CLI_CAB = §SI AND §VER_CAL_T01 = '2020'
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §TI_RUL_TS = '07' AND §VER_CAL_T01 = '2020BG'
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§TI_RUL_TS') == '07' && vars.get('§FS_FAM2_CLI_CAB') == vars.get('§SI') && vars.get('§VER_CAL_T01') == '2020') {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§TI_RUL_TS') == '07' && vars.get('§VER_CAL_T01') == '2020BG') {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
