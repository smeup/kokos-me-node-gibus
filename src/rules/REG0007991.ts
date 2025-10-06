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

export const REG0007991: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0007991
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = '0051'
    // *SET *CON-B = §TUBO_MOTORE
    // #2
    // COND:
    // §TUBO_MOTORE > #0
    // THEN:
    // *SET *CF=#1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A('0051');
    vars.setCON_B(vars.get('§TUBO_MOTORE'));
    
    //#2
    if (vars.get('§TUBO_MOTORE') > 0) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
