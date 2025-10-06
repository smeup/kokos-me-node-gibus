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

export const REG0002798: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002798
    // REQUEST:
    // """
    // #1
    // COND:
    // §FA_SAL_ALU = §SI AND §SALVAGOCCIA > #0
    // THEN:
    // *SET *CON-A = §VERN_PLAST
    // *SET *CON-B = §SALVAGOCCIA
    // ELSE:
    // *SET *LG =''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FA_SAL_ALU') == vars.get('§SI') && vars.get('§SALVAGOCCIA') > 0) {
        vars.setCON_A(vars.get('§VERN_PLAST'));
        vars.setCON_B(vars.get('§SALVAGOCCIA'));
    } else {
        vars.setLG('');
    }
    
    // GENERATED

    return vars.output;
};
