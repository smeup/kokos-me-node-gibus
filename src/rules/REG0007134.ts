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

export const REG0007134: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0007134
    // REQUEST:
    // """
    // #1
    // COND:
    // ( §FS_STA_MUR_ANT2=§SI )
    // ELSE:
    // *SET *LG=''
    // #2
    // COND:
    // ( §FS_STA_MUR_ANT2=§SI ) AND ( §TI_ANG_ANT2='03' )
    // THEN:
    // *SET *CF=#0
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_STA_MUR_ANT2') == vars.get('§SI')) {
    } else {
        vars.setLG("");
    }
    
    //#2
    if (vars.get('§FS_STA_MUR_ANT2') == vars.get('§SI') && vars.get('§TI_ANG_ANT2') == '03') {
        vars.setCF(0);
    }
    
    // GENERATED

    return vars.output;
};
