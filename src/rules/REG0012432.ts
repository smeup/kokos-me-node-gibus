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

export const REG0012432: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012432
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = 'P055'
    // #2
    // COND:
    // §VERN_1_COM = '0073'
    // THEN:
    // *SET *CON-A = 'P073'
    // """
    // RESPONSE:
    //#1
    vars.setCON_A('P055');
    
    //#2
    if (vars.get('§VERN_1_COM') == '0073') {
        vars.setCON_A('P073');
    }
    // GENERATED

    return vars.output;
};
