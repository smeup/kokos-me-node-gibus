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

export const REG0011302: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011302
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // *SET *CF = #0
    // #2
    // COND:
    // §L_PORTANTE6 > #0
    // THEN:
    // *SET *CON-B = §L_PORTANTE6
    // *SET *CF = #1
    // #3
    // COND:
    // §L_PORTANTE6 > #595
    // THEN:
    // *SET *CON-B = [ §L_PORTANTE6 / #2 ]
    // *SET *CF = #2
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('§VERN_1_COM'));
    vars.setCF(0);
    
    //#2
    if (vars.get('§L_PORTANTE6') > 0) {
        vars.setCON_B(vars.get('§L_PORTANTE6'));
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§L_PORTANTE6') > 595) {
        vars.setCON_B(vars.get('§L_PORTANTE6') / 2);
        vars.setCF(2);
    }
    
    // GENERATED

    return vars.output;
};
