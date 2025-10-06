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

export const REG0004011: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004011
    // REQUEST:
    // """
    // #1
    // COND:
    // (( §L_SPO_MON_POS1 > #0 ) OR ( §L_SBA_POS1 > #0 )) AND (H_POS_M1 > #0 )
    // ELSE:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    if ((vars.get('§L_SPO_MON_POS1') > 0 || vars.get('§L_SBA_POS1') > 0) && vars.get('H_POS_M1') > 0) {
    } else {
        vars.setLG("");
    }
    // GENERATED

    return vars.output;
};
