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

export const REG0012357: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012357
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = §VERN_1_COM
    // #2
    // COND:
    // §ATTACCO = '01'
    // THEN:
    // *SET *CF = §PD_LARG_ML
    // #3
    // COND:
    // §ATTACCO = '01' AND *CF <= 1
    // THEN:
    // *SET *CF = #2
    // #4
    // COND:
    // §ATTACCO = '01' AND §LARG > #600
    // THEN:
    // *SET *CF = #7
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VERN_1_COM'));
    
    //#2
    if (vars.get('§ATTACCO') == '01') {
        vars.setCF(vars.get('§PD_LARG_ML'));
    }
    
    //#3
    if (vars.get('§ATTACCO') == '01' && vars.getCF() <= 1) {
        vars.setCF(2);
    }
    
    //#4
    if (vars.get('§ATTACCO') == '01' && vars.get('§LARG') > 600) {
        vars.setCF(7);
    }
    
    // GENERATED

    return vars.output;
};
