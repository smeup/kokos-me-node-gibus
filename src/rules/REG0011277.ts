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

export const REG0011277: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011277
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_VET_SCORR = §SI AND §FS_APERTURA_CEN = §SI AND §FS_GU_MG_TEN = §SI
    // THEN:
    // *SET *CF = #3
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_VET_SCORR') == vars.get('§SI') && vars.get('§FS_APERTURA_CEN') == vars.get('§SI') && vars.get('§FS_GU_MG_TEN') == vars.get('§SI')) {
        vars.setCF(3);
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
