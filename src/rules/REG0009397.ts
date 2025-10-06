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

export const REG0009397: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009397
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = §VERN_FRANGI
    // #2
    // COND:
    // §FRANGITRATTA1 > #0
    // THEN:
    // *SET *CF = §NR_FRANGI
    // *SET *CON-B = §FRANGITRATTA1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VERN_FRANGI'));
    
    //#2
    if (vars.get('§FRANGITRATTA1') > 0) {
        vars.setCF(vars.get('§NR_FRANGI'));
        vars.setCON_B(vars.get('§FRANGITRATTA1'));
    }
    // GENERATED

    return vars.output;
};
