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

export const REG0007799: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0007799
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // *SET *CON-B = §P_GRO1_IN_S
    // *SET *CF = #0
    // #2
    // COND:
    // §P_GRO1_IN_S > #0
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §P_GRO1_INSX > #0 AND §P_GRO1_IN_S <> §P_GRO1_INSX
    // THEN:
    // *SET *CF = #0,5
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('§VERN_1_COM'));
    vars.setCON_B(vars.get('§P_GRO1_IN_S'));
    vars.setCF(0);
    
    //#2
    if (vars.get('§P_GRO1_IN_S') > 0) {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§P_GRO1_INSX') > 0 && vars.get('§P_GRO1_IN_S') != vars.get('§P_GRO1_INSX')) {
        vars.setCF(0.5);
    }
    // GENERATED

    return vars.output;
};
