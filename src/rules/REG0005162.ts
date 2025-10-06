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

export const REG0005162: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005162
    // REQUEST:
    // """
    // #1
    // COND:
    // §PC_LU_DX_AG1_C1 > #0
    // ELSE:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§PC_LU_DX_AG1_C1') > 0) {
    } else {
        vars.setLG("");
    }
    // GENERATED

    return vars.output;
};
