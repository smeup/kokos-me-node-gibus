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

export const REG0002464: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002464
    // REQUEST:
    // """
    // #1
    // COND:
    // §L_ALU_COMPENS > #0
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // *SET *CON-B = §L_ALU_COMPENS
    // *SET *CF = §NR_ALU_COMPENS
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // §FS_TEL_RUL = §SI AND §FS_TEL_RUL_FRO <> §SI
    // THEN:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§L_ALU_COMPENS') > 0) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B(vars.get('§L_ALU_COMPENS'));
        vars.setCF(vars.get('§NR_ALU_COMPENS'));
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§FS_TEL_RUL') == vars.get('§SI') && vars.get('§FS_TEL_RUL_FRO') != vars.get('§SI')) {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
