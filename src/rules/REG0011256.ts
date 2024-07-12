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

export const REG0011256: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011256
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §SALVAGOCCIA > #690 AND §FA_SAL_ALU = §SI
    // THEN:
    // *SET *CF = §NR_SALVAGOCCIA
    // *SET *CON-B = [ §SALVAGOCCIA - #690]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§SALVAGOCCIA') > 690 && vars.get('§FA_SAL_ALU') == vars.get('§SI')) {
        vars.setCF(vars.get('§NR_SALVAGOCCIA'));
        vars.setCON_B(vars.get('§SALVAGOCCIA') - 690);
    }
    // GENERATED

    return vars.output;
};
