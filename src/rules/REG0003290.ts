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

export const REG0003290: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003290
    // REQUEST:
    // """
    // #1
    // COND:
    // ( §LARG_M1 > #0 ) OR ( §LARG_M2 > #0 ) OR ( §LARG_M3 > #0 )
    // ELSE:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    if ((vars.get('§LARG_M1') > 0) || (vars.get('§LARG_M2') > 0) || (vars.get('§LARG_M3') > 0)) {
    } else {
        vars.setLG("");
    }
    // GENERATED

    return vars.output;
};
