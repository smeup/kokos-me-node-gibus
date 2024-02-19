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

export const REG0007105: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0007105
    // REQUEST:
    // """
    // #1
    // COND:
    // ( §FS_FAM2_JEANS=§SI ) AND ( §FS_PIE_ZER=§SI )
    // ELSE:
    // *SET *LG=''
    // #2
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_FAM2_JEANS') == vars.get('§SI') && vars.get('§FS_PIE_ZER') == vars.get('§SI')) {
    } else {
        vars.setLG("");
    }
    
    //#2
    vars.setCF(0);
    // GENERATED

    return vars.output;
};
