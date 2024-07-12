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

export const REG0003756: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003756
    // REQUEST:
    // """
    // #1
    // COND:
    // §P_INT1_IN_L > #0
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // *SET *CON-B = §P_INT1_IN_L
    // ELSE:
    // *SET *LG=''
    // #2
    // COND:
    // §P_INT1_IN_L = §P_INT1_INLX
    // THEN:
    // *SET *CF=#2
    // """
    // RESPONSE:
    //#1
    if (vars.get('§P_INT1_IN_L') > 0) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B(vars.get('§P_INT1_IN_L'));
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§P_INT1_IN_L') == vars.get('§P_INT1_INLX')) {
        vars.setCF(vars.get('§P_INT1_INLX'));
    }
    // GENERATED

    return vars.output;
};
