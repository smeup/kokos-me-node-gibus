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

export const REG0004769: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004769
    // REQUEST:
    // """
    // #1
    // COND:
    // ( §N_MODULI>#1 ) AND ( §FS_FAM2_JEANS=§SI ) AND ( §FS_ATT_SOFFITTO=§SI )
    // ELSE:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    if ((vars.get('§N_MODULI') > 1) && (vars.get('§FS_FAM2_JEANS') == vars.get('§SI')) && (vars.get('§FS_ATT_SOFFITTO') == vars.get('§SI'))) {
    } else {
        vars.setLG("");
    }
    
    // GENERATED

    return vars.output;
};
