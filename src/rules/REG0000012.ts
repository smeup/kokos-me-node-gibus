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

export const REG0000012: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000012
    // REQUEST:
    // """
    // #1
    // COND:
    // (§NR_SUPP_MURO <= #0) OR (§FO_ATT_UNIVERS <> §SI)
    // THEN:
    // *SET *LG='0'
    // """
    // RESPONSE:
    //#1
    if ((vars.get('§NR_SUPP_MURO') <= 0) || (vars.get('§FO_ATT_UNIVERS') != vars.get('§SI'))) {
        vars.setLG('0');
    }
    // GENERATED

    return vars.output;
};
