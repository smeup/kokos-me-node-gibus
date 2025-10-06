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

export const REG0010151: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010151
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYN1 = #0
    // #2
    // COND:
    // §NR_DYN_CEN > 0
    // THEN:
    // *SET §DUMMYN1 = [§NR_FRANGI + #2]
    // #3
    // COND:
    // §NR_DYN_CEN > 0
    // THEN:
    // *SET *CF = [§DUMMYN1 * §NR_DYN_CEN]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYN1(0);
    
    //#2
    if (vars.get('§NR_DYN_CEN') > 0) {
        vars.setDUMMYN1(vars.get('§NR_FRANGI') + 2);
    }
    
    //#3
    if (vars.get('§NR_DYN_CEN') > 0) {
        vars.setCF(vars.get('§DUMMYN1') * vars.get('§NR_DYN_CEN'));
    }
    // GENERATED

    return vars.output;
};
