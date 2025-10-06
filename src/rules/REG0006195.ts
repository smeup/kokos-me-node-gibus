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

export const REG0006195: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006195
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §PTO_INT1_INLX > #0 AND §PTO_INT1_IN_L <> §PTO_INT1_INLX
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // *SET *CON-B = §PTO_INT1_INLX
    // *SET *CF = #0,5
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§PTO_INT1_INLX') > 0 && vars.get('§PTO_INT1_IN_L') != vars.get('§PTO_INT1_INLX')) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B(vars.get('§PTO_INT1_INLX'));
        vars.setCF(0.5);
    }
    // GENERATED

    return vars.output;
};
