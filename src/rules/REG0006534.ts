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

export const REG0006534: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006534
    // REQUEST:
    // """
    // #1
    // COND:
    // §NR_FRANGI_LED=#0
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §NR_FRANGI_LED >#0
    // THEN:
    // *SET §DUMMYN1 = [ §NR_FRANGI + #1 ]
    // #3
    // COND:
    // §NR_FRANGI_LED >#0
    // THEN:
    // *SET *CF = [ §DUMMYN1 - §LED_1 + #1 - §NR_FRANGI_LED ]
    // """
    // RESPONSE:
    //#1
    if (vars.get('§NR_FRANGI_LED') == 0) {
        vars.setCF(0);
    }
    
    //#2
    if (vars.get('§NR_FRANGI_LED') > 0) {
        vars.setDUMMYN1(vars.get('§NR_FRANGI') + 1);
    }
    
    //#3
    if (vars.get('§NR_FRANGI_LED') > 0) {
        vars.setCF(vars.get('§DUMMYN1') - vars.get('§LED_1') + 1 - vars.get('§NR_FRANGI_LED'));
    }
    
    // GENERATED

    return vars.output;
};
