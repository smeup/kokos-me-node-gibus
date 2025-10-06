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

export const REG0004288: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004288
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#8
    // #2
    // COND:
    // (( §FS_ACC_INI=§SI ) OR (§FS_ACC_FIN=§SI))
    // THEN:
    // *SET *CF = #6
    // #3
    // COND:
    // ( §FS_ACC_CEN= §SI )
    // THEN:
    // *SET *CF= #4
    // #4
    // COND:
    // ( §FS_FAM2_165=§SI ) AND (( §N_MODULI=#1 ) OR ( §N_MODULI=#2 ))
    // THEN:
    // *SET *CF=#6
    // """
    // RESPONSE:
    //#1
    vars.setCF(8);
    
    //#2
    if ((vars.get('§FS_ACC_INI') == vars.get('§SI')) || (vars.get('§FS_ACC_FIN') == vars.get('§SI'))) {
        vars.setCF(6);
    }
    
    //#3
    if (vars.get('§FS_ACC_CEN') == vars.get('§SI')) {
        vars.setCF(4);
    }
    
    //#4
    if ((vars.get('§FS_FAM2_165') == vars.get('§SI')) && ((vars.get('§N_MODULI') == 1) || (vars.get('§N_MODULI') == 2))) {
        vars.setCF(6);
    }
    // GENERATED

    return vars.output;
};
