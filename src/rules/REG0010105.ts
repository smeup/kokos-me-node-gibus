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

export const REG0010105: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010105
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §VR_ABB = '01'
    // THEN:
    // *SET *CF = [§L_TET_TS / #100]
    // #3
    // COND:
    // §VR_ABB = '02'
    // THEN:
    // *SET *CF = [§L_TET_TS / #100]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§VR_ABB') == '01') {
        vars.setCF(vars.get('§L_TET_TS') / 100);
    }
    
    //#3
    if (vars.get('§VR_ABB') == '02') {
        vars.setCF(vars.get('§L_TET_TS') / 100);
    }
    // GENERATED

    return vars.output;
};
