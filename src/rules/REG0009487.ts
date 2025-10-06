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

export const REG0009487: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009487
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CM = §COD_TES_FAS_PVC
    // #2
    // COND:
    // §COD_TES_FAS_PVC <> ''
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §CON_FAS_TEL_PVC > #0
    // THEN:
    // *SET *CF = §CON_FAS_TEL_PVC
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCM(vars.get('§COD_TES_FAS_PVC'));
    
    //#2
    if (vars.get('§COD_TES_FAS_PVC') != '') {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§CON_FAS_TEL_PVC') > 0) {
        vars.setCF(vars.get('§CON_FAS_TEL_PVC'));
    }
    // GENERATED

    return vars.output;
};
