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

export const REG0001730: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001730
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // *SET *CF = #0
    // #2
    // COND:
    // §NR_SUPP_MURO = #3
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §NR_SUPP_MURO = #5
    // THEN:
    // *SET *CF = #1
    // #4
    // COND:
    // §NR_SUPP_MURO = #6
    // THEN:
    // *SET *CF = #2
    // #5
    // COND:
    // §NR_SUPP_MURO = #7
    // THEN:
    // *SET *CF = #1
    // #6
    // COND:
    // §NR_SUPP_MURO = #8
    // THEN:
    // *SET *CF = #2
    // #7
    // COND:
    // §NR_SUPP_MURO = #9
    // THEN:
    // *SET *CF = #3
    // #8
    // COND:
    // §NR_SUPP_MURO = #10
    // THEN:
    // *SET *CF = #2
    // #9
    // COND:
    // §NR_SUPP_MURO = #11
    // THEN:
    // *SET *CF = #3
    // #10
    // COND:
    // §NR_SUPP_MURO = #12
    // THEN:
    // *SET *CF = #4
    // #11
    // COND:
    // §NR_SUPP_MURO = #13
    // THEN:
    // *SET *CF = #3
    // #12
    // COND:
    // §NR_SUPP_MURO = #14
    // THEN:
    // *SET *CF = #4
    // #13
    // COND:
    // §NR_SUPP_MURO = #15
    // THEN:
    // *SET *CF = #5
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('§VERN_1_COM'));
    vars.setCF(0);
    
    //#2
    if (vars.get('§NR_SUPP_MURO') == 3) {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§NR_SUPP_MURO') == 5) {
        vars.setCF(1);
    }
    
    //#4
    if (vars.get('§NR_SUPP_MURO') == 6) {
        vars.setCF(2);
    }
    
    //#5
    if (vars.get('§NR_SUPP_MURO') == 7) {
        vars.setCF(1);
    }
    
    //#6
    if (vars.get('§NR_SUPP_MURO') == 8) {
        vars.setCF(2);
    }
    
    //#7
    if (vars.get('§NR_SUPP_MURO') == 9) {
        vars.setCF(3);
    }
    
    //#8
    if (vars.get('§NR_SUPP_MURO') == 10) {
        vars.setCF(2);
    }
    
    //#9
    if (vars.get('§NR_SUPP_MURO') == 11) {
        vars.setCF(3);
    }
    
    //#10
    if (vars.get('§NR_SUPP_MURO') == 12) {
        vars.setCF(4);
    }
    
    //#11
    if (vars.get('§NR_SUPP_MURO') == 13) {
        vars.setCF(3);
    }
    
    //#12
    if (vars.get('§NR_SUPP_MURO') == 14) {
        vars.setCF(4);
    }
    
    //#13
    if (vars.get('§NR_SUPP_MURO') == 15) {
        vars.setCF(5);
    }
    // GENERATED

    return vars.output;
};
