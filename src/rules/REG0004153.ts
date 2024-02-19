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

export const REG0004153: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004153
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // §FS_STA_ACC_ANT=§SI
    // THEN:
    // *SET *CF=#1
    // #3
    // COND:
    // ( §FS_ACC_CEN=§SI ) AND ( §FS_ACC_ANT_SX=§SI ) AND ( §FS_ACC_ANT_DX<>§SI )
    // THEN:
    // *SET *CF=#0
    // #4
    // COND:
    // ( §FS_ACC_CEN=§SI ) AND ( §FS_ACC_ANT_DX=§SI )
    // THEN:
    // *SET *CF=#1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_STA_ACC_ANT') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#3
    if ((vars.get('§FS_ACC_CEN') == vars.get('§SI')) && (vars.get('§FS_ACC_ANT_SX') == vars.get('§SI')) && (vars.get('§FS_ACC_ANT_DX') != vars.get('§SI'))) {
        vars.setCF(0);
    }
    
    //#4
    if ((vars.get('§FS_ACC_CEN') == vars.get('§SI')) && (vars.get('§FS_ACC_ANT_DX') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
