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

export const REG0008979: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008979
    // REQUEST:
    // """
    // #1
    // #2
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // #3
    // THEN:
    // *SET *CF = #2
    // #4
    // COND:
    // §LARG > #420
    // THEN:
    // *SET *CF = #3
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('§VERN_1_COM'));
    
    //#2
    vars.setCF(2);
    
    //#3
    if (vars.get('§LARG') > 420) {
        vars.setCF(3);
    }
    // GENERATED

    return vars.output;
};
