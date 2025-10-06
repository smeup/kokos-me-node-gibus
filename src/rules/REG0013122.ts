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

export const REG0013122: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0013122
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET §DUMMYN1 = §LARG_MST
    // *SET §DUMMYN2 = §SPOR_MST
    // #2
    // COND:
    // §LARG > #0
    // THEN:
    // *SET §DUMMYN1 = §LARG
    // #3
    // COND:
    // §SPOR > #0
    // THEN:
    // *SET §DUMMYN2 = §SPOR
    // #4
    // COND:
    // §NR_SCR = #1
    // THEN:
    // *SET *CF = [ §DUMMYN1 / #100 + §DUMMYN2 / #100 ]
    // #5
    // COND:
    // §NR_SCR = #2
    // THEN:
    // *SET *CF = [ §DUMMYN1 / #100 + §DUMMYN2 / #50 ]
    // #6
    // COND:
    // §NR_SCR = #3
    // THEN:
    // *SET *CF = [ §DUMMYN1 / #100 + §DUMMYN2 / #50 + #1 ]
    // #7
    // COND:
    // §NR_SCR = #4
    // THEN:
    // *SET *CF = [ §DUMMYN1 / #50 + §DUMMYN2 / #50 ]
    // #8
    // COND:
    // §L_CAV_T02 > #0
    // THEN:
    // *SET *CF = §L_CAV_T02
    // """
    // RESPONSE:
    //#1
    vars.setDUMMYN1(vars.get('§LARG_MST'));
    vars.setDUMMYN2(vars.get('§SPOR_MST'));
    
    //#2
    if (vars.get('§LARG') > 0) {
        vars.setDUMMYN1(vars.get('§LARG'));
    }
    
    //#3
    if (vars.get('§SPOR') > 0) {
        vars.setDUMMYN2(vars.get('§SPOR'));
    }
    
    //#4
    if (vars.get('§NR_SCR') == 1) {
        vars.setCF((vars.get('§DUMMYN1') / 100) + (vars.get('§DUMMYN2') / 100));
    }
    
    //#5
    if (vars.get('§NR_SCR') == 2) {
        vars.setCF((vars.get('§DUMMYN1') / 100) + (vars.get('§DUMMYN2') / 50));
    }
    
    //#6
    if (vars.get('§NR_SCR') == 3) {
        vars.setCF((vars.get('§DUMMYN1') / 100) + (vars.get('§DUMMYN2') / 50) + 1);
    }
    
    //#7
    if (vars.get('§NR_SCR') == 4) {
        vars.setCF((vars.get('§DUMMYN1') / 50) + (vars.get('§DUMMYN2') / 50));
    }
    
    //#8
    if (vars.get('§L_CAV_T02') > 0) {
        vars.setCF(vars.get('§L_CAV_T02'));
    }
    // GENERATED

    return vars.output;
};
