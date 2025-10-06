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

export const REG0008215: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008215
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A=§VERN_1_COM
    // *SET *CON-B= [ §LARG_M1 + §LARG_M2 + #3]
    // #2
    // THEN:
    // *SET *CON-A = §VERN_FRANGI
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('§VERN_1_COM'));
    vars.setCON_B(vars.get('§LARG_M1') + vars.get('§LARG_M2') + 3);
    
    //#2
    vars.setCON_A(vars.get('§VERN_FRANGI'));
    // GENERATED

    return vars.output;
};
