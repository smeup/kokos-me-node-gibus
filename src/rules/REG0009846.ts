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

export const REG0009846: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009846
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §NR_BARRE_2MT > #0
    // THEN:
    // *SET *CF = [ §NR_BARRE_2MT * §NR_FRANGI_LED ]
    // #3
    // COND:
    // §NR_BARRE_4MT > #0
    // THEN:
    // *SET *CF = [ §NR_BARRE_4MT * §NR_FRANGI_LED  * #2]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    //#2
    if (vars.get('§NR_BARRE_2MT') > 0) {
        vars.setCF(vars.get('§NR_BARRE_2MT') * vars.get('§NR_FRANGI_LED'));
    }
    //#3
    if (vars.get('§NR_BARRE_4MT') > 0) {
        vars.setCF(vars.get('§NR_BARRE_4MT') * vars.get('§NR_FRANGI_LED') * 2);
    }
    // GENERATED

    return vars.output;
};
