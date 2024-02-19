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

export const REG0006233: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006233
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = §VERN_1_COM
    // #2
    // COND:
    // §INN_DX_AGG3 = '01'
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §INN_DX_AGG3 = '03'
    // THEN:
    // *SET *CF = #2
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VERN_1_COM'));
    
    //#2
    if (vars.get('§INN_DX_AGG3') == '01') {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§INN_DX_AGG3') == '03') {
        vars.setCF(2);
    }
    // GENERATED

    return vars.output;
};
