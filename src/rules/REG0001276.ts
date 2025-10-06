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

export const REG0001276: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001276
    // REQUEST:
    // """
    // #1
    // COND:
    // §FRONTALE_POS1 > #0
    // THEN:
    // *SET *CON-A = §VERN_FRANGI
    // *SET *CON-B = §FRONTALE_POS1
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FRONTALE_POS1') > 0) {
        vars.setCON_A(vars.get('§VERN_FRANGI'));
        vars.setCON_B(vars.get('§FRONTALE_POS1'));
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
