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

export const REG0001287: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001287
    // REQUEST:
    // """
    // #1
    // COND:
    // §L_GUIDA > #0
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // *SET *CON-B = §L_GUIDA
    // *SET *CF = [§N_MODULI + #1]
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§L_GUIDA') > 0) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B(vars.get('§L_GUIDA'));
        vars.setCF(vars.get('§N_MODULI') + 1);
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
