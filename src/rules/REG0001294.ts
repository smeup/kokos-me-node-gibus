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

export const REG0001294: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001294
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = §VR_SALVAGOCCIA
    // #2
    // COND:
    // §SALVAGOCCIA > #0
    // THEN:
    // *SET *CON-B = §SALVAGOCCIA
    // *SET *CF = §NR_SALVAGOCCIA
    // #3
    // COND:
    // §SALVAGOCCIA > #690 AND §FA_SAL_ALU = §SI
    // THEN:
    // *SET *CON-B = #690
    // *SET *CF = §NR_SALVAGOCCIA
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VR_SALVAGOCCIA'));
    
    //#2
    if (vars.get('§SALVAGOCCIA') > 0) {
        vars.setCON_B(vars.get('§SALVAGOCCIA'));
        vars.setCF(vars.get('§NR_SALVAGOCCIA'));
    }
    
    //#3
    if (vars.get('§SALVAGOCCIA') > 690 && vars.get('§FA_SAL_ALU') == vars.get('§SI')) {
        vars.setCON_B(690);
        vars.setCF(vars.get('§NR_SALVAGOCCIA'));
    }
    // GENERATED

    return vars.output;
};
