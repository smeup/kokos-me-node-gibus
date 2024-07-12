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

export const REG0006478: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006478
    // REQUEST:
    // """
    // #1
    // COND:
    // §TS_TIPO_TETT = '06'
    // THEN:
    // *SET *CON-A = §VERN_TETT
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // §FS_TES_TET <> ''
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§TS_TIPO_TETT') === '06') {
        vars.setCON_A(vars.get('§VERN_TETT'));
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§FS_TES_TET') !== '') {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
