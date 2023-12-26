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

export const REG0003130: Rule = (iv) => {

    const vars = new Variables(iv);
    
    // GENERATED
    // RULE: REG0003130
    // REQUEST:
    // """
    // #1
    // COND:
    // ( §FS_FAM2_LUCE = §SI ) OR ( §FS_FAM2_100 = §SI )
    // THEN:
    // *SET *LG = ''
    // #2
    // COND:
    // §FS_FAM2_ROOM = §SI
    // THEN:
    // *SET *LG = ''
    // #3
    // THEN:
    // *SET *CF = #1
    // #4
    // COND:
    // §FS_ACC_CEN = §SI AND §FS_ACC_ANT_SX = §SI AND §FS_ACC_ANT_DX = §SI
    // THEN:
    // *SET *CF = #0
    // #5
    // COND:
    // §FS_ACC_FIN = §SI AND §FS_ACC_ANT_SX = §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    if ((vars.get('§FS_FAM2_LUCE') == vars.get('§SI')) || (vars.get('§FS_FAM2_100') == vars.get('§SI'))) {
        vars.setLG('');
    }
    //#2
    if (vars.get('§FS_FAM2_ROOM') == vars.get('§SI')) {
        vars.setLG('');
    }
    //#3
    vars.setCF(1);
    //#4
    if ((vars.get('§FS_ACC_CEN') == vars.get('§SI')) && (vars.get('§FS_ACC_ANT_SX') == vars.get('§SI')) && (vars.get('§FS_ACC_ANT_DX') == vars.get('§SI'))) {
        vars.setCF(0);
    }
    //#5
    if ((vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§FS_ACC_ANT_SX') == vars.get('§SI'))) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
