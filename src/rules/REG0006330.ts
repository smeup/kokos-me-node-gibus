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

export const REG0006330: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006330
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §P_POR_CAS_L_ACC >#0
    // THEN:
    // *SET *CON-A=§VERN_1_COM
    // *SET *CON-B=§P_POR_CAS_L_ACC
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§P_POR_CAS_L_ACC') > 0) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B(vars.get('§P_POR_CAS_L_ACC'));
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
