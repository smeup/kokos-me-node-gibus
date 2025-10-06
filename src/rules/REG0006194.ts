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

export const REG0006194: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006194
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §P_FIS_GRO1_INLX > #0 AND §P_FIS_GRO1_INLX <> §P_FIS_GRO1_IN_L
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // *SET *CON-B = §P_FIS_GRO1_INLX
    // *SET *CF = #0,5
    // #3
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§P_FIS_GRO1_INLX') > 0 && vars.get('§P_FIS_GRO1_INLX') != vars.get('§P_FIS_GRO1_IN_L')) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B(vars.get('§P_FIS_GRO1_INLX'));
        vars.setCF(0.5);
    }
    
    //#3
    vars.setCF(0);
    // GENERATED

    return vars.output;
};
