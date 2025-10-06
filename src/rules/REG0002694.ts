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

export const REG0002694: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002694
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = §VERN_TETT
    // *SET *CON-B = §L_TET_TS
    // #2
    // #3
    // COND:
    // §VERN_TETT = '0227'
    // THEN:
    // *SET *CF = #1
    // #4
    // COND:
    // §TS_TIPO_TETT = '06'
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VERN_TETT'));
    vars.setCON_B(vars.get('§L_TET_TS'));
    
    //#3
    if (vars.get('§VERN_TETT') == '0227') {
        vars.setCF(1);
    }
    
    //#4
    if (vars.get('§TS_TIPO_TETT') == '06') {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
