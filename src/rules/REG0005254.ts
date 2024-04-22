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

export const REG0005254: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005254
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // (( §L_SBA_POS2>#0 ) OR ( §FS_MON_POS_2<>§SI ) OR ( §FS_SCA_MON_POS2<>§SI) OR (§L_SPO_MON_POS2 >#0)) AND (§FS_ACC_CEN<>§SI )
    // THEN:
    // *SET *CF=#1
    // #3
    // COND:
    // ( §FS_ACC_PRI=§SI ) AND (( §L_SBA_POS1>#0 ) OR ( §FS_MON_POS_1<>§SI ) OR ( §FS_SCA_MON_POS1<>§SI ) OR (§L_SPO_MON_POS1 >#0))
    // THEN:
    // *SET *CF=#1
    // """
    // RESPONSE:
    
    //#1
    vars.setCF(0);
    //#2
    if (((vars.get('§L_SBA_POS2') > 0) || (vars.get('§FS_MON_POS_2') != vars.get('§SI')) || (vars.get('§FS_SCA_MON_POS2') != vars.get('§SI')) || (vars.get('§L_SPO_MON_POS2') > 0)) && (vars.get('§FS_ACC_CEN') != vars.get('§SI'))) {
        vars.setCF(1);
    }
    //#3
    if ((vars.get('§FS_ACC_PRI') == vars.get('§SI')) && ((vars.get('§L_SBA_POS1') > 0) || (vars.get('§FS_MON_POS_1') != vars.get('§SI')) || (vars.get('§FS_SCA_MON_POS1') != vars.get('§SI')) || (vars.get('§L_SPO_MON_POS1') > 0))) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
