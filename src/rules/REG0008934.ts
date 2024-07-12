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

export const REG0008934: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008934
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §LU_SCO_ADD > #0
    // THEN:
    // *SET *CF = #1
    // *SET *CON-A = §VERN_1_COM
    // *SET *CON-B = §LU_SCO_ADD
    // #3
    // COND:
    // §LU_SCO_ADD > #700
    // THEN:
    // *SET *CF = #2
    // *SET *CON-B = [ §LU_SCO_ADD / #2 ]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    //#2
    if (vars.get('§LU_SCO_ADD') > 0) {
        vars.setCF(1);
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B(vars.get('§LU_SCO_ADD'));
    }
    //#3
    if (vars.get('§LU_SCO_ADD') > 700) {
        vars.setCF(2);
        vars.setCON_B(vars.get('§LU_SCO_ADD') / 2);
    }
    // GENERATED

    return vars.output;
};
