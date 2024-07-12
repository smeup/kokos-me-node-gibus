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

export const REG0000413: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000413
    // REQUEST:
    // """
    // #1
    // COND:
    // §L_COVER_GUIDA > #0
    // THEN:
    // *SET *CON-A = §VERN_CASSONETTO
    // *SET *CON-B = §L_COVER_GUIDA
    // *SET *CF = §NR_COVER_GUIDA
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§L_COVER_GUIDA') > 0) {
        vars.setCON_A(vars.get('§VERN_CASSONETTO'));
        vars.setCON_B(vars.get('§L_COVER_GUIDA'));
        vars.setCF(vars.get('§NR_COVER_GUIDA'));
    } else {
        vars.setLG('');
    }
    
    // GENERATED

    return vars.output;
};
