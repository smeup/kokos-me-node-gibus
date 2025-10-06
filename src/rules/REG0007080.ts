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

export const REG0007080: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0007080
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // ( §FS_ACC_INI=§SI ) AND ( §FS_ACC_POS_DX=§SI )
    // THEN:
    // *SET *CF=#1
    // #3
    // COND:
    // ( §FS_ACC_CEN=§SI ) AND ( §FS_ACC_POS_SX=§SI ) AND (§FS_ACC_POS_DX<>§SI )
    // THEN:
    // *SET *CF=#0
    // #4
    // COND:
    // ( §FS_ACC_CEN=§SI ) AND ( §FS_ACC_POS_DX=§SI )
    // THEN:
    // *SET *CF=#1
    // #5
    // COND:
    // ( §FS_ACC_FIN=§SI ) AND ( §FS_ACC_POS_SX=§SI )
    // THEN:
    // *SET *CF=#0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if ((vars.get('§FS_ACC_INI') == vars.get('§SI')) && (vars.get('§FS_ACC_POS_DX') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    
    //#3
    if ((vars.get('§FS_ACC_CEN') == vars.get('§SI')) && (vars.get('§FS_ACC_POS_SX') == vars.get('§SI')) && (vars.get('§FS_ACC_POS_DX') != vars.get('§SI'))) {
        vars.setCF(0);
    }
    
    //#4
    if ((vars.get('§FS_ACC_CEN') == vars.get('§SI')) && (vars.get('§FS_ACC_POS_DX') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    
    //#5
    if ((vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§FS_ACC_POS_SX') == vars.get('§SI'))) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
