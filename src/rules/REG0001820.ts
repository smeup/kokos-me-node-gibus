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

export const REG0001820: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001820
    // REQUEST:
    // """
    // #1
    // COND:
    // §L_FRANGI_TS > #0
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // *SET *CON-B = §L_FRANGI_TS
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§L_FRANGI_TS') > 0) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B(vars.get('§L_FRANGI_TS'));
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
