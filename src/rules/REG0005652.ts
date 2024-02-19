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

export const REG0005652: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005652
    // REQUEST:
    // """
    // #1
    // COND:
    // ( §FS_FAM2_JEANS=§SI ) AND (§N_GAM_SPO >#0 )
    // THEN:
    // *SET *CF=§N_GAM_SPO
    // ELSE:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    if ((vars.get('§FS_FAM2_JEANS') == vars.get('§SI')) && (vars.get('§N_GAM_SPO') > 0)) {
        vars.setCF(vars.get('§N_GAM_SPO'));
    } else {
        vars.setLG('');
    }
    
    // GENERATED

    return vars.output;
};
