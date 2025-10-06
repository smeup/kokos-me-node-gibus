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

export const REG0004464: Rule = (iv) => {

    const vars = new Variables(iv);
    
    // GENERATED
    // RULE: REG0004464
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // ( §FS_FAM2_ROOM=§SI ) AND ( §N_MODULI = #2 ) AND ( §SPOR > #600 )
    // THEN:
    // *SET *CF=#1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    //#2
    if ((vars.get('§FS_FAM2_ROOM') == vars.get('§SI')) && (vars.get('§N_MODULI') == 2) && (vars.get('§SPOR') > 600)) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
