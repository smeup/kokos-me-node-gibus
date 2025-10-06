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

export const REG0013190: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0013190
    // REQUEST:
    // """
    // #1
    // COND:
    // §_AR = 'VE0003'
    // THEN:
    // *SET *CF = #1
    // *SET *CON-A = §VE_VERN
    // *SET *CON-B = #10
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('_AR') === 'VE0003') {
        vars.setCF(1);
        vars.setCON_A(vars.get('§VE_VERN'));
        vars.setCON_B(10);
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
