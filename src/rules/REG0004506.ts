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

export const REG0004506: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004506
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET §DUMMYN1 = [ §NR_GAM_NOR_ANT + §NR_GAM_NOR_POS + §NR_GAM_AGG_TOT ]
    // #2
    // THEN:
    // *SET *CF = [ §DUMMYN1 - §NR_PIE_MAG ]
    // """
    // RESPONSE:
    //#1
    vars.setDUMMYN1(vars.get('§NR_GAM_NOR_ANT') + vars.get('§NR_GAM_NOR_POS') + vars.get('§NR_GAM_AGG_TOT'));
    
    //#2
    vars.setCF(vars.get('§DUMMYN1') - vars.get('§NR_PIE_MAG'));
    // GENERATED

    return vars.output;
};
