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

export const REG0002879: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002879
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = §VERN_1_COM
    // #2
    // COND:
    // §PCH_N_POS_M2 > #0
    // THEN:
    // *SET *CF = §PCH_N_POS_M2
    // *SET *CON-B = §PCH_L_POS_M2
    // #3
    // COND:
    // §PCH_N_DX_SB_PO2 > #0
    // THEN:
    // *SET *CF = §PCH_N_DX_SB_PO2
    // *SET *CON-B = §PCH_L_DX_SB_PO2
    // #4
    // COND:
    // §PCH_N_PO_SB_PO2 > #0
    // THEN:
    // *SET *CON-B = §PCH_L_PO_SB_PO2
    // *SET *CF = §PCH_N_PO_SB_PO2
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VERN_1_COM'));
    
    //#2
    if (vars.get('§PCH_N_POS_M2') > 0) {
        vars.setCF(vars.get('§PCH_N_POS_M2'));
        vars.setCON_B(vars.get('§PCH_L_POS_M2'));
    }
    
    //#3
    if (vars.get('§PCH_N_DX_SB_PO2') > 0) {
        vars.setCF(vars.get('§PCH_N_DX_SB_PO2'));
        vars.setCON_B(vars.get('§PCH_L_DX_SB_PO2'));
    }
    
    //#4
    if (vars.get('§PCH_N_PO_SB_PO2') > 0) {
        vars.setCON_B(vars.get('§PCH_L_PO_SB_PO2'));
        vars.setCF(vars.get('§PCH_N_PO_SB_PO2'));
    }
    // GENERATED

    return vars.output;
};
