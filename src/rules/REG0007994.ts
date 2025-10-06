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

export const REG0007994: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0007994
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §L_PRO_TRA3 > #0
    // THEN:
    // *SET *CF = #1
    // *SET *CON-A = §VR_LAM_ABB
    // *SET *CON-B = §L_PRO_TRA3
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§L_PRO_TRA3') > 0) {
        vars.setCF(1);
        vars.setCON_A(vars.get('§VR_LAM_ABB'));
        vars.setCON_B(vars.get('§L_PRO_TRA3'));
    }
    // GENERATED

    return vars.output;
};
