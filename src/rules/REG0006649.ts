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

export const REG0006649: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006649
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §TS_TIPO_TETT = '05'
    // THEN:
    // *SET *CF = §NR_GIU_TET
    // *SET *CON-A = §VERN_TETT
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§TS_TIPO_TETT') == '05') {
        vars.setCF(vars.get('§NR_GIU_TET'));
        vars.setCON_A(vars.get('§VERN_TETT'));
    }
    // GENERATED

    return vars.output;
};
