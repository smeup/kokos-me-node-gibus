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

export const REG0000408: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000408
    // REQUEST:
    // """
    // #1
    // COND:
    // §L_COP_FRONT_TG > #0
    // THEN:
    // *SET *CON-A = §VERN_FRONTALE
    // *SET *CON-B = §L_COP_FRONT_TG
    // *SET *CF = §NR_PZ_COP_FRONT
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // §FS_TEL_RUL = §SI
    // THEN:
    // *SET *LG = ''
    // #3
    // COND:
    // §FS_TEL_RUL_FRO = §SI
    // THEN:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§L_COP_FRONT_TG') > 0) {
        vars.setCON_A(vars.get('§VERN_FRONTALE'));
        vars.setCON_B(vars.get('§L_COP_FRONT_TG'));
        vars.setCF(vars.get('§NR_PZ_COP_FRONT'));
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§FS_TEL_RUL') == vars.get('§SI')) {
        vars.setLG('');
    }
    
    //#3
    if (vars.get('§FS_TEL_RUL_FRO') == vars.get('§SI')) {
        vars.setLG('');
    }
    
    // GENERATED

    return vars.output;
};
