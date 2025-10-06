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

export const REG0006493: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006493
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // ( §LARG >#500 ) OR ( §SPOR >#500 )
    // THEN:
    // *SET *CF=#2
    // #3
    // COND:
    // ( §LARG >#500 ) AND ( §SPOR >#500 )
    // THEN:
    // *SET *CF=#4
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if ((vars.get('§LARG') > 500) || (vars.get('§SPOR') > 500)) {
        vars.setCF(2);
    }
    
    //#3
    if ((vars.get('§LARG') > 500) && (vars.get('§SPOR') > 500)) {
        vars.setCF(4);
    }
    // GENERATED

    return vars.output;
};
