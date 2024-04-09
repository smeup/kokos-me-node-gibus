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

export const REG0009808: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009808
    // REQUEST:
    // """
    // #1
    // COND:
    // §POS_TEL_TWI = '2' AND §_AR_MST = 'TS0103'
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    if (vars.get('§POS_TEL_TWI') == '2' && vars.get('§_AR_MST') == 'TS0103') {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
