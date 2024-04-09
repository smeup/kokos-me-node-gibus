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

export const REG0007306: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0007306
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // ( §FS_ACC_PRI<>§SI ) AND ( §FS_ACC_PRI_02<>§SI ) AND ( §TI_ANG_POS1<>'03' ) AND ( §TI_ANG_POS1<>'04' )
    // THEN:
    // *SET *CF=#1
    // #3
    // COND:
    // ( §FS_ACC_PRI=§SI ) AND ( §TI_ANG_POS1<>'03' ) AND ( §TI_ANG_POS1<>'04' )
    // THEN:
    // *SET *CF=#1
    // #4
    // COND:
    // ( §FS_ACC_PRI_02=§SI ) AND ( §TI_ANG_POS1<>'03' ) AND ( §TI_ANG_POS1<>'04' )
    // THEN:
    // *SET *CF=#1
    // #5
    // COND:
    // ( §FS_ACC_FIN=§SI ) AND ( §FS_ACC_LAT=§SI )
    // THEN:
    // *SET *CF=#0
    // #6
    // COND:
    // ( §FS_ACC_FIN=§SI ) AND ( §FS_ACC_FRO=§SI )
    // THEN:
    // *SET *CF=#0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if ((vars.get('§FS_ACC_PRI') != vars.get('§SI')) && (vars.get('§FS_ACC_PRI_02') != vars.get('§SI')) && (vars.get('§TI_ANG_POS1') !== '03') && (vars.get('§TI_ANG_POS1') !== '04')) {
        vars.setCF(1);
    }
    
    //#3
    if ((vars.get('§FS_ACC_PRI') == vars.get('§SI')) && (vars.get('§TI_ANG_POS1') !== '03') && (vars.get('§TI_ANG_POS1') !== '04')) {
        vars.setCF(1);
    }
    
    //#4
    if ((vars.get('§FS_ACC_PRI_02') == vars.get('§SI')) && (vars.get('§TI_ANG_POS1') !== '03') && (vars.get('§TI_ANG_POS1') !== '04')) {
        vars.setCF(1);
    }
    
    //#5
    if ((vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§FS_ACC_LAT') == vars.get('§SI'))) {
        vars.setCF(0);
    }
    
    //#6
    if ((vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§FS_ACC_FRO') == vars.get('§SI'))) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
