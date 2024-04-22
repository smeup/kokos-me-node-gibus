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

export const REG0002374: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002374
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_COM_ARGANO = §SI  AND §FS_FAM2_DUETTO = §SI
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // §FS_TEL_RUL = §SI
    // THEN:
    // *SET *CF = #0
    // #3
    // COND:
    // §FS_TEL_RUL_T01 = §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_COM_ARGANO') == vars.get('§SI') && vars.get('§FS_FAM2_DUETTO') == vars.get('§SI')) {
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§FS_TEL_RUL') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#3
    if (vars.get('§FS_TEL_RUL_T01') == vars.get('§SI')) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
