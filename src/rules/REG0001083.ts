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

export const REG0001083: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001083
    // REQUEST:
    // """
    // #1
    // COND:
    // *LUNG <= #100
    // THEN:
    // *SET *CF = #8
    // ELSE:
    // *SET *CF = #10
    // #2
    // THEN:
    // *SET *CON-A = 'P072'
    // """
    // RESPONSE:
    //#1
    if (vars.get('LUNG') <= 100) {
        vars.setCF(8);
    } else {
        vars.setCF(10);
    }
    
    //#2
    vars.setCON_A('P072');
    // GENERATED

    return vars.output;
};
