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

export const REG0012336: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012336
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = [ §WS003PRO01 * §NR_FRA_T01 ]
    // *SET *CON-A = §VERN_FRANGI
    // *SET *CON-B = §FRANGITRATTA1
    // """
    // RESPONSE:
    //#1
    vars.setCF(vars.get('§WS003PRO01') * vars.get('§NR_FRA_T01'));
    vars.setCON_A(vars.get('§VERN_FRANGI'));
    vars.setCON_B(vars.get('§FRANGITRATTA1'));
    // GENERATED

    return vars.output;
};
