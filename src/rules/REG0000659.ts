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

export const REG0000659: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000659
    // REQUEST:
    // """
    // #1
    // COND:
    // (§FS_FAM2_TOLO = §SI) AND (§FP_MANTOVANA = §SI)
    // THEN:
    // *SET *CON-A = §VERN_PLAST
    // *SET *CF = #2
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if ((vars.get('§FS_FAM2_TOLO') == vars.get('§SI')) && (vars.get('§FP_MANTOVANA') == vars.get('§SI'))) {
        vars.setCON_A(vars.get('§VERN_PLAST'));
        vars.setCF(2);
    } else {
        vars.setLG('');
    }
    
    // GENERATED

    return vars.output;
};
