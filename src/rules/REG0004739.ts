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

export const REG0004739: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004739
    // REQUEST:
    // """
    // #1
    // COND:
    // §N_MODULI >= #1
    // THEN:
    // *SET *CF = [§CINGHIA_DENTATA / #100]
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§N_MODULI') >= 1) {
        vars.setCF(vars.get('§CINGHIA_DENTATA') / 100);
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
