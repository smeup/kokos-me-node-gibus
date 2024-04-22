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

export const REG0003784: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003784
    // REQUEST:
    // """
    // #1
    // COND:
    // §GRO_LED_IN_S > #0
    // THEN:
    // *SET *CON-A = '0000'
    // *SET *CON-B = §GRO_LED_IN_S
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // §GRO_LED_IN_S > #0
    // THEN:
    // *SET *CF = [ §GRO_LED_IN_S / #100 ]
    // ELSE:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§GRO_LED_IN_S') > 0) {
        vars.setCON_A('0000');
        vars.setCON_B(vars.get('§GRO_LED_IN_S'));
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§GRO_LED_IN_S') > 0) {
        vars.setCF(vars.get('§GRO_LED_IN_S') / 100);
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
