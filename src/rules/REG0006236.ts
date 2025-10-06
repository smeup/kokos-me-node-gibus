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

export const REG0006236: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006236
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = §VERN_1_COM                                                                                                   *
    // SET *CF = #0
    // #2
    // COND:
    // §INN_DX_AGG2 = '01'
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §INN_DX_AGG2 = '02'
    // THEN:
    // *SET *CF = #2
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('§VERN_1_COM'));
    vars.setCF(0);
    
    //#2
    if (vars.get('§INN_DX_AGG2') == '01') {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§INN_DX_AGG2') == '02') {
        vars.setCF(2);
    }
    // GENERATED

    return vars.output;
};
