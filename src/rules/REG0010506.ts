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

export const REG0010506: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010506
    // REQUEST:
    // """
    // #1
    // COND:
    // §SPESS_VETRO_MM = '10' AND §VE_REG_VET_CEN > #0
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // *SET *CON-B = §VE_REG_VET_CEN
    // *SET *CF = §VE_QREG_VET_CEN
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§SPESS_VETRO_MM') == '10' && vars.get('§VE_REG_VET_CEN') > 0) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B(vars.get('§VE_REG_VET_CEN'));
        vars.setCF(vars.get('§VE_QREG_VET_CEN'));
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
