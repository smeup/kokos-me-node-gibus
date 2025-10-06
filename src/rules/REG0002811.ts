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

export const REG0002811: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002811
    // REQUEST:
    // """
    // #1
    // COND:
    // §SALVAGOCCIA > #0
    // THEN:
    // *SET *CON-A = §VERN_PLAST
    // *SET *CON-B = §SALVAGOCCIA
    // *SET *CF = §NR_SALVAGOCCIA
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // §FA_SAL_ALU = §SI
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§SALVAGOCCIA') > 0) {
        vars.setCON_A(vars.get('§VERN_PLAST'));
        vars.setCON_B(vars.get('§SALVAGOCCIA'));
        vars.setCF(vars.get('§NR_SALVAGOCCIA'));
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§FA_SAL_ALU') == vars.get('§SI')) {
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
