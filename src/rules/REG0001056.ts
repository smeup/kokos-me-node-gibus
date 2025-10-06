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

export const REG0001056: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001056
    // REQUEST:
    // """
    // #1
    // COND:
    // §L_PR_GUAR_CASS > #0
    // THEN:
    // *SET *CON-A = 'P072'
    // *SET *CON-B = §L_PR_GUAR_CASS
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§L_PR_GUAR_CASS') > 0) {
        vars.setCON_A('P072');
        vars.setCON_B(vars.get('§L_PR_GUAR_CASS'));
    } else {
        vars.setLG('');
    }
    
    // GENERATED

    return vars.output;
};
