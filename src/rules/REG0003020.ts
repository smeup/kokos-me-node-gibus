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

export const REG0003020: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003020
    // REQUEST:
    // """
    // #1
    // COND:
    // §L_GUIDA_LAT_TG > #0
    // THEN:
    // *SET *CON-A = §VERN_GUIDE
    // *SET *CON-B = [§L_GUIDA_LAT_TG + §AUM_GUI_DX]
    // *SET *S2 = [§L_GUIDA_LAT_TG + §AUM_GUI_DX]
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§L_GUIDA_LAT_TG') > 0) {
        vars.setCON_A(vars.get('§VERN_GUIDE'));
        vars.setCON_B(vars.get('§L_GUIDA_LAT_TG') + vars.get('§AUM_GUI_DX'));
        vars.setS2(vars.get('§L_GUIDA_LAT_TG') + vars.get('§AUM_GUI_DX'));
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
