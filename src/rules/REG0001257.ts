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

export const REG0001257: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001257
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = §VERN_GUIDE
    // #2
    // COND:
    // §AUM_GUI_DX <> §AUM_GUI_SX
    // THEN:
    // *SET *CON-B = [§L_GUIDA_FIX + §AUM_GUI_SX]
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VERN_GUIDE'));
    
    //#2
    if (vars.get('§AUM_GUI_DX') != vars.get('§AUM_GUI_SX')) {
        vars.setCON_B(vars.get('§L_GUIDA_FIX') + vars.get('§AUM_GUI_SX'));
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
