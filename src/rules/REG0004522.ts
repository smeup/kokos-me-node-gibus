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

export const REG0004522: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004522
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // ( §FS_FAM2_ADDF=§SI ) AND  (§FS_ACC_PRI=§SI )
    // THEN:
    // *SET *CF=#1
    // #3
    // COND:
    // ( §FS_FAM2_ADDF=§SI ) AND (§FS_ACC_CEN=§SI ) AND ( §TI_ACC_TWI='01' )
    // THEN:
    // *SET *CF=#1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if ((vars.get('§FS_FAM2_ADDF') == vars.get('§SI')) && (vars.get('§FS_ACC_PRI') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    
    //#3
    if ((vars.get('§FS_FAM2_ADDF') == vars.get('§SI')) && (vars.get('§FS_ACC_CEN') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '01')) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
