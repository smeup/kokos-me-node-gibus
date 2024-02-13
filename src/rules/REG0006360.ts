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

export const REG0006360: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006360
    // REQUEST:
    // """
    // #1
    // COND:
    // §PCH_L_ANT_M2 >#0
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // *SET *CON-B = §PCH_L_ANT_M2
    // *SET *CF = §PCH_N_ANT_M2
    // ELSE:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§PCH_L_ANT_M2') > 0) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B(vars.get('§PCH_L_ANT_M2'));
        vars.setCF(vars.get('§PCH_N_ANT_M2'));
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
