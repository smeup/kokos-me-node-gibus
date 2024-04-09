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

export const REG0011811: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011811
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #2
    // #2
    // COND:
    // §LARG > #200
    // THEN:
    // *SET *CF = #3
    // #3
    // COND:
    // §LARG > #300
    // THEN:
    // *SET *CF = #4
    // #4
    // COND:
    // §LARG > #400
    // THEN:
    // *SET *CF = #5
    // #5
    // COND:
    // §NR_SUP_CAS_AGG > #0
    // THEN:
    // *SET §DUMMYN1 = [*CF + §NR_SUP_CAS_AGG]
    // #6
    // COND:
    // §NR_SUP_CAS_AGG > #0
    // THEN:
    // *SET *CF  = §DUMMYN1
    // """
    // RESPONSE:
    //#1
    vars.setCF(2);
    
    //#2
    if (vars.get('§LARG') > 200) {
        vars.setCF(3);
    }
    
    //#3
    if (vars.get('§LARG') > 300) {
        vars.setCF(4);
    }
    
    //#4
    if (vars.get('§LARG') > 400) {
        vars.setCF(5);
    }
    
    //#5
    if (vars.get('§NR_SUP_CAS_AGG') > 0) {
        vars.setDUMMYN1(vars.getCF() + vars.get('§NR_SUP_CAS_AGG'));
    }
    
    //#6
    if (vars.get('§NR_SUP_CAS_AGG') > 0) {
        vars.setCF(vars.get('§DUMMYN1'));
    }
    // GENERATED

    return vars.output;
};
