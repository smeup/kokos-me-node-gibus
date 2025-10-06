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

export const REG0008769: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008769
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = '0051'
    // #2
    // COND:
    // §P_TRA1 > #0
    // THEN:
    // *SET *CF = #2
    // *SET *CON-B = §P_TRA1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A('0051');
    
    //#2
    if (vars.get('§P_TRA1') > 0) {
        vars.setCF(2);
        vars.setCON_B(vars.get('§P_TRA1'));
    }
    // GENERATED

    return vars.output;
};
