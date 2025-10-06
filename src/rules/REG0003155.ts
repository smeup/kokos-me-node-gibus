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

export const REG0003155: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003155
    // REQUEST:
    // """
    // #1
    // COND:
    // §L_ASTA >#0
    // THEN:
    // *SET *CON-A=§VERN_ASTA
    // *SET *CON-B=§L_ASTA
    // """
    // RESPONSE:
    //#1
    if (vars.get('§L_ASTA') > 0) {
        vars.setCON_A(vars.get('§VERN_ASTA'));
        vars.setCON_B(vars.get('§L_ASTA'));
    }
    // GENERATED

    return vars.output;
};
