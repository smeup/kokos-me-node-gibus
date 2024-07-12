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

export const REG0002966: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002966
    // REQUEST:
    // """
    // #1
    // COND:
    // §TI_RUL_TS = '06'
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // §FS_ARG_MAG = §SI
    // THEN:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§TI_RUL_TS') == '06') {
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§FS_ARG_MAG') == vars.get('§SI')) {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
