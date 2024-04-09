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

export const REG0000724: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000724
    // REQUEST:
    // """
    // #1
    // COND:
    // §L_CAS_MOB_TG > #0 AND §FS_11_QUJ = §SI
    // THEN:
    // *SET *CON-A = §VERN_CASSONETTO
    // *SET *CON-B = §L_CAS_MOB_TG
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§L_CAS_MOB_TG') > 0 && vars.get('§FS_11_QUJ') == vars.get('§SI')) {
        vars.setCON_A(vars.get('§VERN_CASSONETTO'));
        vars.setCON_B(vars.get('§L_CAS_MOB_TG'));
    } else {
        vars.setLG('');
    }
    
    // GENERATED

    return vars.output;
};
