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

export const REG0005912: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005912
    // REQUEST:
    // """
    // #1
    // COND:
    // ( §FS_FAM2_165=§SI ) AND ( §TRA_TET_POS1 >  #0  )
    // ELSE:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    if ((vars.get('§FS_FAM2_165') == vars.get('§SI')) && (vars.get('§TRA_TET_POS1') > 0)) {
    } else {
        vars.setLG("");
    }
    // GENERATED

    return vars.output;
};
