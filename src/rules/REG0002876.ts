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

export const REG0002876: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002876
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = §VERN_1_COM
    // #2
    // COND:
    // §PCH_N_ANT_M1 > #0
    // THEN:
    // *SET *CON-B = §PCH_L_ANT_M1
    // *SET *CF = §PCH_N_ANT_M1
    // #3
    // COND:
    // §PCH_N_SX_SB_AN1 > #0
    // THEN:
    // *SET *CON-B = §PCH_L_SX_SB_AN1
    // *SET *CF = §PCH_N_SX_SB_AN1
    // #4
    // COND:
    // §PCH_N_AN_SB_AN1 > #0
    // THEN:
    // *SET *CON-B = §PCH_L_AN_SB_AN1
    // *SET *CF = §PCH_N_AN_SB_AN1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VERN_1_COM'));
    
    //#2
    if (vars.get('§PCH_N_ANT_M1') > 0) {
        vars.setCON_B(vars.get('§PCH_L_ANT_M1'));
        vars.setCF(vars.get('§PCH_N_ANT_M1'));
    }
    
    //#3
    if (vars.get('§PCH_N_SX_SB_AN1') > 0) {
        vars.setCON_B(vars.get('§PCH_L_SX_SB_AN1'));
        vars.setCF(vars.get('§PCH_N_SX_SB_AN1'));
    }
    
    //#4
    if (vars.get('§PCH_N_AN_SB_AN1') > 0) {
        vars.setCON_B(vars.get('§PCH_L_AN_SB_AN1'));
        vars.setCF(vars.get('§PCH_N_AN_SB_AN1'));
    }
    // GENERATED

    return vars.output;
};
