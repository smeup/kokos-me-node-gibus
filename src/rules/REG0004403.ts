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

export const REG0004403: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004403
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // *SET *CF = #0
    // #2
    // COND:
    // §L_PORTANTE2 > #0
    // THEN:
    // *SET *CF = #1
    // *SET *CON-B = §L_PORTANTE2
    // #3
    // COND:
    // §L_PORTANTE2 > #595
    // THEN:
    // *SET *CF = #2
    // *SET *CON-B = [ §L_PORTANTE2 / #2 ]
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('§VERN_1_COM'));
    vars.setCF(0);
    
    //#2
    if (vars.get('§L_PORTANTE2') > 0) {
        vars.setCF(1);
        vars.setCON_B(vars.get('§L_PORTANTE2'));
    }
    
    //#3
    if (vars.get('§L_PORTANTE2') > 595) {
        vars.setCF(2);
        vars.setCON_B(vars.get('§L_PORTANTE2') / 2);
    }
    // GENERATED

    return vars.output;
};
