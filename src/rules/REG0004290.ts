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

export const REG0004290: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004290
    // REQUEST:
    // """
    // #1
    // COND:
    // §P_INT1_INLX <= #0
    // THEN:
    // *SET *LG=''
    // #2
    // COND:
    // §P_INT1_IN_L=§P_INT1_INLX
    // THEN:
    // *SET *CF=#0
    // #3
    // COND:
    // §P_INT1_INLX<>§P_INT1_IN_L
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // *SET *CON-B = §P_INT1_INLX
    // *SET *CF=#1
    // """
    // RESPONSE:
    //#1
    if (vars.get('§P_INT1_INLX') <= 0) {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§P_INT1_INL') == vars.get('§P_INT1_INLX')) {
        vars.setCF(0);
    }
    
    //#3
    if (vars.get('§P_INT1_INLX') != vars.get('§P_INT1_INL')) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B(vars.get('§P_INT1_INLX'));
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
