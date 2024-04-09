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

export const REG0011479: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011479
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = §VERN_TETT
    // *SET *CON-B = §L_TET_TS
    // #2
    // COND:
    // §TS_TIPO_TETT = '05'
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VERN_TETT'));
    vars.setCON_B(vars.get('§L_TET_TS'));
    
    //#2
    if (vars.get('§TS_TIPO_TETT') == '05') {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
