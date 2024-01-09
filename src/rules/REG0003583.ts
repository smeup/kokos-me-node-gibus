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

export const REG0003583: Rule = (iv) => {

    const vars = new Variables(iv);
    
    // GENERATED
    // RULE: REG0003583
    // REQUEST:
    // """
    // #1
    // COND:
    // ( §SALVAGOCCIA > #0 )  AND (( §FS_FAM2_100=§SI ) OR ( §FS_FAM2_JEANS=§SI ))
    // THEN:
    // *SET *CF=§NR_SALVAGOCCIA
    // ELSE:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    if ((vars.get('§SALVAGOCCIA') > 0) && ((vars.get('§FS_FAM2_100') == vars.get('§SI')) || (vars.get('§FS_FAM2_JEANS') == vars.get('§SI')))) {
        vars.setCF(vars.get('§NR_SALVAGOCCIA'));
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
