/**
 * This rule represents a template implementation of a rule.
 * It takes an input value and performs some operations on it using the Variables class.
 * The result is returned as the output value.
 * 
 * @param iv The input value for the rule.
 * @returns The output value after applying the rule.
 */
import { Rule } from "../types/general.js";
import { Variables } from "../converter/variables.js";

export const REG0002504: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002504
    // REQUEST:
    // """
    // #1
    // COND:
    // §NR_PZ_BQ_RIN > #0
    // THEN:
    // *SET *CON-A = '0080'
    // *SET *CON-B = #600
    // *SET *CF = §NR_PZ_BQ_RIN
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§NR_PZ_BQ_RIN') > 0) {
        vars.setCON_A('0080');
        vars.setCON_B(600);
        vars.setCF(vars.get('§NR_PZ_BQ_RIN'));
    } else {
        vars.setLG('');
    }
    
    // GENERATED

    return vars.output;
};
