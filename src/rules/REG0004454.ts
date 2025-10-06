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

export const REG0004454: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004454
    // REQUEST:
    // """
    // #1
    // COND:
    // §H_POS_M1 >#0
    // THEN:
    // *SET *CF = #1
    // #2
    // COND:
    // ( §H_POS_M1 > #0 ) AND ( §H_POS_M4 > #0 ) AND (§N_MODULI= #3 )
    // THEN:
    // *SET *CF=#2
    // #3
    // COND:
    // ( §H_POS_M1 > #0 ) AND ( §H_POS_M3 > #0 ) AND (§N_MODULI= #2 )
    // THEN:
    // *SET *CF= #2
    // #4
    // COND:
    // ( §H_POS_M1 > #0 ) AND ( §H_POS_M2 > #0 ) AND (§N_MODULI= #1 )
    // THEN:
    // *SET *CF=#2
    // """
    // RESPONSE:
    //#1
    if (vars.get('§H_POS_M1') > 0) {
        vars.setCF(1);
    }
    
    //#2
    if ((vars.get('§H_POS_M1') > 0) && (vars.get('§H_POS_M4') > 0) && (vars.get('§N_MODULI') == 3)) {
        vars.setCF(2);
    }
    
    //#3
    if ((vars.get('§H_POS_M1') > 0) && (vars.get('§H_POS_M3') > 0) && (vars.get('§N_MODULI') == 2)) {
        vars.setCF(2);
    }
    
    //#4
    if ((vars.get('§H_POS_M1') > 0) && (vars.get('§H_POS_M2') > 0) && (vars.get('§N_MODULI') == 1)) {
        vars.setCF(2);
    }
    
    // GENERATED

    return vars.output;
};
