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

export const REG0005931: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005931
    // REQUEST:
    // """
    // #1
    // COND:
    // ( §N_MODULI>#1 ) AND ( ( §FS_FAM2_ISOLA=§SI ) OR ( §FS_FAM2_ADDL=§SI ) )
    // ELSE:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    if ((vars.get('§N_MODULI') > 1) && ((vars.get('§FS_FAM2_ISOLA') == vars.get('§SI')) || (vars.get('§FS_FAM2_ADDL') == vars.get('§SI')))) {
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
