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

export const REG0006205: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006205
    // REQUEST:
    // """
    // #1
    // COND:
    // ( §FS_FAM2_165=§SI ) AND ( §MS_LU_SX <#715 ) AND ( §MS_LU_DX <#715 )
    // ELSE:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    if ((vars.get('§FS_FAM2_165') == vars.get('§SI')) && (vars.get('§MS_LU_SX') < 715) && (vars.get('§MS_LU_DX') < 715)) {
    } else {
        vars.setLG("");
    }
    
    // GENERATED

    return vars.output;
};
