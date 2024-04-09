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

export const REG0008162: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008162
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §CHI_Y2 = 'TS0084'
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §CHI_Y4 = 'TS0084'
    // THEN:
    // *SET *CF = #1
    // #4
    // COND:
    // §CHI_Y6 = 'TS0084'
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§CHI_Y2') == 'TS0084') {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§CHI_Y4') == 'TS0084') {
        vars.setCF(1);
    }
    
    //#4
    if (vars.get('§CHI_Y6') == 'TS0084') {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
