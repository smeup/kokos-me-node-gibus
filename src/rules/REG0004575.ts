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

export const REG0004575: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004575
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A='P055'
    // *SET *CF= [ §N_ANTE * §N_VIE * #2 ]
    // """
    // RESPONSE:
    //#1
    vars.setCON_A('P055');
    vars.setCF(vars.get('§N_ANTE') * vars.get('§N_VIE') * 2);
    // GENERATED

    return vars.output;
};
