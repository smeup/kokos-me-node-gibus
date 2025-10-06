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

export const REG0010197: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010197
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = '0000'
    // *SET *CON-B = #40
    // #2
    // COND:
    // §TRA_LAT_SX > #700
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A('0000');
    vars.setCON_B(40);
    
    //#2
    if (vars.get('§TRA_LAT_SX') > 700) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
