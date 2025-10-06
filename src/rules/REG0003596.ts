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

export const REG0003596: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003596
    // REQUEST:
    // """
    // #1
    // COND:
    // ( §FS_FAM2_100=§SI ) AND ((§NR_SUP_MED_100 >#0 ) OR (§NR_SUP_MED_1002 >#0 ))
    // ELSE:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    if ((vars.get('§FS_FAM2_100') == vars.get('§SI')) && ((vars.get('§NR_SUP_MED_100') > 0) || (vars.get('§NR_SUP_MED_1002') > 0))) {
    } else {
        vars.setLG("");
    }
    
    // GENERATED

    return vars.output;
};
