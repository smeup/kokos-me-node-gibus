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

export const AU0007: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: AU0007
    // REQUEST:
    // """
    // #1
    // COND:
    // TIPO_P_TELO1 = 'FALLS'
    // ELSE:
    // *SET *LG = '0'
    // """
    // RESPONSE:
    //#1
    if (vars.get('TIPO_P_TELO1') == 'FALLS') {
    } else {
        vars.setLG('0');
    }
    // GENERATED

    return vars.output;
};
