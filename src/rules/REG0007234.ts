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

export const REG0007234: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0007234
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // ( §FS_MON_ANT1<>§SI ) AND ( §TI_ANG_ANT1='01' )
    // THEN:
    // *SET *CF=#1
    // #3
    // COND:
    // ( §FS_ACC_PRI=§SI ) AND ( §FS_ACC_SX_DX=§SI ) AND ( §FS_MON_ANT1<>§SI ) AND ( §TI_ANG_ANT1='01' )
    // THEN:
    // *SET *CF=#1
    // #4
    // COND:
    // ( §FS_ACC_PRI_02=§SI ) AND ( §FS_ACC_FRO=§SI )
    // THEN:
    // *SET *CF=#0
    // #5
    // COND:
    // ( §FS_ACC_FRO=§SI ) AND ( §FS_ACC_FIN=§SI ) AND ( §FS_MON_ANT2<>§SI ) AND ( §TI_ANG_ANT2='01' )
    // THEN:
    // *SET *CF=#1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if ((vars.get('§FS_MON_ANT1') != vars.get('§SI')) && (vars.get('§TI_ANG_ANT1') == '01')) {
        vars.setCF(1);
    }
    
    //#3
    if ((vars.get('§FS_ACC_PRI') == vars.get('§SI')) && (vars.get('§FS_ACC_SX_DX') == vars.get('§SI')) && (vars.get('§FS_MON_ANT1') != vars.get('§SI')) && (vars.get('§TI_ANG_ANT1') == '01')) {
        vars.setCF(1);
    }
    
    //#4
    if ((vars.get('§FS_ACC_PRI_02') == vars.get('§SI')) && (vars.get('§FS_ACC_FRO') == vars.get('§SI'))) {
        vars.setCF(0);
    }
    
    //#5
    if ((vars.get('§FS_ACC_FRO') == vars.get('§SI')) && (vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§FS_MON_ANT2') != vars.get('§SI')) && (vars.get('§TI_ANG_ANT2') == '01')) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
