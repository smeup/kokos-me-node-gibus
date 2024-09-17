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

export const REG0009424_GIB: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009424
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = [(§N_MODULI + #1) * (§NR_FRANGI + #2 - §NR_FRANGI_LED)]
    // """
    // RESPONSE:
    //#1
    let nModuli = parseInt(vars.get('§N_MODULI'));
    let nrFrangi = vars.get('§NR_FRANGI');
    let nrFrangiLed = vars.get('§NR_FRANGI_LED');
    let result = (nModuli + 1) * ( nrFrangi + 2 - nrFrangiLed);

    vars.setCF(result);
    // GENERATED
    return vars.output;
};
