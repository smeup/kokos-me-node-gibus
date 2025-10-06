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

export const REG0001615: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001615
    // REQUEST:
    // """
    // #1
    // COND:
    // §P_TRA2 > #0
    // THEN:
    // *SET *CON-A = '0051'
    // *SET *CON-B = §P_TRA2
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§P_TRA2') > 0) {
        vars.setCON_A('0051');
        vars.setCON_B(vars.get('§P_TRA2'));
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
