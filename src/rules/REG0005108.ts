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

export const REG0005108: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005108
    // REQUEST:
    // """
    // #1
    // COND:
    // §P_CAS_SUP_S > #0
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // *SET *CON-B = §P_CAS_SUP_S
    // ELSE:
    // *SET *LG=''
    // #2
    // COND:
    // §N_POR_CAS_S_ACC=#0
    // THEN:
    // *SET *CF=#2
    // #3
    // COND:
    // §N_POR_CAS_S_ACC=#1
    // THEN:
    // *SET *CF=#1
    // #4
    // COND:
    // §N_POR_CAS_S_ACC=#2
    // THEN:
    // *SET *CF=#0
    // """
    // RESPONSE:
    //#1
    if (vars.get('§P_CAS_SUP_S') > 0) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B(vars.get('§P_CAS_SUP_S'));
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§N_POR_CAS_S_ACC') == 0) {
        vars.setCF(2);
    }
    
    //#3
    if (vars.get('§N_POR_CAS_S_ACC') == 1) {
        vars.setCF(1);
    }
    
    //#4
    if (vars.get('§N_POR_CAS_S_ACC') == 2) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
