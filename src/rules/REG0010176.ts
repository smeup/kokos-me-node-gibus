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

export const REG0010176: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010176
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_FAM2_TEKA = §SI
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_FAM2_TEKA') == vars.get('§SI')) {
    } else {
        vars.setLG('');
    }
    
    // GENERATED

    return vars.output;
};
