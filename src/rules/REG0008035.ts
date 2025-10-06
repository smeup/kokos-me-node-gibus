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

export const REG0008035: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008035
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = *COL
    // *SET *CON-B = *LUNG
    // *SET *CF = #0
    // #2
    // COND:
    // §TI_GAM_OPT = '02'
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §TI_GAM_OPT = '03'
    // THEN:
    // *SET *CF = #0
    // #4
    // COND:
    // §TI_GAM_OPT = '04'
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('*COL'));
    vars.setCON_B(vars.get('*LUNG'));
    vars.setCF(0);
    
    //#2
    if (vars.get('§TI_GAM_OPT') == '02') {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§TI_GAM_OPT') == '03') {
        vars.setCF(0);
    }
    
    //#4
    if (vars.get('§TI_GAM_OPT') == '04') {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
