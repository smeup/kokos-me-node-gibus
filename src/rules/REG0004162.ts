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

export const REG0004162: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004162
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A=§VERN_PLAST
    // #2
    // COND:
    // ( §FS_ACC_CEN=§SI ) OR ( §FS_ACC_FIN=§SI )
    // THEN:
    // *SET *CF=#0
    // #3
    // COND:
    // ( ( §FS_ACC_CEN=§SI ) OR ( §FS_ACC_INI ) ) AND ( §FS_STA_ACC_POS=§SI ) AND ( §FS_STA_ACC_ANT<>§SI )
    // THEN:
    // *SET *CF=#1
    // #4
    // COND:
    // ( §FS_ACC_CEN=§SI ) AND ( §FS_ACC_POS_SX=§SI ) AND (§FS_ACC_ANT_SX<>§SI )
    // THEN:
    // *SET *CF=#1
    // #5
    // COND:
    // §VERN_1_COM = '0133' OR §VERN_1_COM = '0320' OR §VERN_1_COM = '0276'
    // THEN:
    // *SET *CON-A = 'P069'
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('§VERN_PLAST'));
    
    //#2
    if (vars.get('§FS_ACC_CEN') == vars.get('§SI') || vars.get('§FS_ACC_FIN') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#3
    if ((vars.get('§FS_ACC_CEN') == vars.get('§SI') || vars.get('§FS_ACC_INI')) && vars.get('§FS_STA_ACC_POS') == vars.get('§SI') && vars.get('§FS_STA_ACC_ANT') != vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#4
    if (vars.get('§FS_ACC_CEN') == vars.get('§SI') && vars.get('§FS_ACC_POS_SX') == vars.get('§SI') && vars.get('§FS_ACC_ANT_SX') != vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#5
    if (vars.get('§VERN_1_COM') == '0133' || vars.get('§VERN_1_COM') == '0320' || vars.get('§VERN_1_COM') == '0276') {
        vars.setCON_A('P069');
    }
    // GENERATED

    return vars.output;
};
