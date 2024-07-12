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

export const REG0011743: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011743
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // *SET *CF = #0
    // #2
    // COND:
    // §NR_SUPP_MURO = #2
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §NR_SUPP_MURO = #4
    // THEN:
    // *SET *CF = #2
    // #4
    // COND:
    // §NR_SUPP_MURO = #5
    // THEN:
    // *SET *CF = #1
    // #5
    // COND:
    // §NR_SUPP_MURO = #7
    // THEN:
    // *SET *CF = #2
    // #6
    // COND:
    // §NR_SUPP_MURO = #8
    // THEN:
    // *SET *CF = #1
    // #7
    // COND:
    // §NR_SUPP_MURO = #10
    // THEN:
    // *SET *CF = #2
    // #8
    // COND:
    // §NR_SUPP_MURO = #11
    // THEN:
    // *SET *CF = #1
    // #9
    // COND:
    // §NR_SUPP_MURO = #13
    // THEN:
    // *SET *CF = #2
    // #10
    // COND:
    // §NR_SUPP_MURO = #14
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('§VERN_1_COM'));
    vars.setCF(0);
    
    //#2
    if (vars.get('§NR_SUPP_MURO') == 2) {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§NR_SUPP_MURO') == 4) {
        vars.setCF(2);
    }
    
    //#4
    if (vars.get('§NR_SUPP_MURO') == 5) {
        vars.setCF(1);
    }
    
    //#5
    if (vars.get('§NR_SUPP_MURO') == 7) {
        vars.setCF(2);
    }
    
    //#6
    if (vars.get('§NR_SUPP_MURO') == 8) {
        vars.setCF(1);
    }
    
    //#7
    if (vars.get('§NR_SUPP_MURO') == 10) {
        vars.setCF(2);
    }
    
    //#8
    if (vars.get('§NR_SUPP_MURO') == 11) {
        vars.setCF(1);
    }
    
    //#9
    if (vars.get('§NR_SUPP_MURO') == 13) {
        vars.setCF(2);
    }
    
    //#10
    if (vars.get('§NR_SUPP_MURO') == 14) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
