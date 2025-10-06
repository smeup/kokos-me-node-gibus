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

export const REG0002461: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002461
    // REQUEST:
    // """
    // #1
    // COND:
    // §L_RUL_2 > #0
    // THEN:
    // *SET *CON-A = '0000'
    // *SET *CON-B =  §L_RUL_2
    // *SET *CF = §NR_PZ_RUL_2
    // ELSE:
    // *SET *LG = ''
    // #2
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    if (vars.get('§L_RUL_2') > 0) {
        vars.setCON_A('0000');
        vars.setCON_B(vars.get('§L_RUL_2'));
        vars.setCF(vars.get('§NR_PZ_RUL_2'));
    } else {
        vars.setLG('');
    }
    
    //#2
    vars.setCF(0);
    // GENERATED

    return vars.output;
};
