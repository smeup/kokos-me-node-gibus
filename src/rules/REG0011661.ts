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

export const REG0011661: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011661
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = *COL
    // *SET *CON-B = *LUNG
    // *SET *S2 = *LUNG
    // #2
    // COND:
    // §TI_STRIP = '02'
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('*COL'));
    vars.setCON_B(vars.get('*LUNG'));
    vars.setS2(vars.get('*LUNG'));
    
    //#2
    if (vars.get('§TI_STRIP') == '02') {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
