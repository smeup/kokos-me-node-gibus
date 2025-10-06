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

export const REG0007118: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0007118
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A=§VERN_1_COM
    // #2
    // COND:
    // §NR_PIE_FS=#1 OR §NR_PIE_FS=#2
    // THEN:
    // *SET *CF=#1
    // #3
    // COND:
    // §NR_PIE_FS=#3 OR §NR_PIE_FS=#4
    // THEN:
    // *SET *CF=#2
    // #4
    // COND:
    // §NR_PIE_FS=#5 OR §NR_PIE_FS=#6
    // THEN:
    // *SET *CF=#3
    // #5
    // COND:
    // §NR_PIE_FS=#7 OR §NR_PIE_FS=#8
    // THEN:
    // *SET *CF=#4
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('§VERN_1_COM'));
    
    //#2
    if (vars.get('§NR_PIE_FS') == 1 || vars.get('§NR_PIE_FS') == 2) {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§NR_PIE_FS') == 3 || vars.get('§NR_PIE_FS') == 4) {
        vars.setCF(2);
    }
    
    //#4
    if (vars.get('§NR_PIE_FS') == 5 || vars.get('§NR_PIE_FS') == 6) {
        vars.setCF(3);
    }
    
    //#5
    if (vars.get('§NR_PIE_FS') == 7 || vars.get('§NR_PIE_FS') == 8) {
        vars.setCF(4);
    }
    
    // GENERATED

    return vars.output;
};
