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

export const REG0000629: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000629
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CM = §TESS_HID
    // *SET *CF = §CONSUMO_TELO
    // #2
    // COND:
    // §CON_TEL_EFF > #0
    // THEN:
    // *SET *CF = §CON_TEL_EFF
    // """
    // RESPONSE:
    //#1
    vars.setCM(vars.get('§TESS_HID'));
    vars.setCF(vars.get('§CONSUMO_TELO'));
    
    //#2
    if (vars.get('§CON_TEL_EFF') > 0) {
        vars.setCF(vars.get('§CON_TEL_EFF'));
    }
    // GENERATED

    return vars.output;
};
