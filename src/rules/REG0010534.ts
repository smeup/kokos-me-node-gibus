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

export const REG0010534: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010534
    // REQUEST:
    // """
    // #1
    // COND:
    // §N_VIE = #2
    // THEN:
    // *SET *CF = #1
    // #2
    // COND:
    // §N_ANTE = #4 AND §N_VIE = #2
    // THEN:
    // *SET *CF = #2
    // #3
    // COND:
    // §N_VIE <> #2
    // THEN:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§N_VIE') == 2) {
        vars.setCF(1);
    }
    
    //#2
    if (vars.get('§N_ANTE') == 4 && vars.get('§N_VIE') == 2) {
        vars.setCF(2);
    }
    
    //#3
    if (vars.get('§N_VIE') != 2) {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
