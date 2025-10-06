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

export const REG0000410: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000410
    // REQUEST:
    // """
    // #1
    // COND:
    // §L_TONDO_FRANGI > #0
    // THEN:
    // *SET *CON-A = §VERN_CASSONETTO
    // *SET *CON-B = §L_TONDO_FRANGI
    // *SET *CF = #1
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // §NR_FRANG_AGG > #1
    // THEN:
    // *SET *CF = §NR_FRANG_AGG
    // """
    // RESPONSE:
    //#1
    if (vars.get('§L_TONDO_FRANGI') > 0) {
        vars.setCON_A(vars.get('§VERN_CASSONETTO'));
        vars.setCON_B(vars.get('§L_TONDO_FRANGI'));
        vars.setCF(1);
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§NR_FRANG_AGG') > 1) {
        vars.setCF(vars.get('§NR_FRANG_AGG'));
    }
    // GENERATED

    return vars.output;
};
