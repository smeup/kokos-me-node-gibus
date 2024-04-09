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

export const REG0005744: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005744
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // ( §FS_MOT_PAR=§SI ) OR ( §AT_SEC_MOT='090' )
    // THEN:
    // *SET *CF=#1
    // #3
    // COND:
    // ( §FS_MOT_PAR=§SI ) AND ( §AT_SEC_MOT='090' )
    // THEN:
    // *SET *CF=#2
    // #4
    // COND:
    // §FS_AT_PAR_MAG=§SI
    // THEN:
    // *SET *CF=#0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if ((vars.get('§FS_MOT_PAR') == vars.get('§SI')) || (vars.get('§AT_SEC_MOT') == '090')) {
        vars.setCF(1);
    }
    
    //#3
    if ((vars.get('§FS_MOT_PAR') == vars.get('§SI')) && (vars.get('§AT_SEC_MOT') == '090')) {
        vars.setCF(2);
    }
    
    //#4
    if (vars.get('§FS_AT_PAR_MAG') == vars.get('§SI')) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
