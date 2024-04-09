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

export const REG0007350: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0007350
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // (( §TI_ANG_ANT1='03' ) OR ( §TI_ANG_ANT2='03' ) OR ( §TI_ANG_POS1='03' ) AND ( §TI_ANG_POS2='03' )) AND ( §FS_ACC_CEN<>§SI )
    // THEN:
    // *SET *CF=#1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if ((vars.get('§TI_ANG_ANT1') == '03' || vars.get('§TI_ANG_ANT2') == '03' || vars.get('§TI_ANG_POS1') == '03') && vars.get('§TI_ANG_POS2') == '03' && vars.get('§FS_ACC_CEN') != vars.get('§SI')) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
