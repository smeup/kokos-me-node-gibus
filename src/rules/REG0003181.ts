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

export const REG0003181: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003181
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = §VERN_FRANGI
    // *SET *CON-B = §PROF_MONOGIVA
    // *SET *CF = §NR_PRO_MON
    // #2
    // COND:
    // §VERN_FRANGI = ''
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('§VERN_FRANGI'));
    vars.setCON_B(vars.get('§PROF_MONOGIVA'));
    vars.setCF(vars.get('§NR_PRO_MON'));
    
    //#2
    if (vars.get('§VERN_FRANGI') == '') {
        vars.setCON_A(vars.get('§VERN_1_COM'));
    }
    // GENERATED

    return vars.output;
};
