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

export const REG0000705: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000705
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §TEST_AFFIANC = 'SX'
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §TEST_AFFIANC = ''
    // THEN:
    // *SET *CF = #1
    // #4
    // COND:
    // §TEST_AFFIANC = 'DX'
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§TEST_AFFIANC') == 'SX') {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§TEST_AFFIANC') == '') {
        vars.setCF(1);
    }
    
    //#4
    if (vars.get('§TEST_AFFIANC') == 'DX') {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
