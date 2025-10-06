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

export const REG0006664: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006664
    // REQUEST:
    // """
    // #1
    // COND:
    // §TAPPO_SX_O_DX='SX'
    // ELSE:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§TAPPO_SX_O_DX') == 'SX') {
    } else {
        vars.setLG("");
    }
    // GENERATED

    return vars.output;
};
