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

export const REG0005628: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005628
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §L_TUBO_18_TG > #590
    // THEN:
    // *SET *CF = #1
    // *SET *CON-A = §VERN_1_COM
    // *SET *CON-B = [§L_TUBO_18_TG - #500]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§L_TUBO_18_TG') > 590) {
        vars.setCF(1);
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B(vars.get('§L_TUBO_18_TG') - 500);
    }
    // GENERATED

    return vars.output;
};
