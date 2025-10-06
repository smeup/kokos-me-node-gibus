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

export const REG0006332: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006332
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = '0055'
    // *SET *CF = [ §GRO_LED_IN_L * §NR_LED_RGB_FRO / #100 ]
    // """
    // RESPONSE:
    //#1
    vars.setCON_A('0055');
    vars.setCF(vars.get('§GRO_LED_IN_L') * vars.get('§NR_LED_RGB_FRO') / 100);
    // GENERATED

    return vars.output;
};
