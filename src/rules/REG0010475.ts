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

export const REG0010475: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010475
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = §VERN_1_COM
    // #2
    // COND:
    // §PC_LU_X_P2SP > #0
    // THEN:
    // *SET *CF = #1
    // *SET *CON-B = §PC_LU_X_P2SP
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VERN_1_COM'));
    
    //#2
    if (vars.get('§PC_LU_X_P2SP') > 0) {
        vars.setCF(1);
        vars.setCON_B(vars.get('§PC_LU_X_P2SP'));
    }
    // GENERATED

    return vars.output;
};
