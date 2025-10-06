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

export const REG0007882: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0007882
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // ( §FS_FAM2_ELITE=§SI ) AND ( §FS_ATT_PARETE=§SI )
    // THEN:
    // *SET *CF= [ §N_MODULI * #2 ]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if ((vars.get('§FS_FAM2_ELITE') == vars.get('§SI')) && (vars.get('§FS_ATT_PARETE') == vars.get('§SI'))) {
        vars.setCF(vars.get('§N_MODULI') * 2);
    }
    // GENERATED

    return vars.output;
};
