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

export const REG0004270: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004270
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // §FS_ACC_PRI=§SI
    // THEN:
    // *SET *CF=#2
    // #3
    // COND:
    // ( §FS_FAM2_ADDL=§SI ) AND (§FS_ACC_CEN=§SI ) AND (§TI_ACC_TWI='01' )
    // THEN:
    // *SET *CF= #4
    // #4
    // COND:
    // ( §FS_FAM2_ADDL=§SI ) AND (§FS_ACC_FIN=§SI ) AND (§TI_ACC_TWI='01' )
    // THEN:
    // *SET *CF= #2
    // #5
    // COND:
    // ( §FS_FAM2_ADDF=§SI ) AND ( §FS_ACC_PRI=§SI )
    // THEN:
    // *SET *CF=#2
    // #6
    // COND:
    // ( §FS_FAM2_ADDF=§SI ) AND (§FS_ACC_FIN=§SI ) AND ( §TI_ACC_TWI='01' )
    // THEN:
    // *SET *CF=#2
    // #7
    // COND:
    // ( §FS_FAM2_ISOLA=§SI ) AND (§TI_ACC_TWI='01' ) AND ( §FS_ACC_CEN=§SI )
    // THEN:
    // *SET *CF=#4
    // #8
    // COND:
    // (§FS_FAM2_ISOLA = §SI ) AND (§TI_ACC_TWI='01' ) AND ( §FS_ACC_FIN=§SI )
    // THEN:
    // *SET *CF=#2
    // #9
    // COND:
    // ( §FS_FAM2_ADDF=§SI ) AND (§FS_ACC_FIN=§SI ) AND ( §TI_ACC_TWI='01' )
    // THEN:
    // *SET *CF=#2
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_ACC_PRI') == vars.get('§SI')) {
        vars.setCF(2);
    }
    
    //#3
    if ((vars.get('§FS_FAM2_ADDL') == vars.get('§SI')) && (vars.get('§FS_ACC_CEN') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '01')) {
        vars.setCF(4);
    }
    
    //#4
    if ((vars.get('§FS_FAM2_ADDL') == vars.get('§SI')) && (vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '01')) {
        vars.setCF(2);
    }
    
    //#5
    if ((vars.get('§FS_FAM2_ADDF') == vars.get('§SI')) && (vars.get('§FS_ACC_PRI') == vars.get('§SI'))) {
        vars.setCF(2);
    }
    
    //#6
    if ((vars.get('§FS_FAM2_ADDF') == vars.get('§SI')) && (vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '01')) {
        vars.setCF(2);
    }
    
    //#7
    if ((vars.get('§FS_FAM2_ISOLA') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '01') && (vars.get('§FS_ACC_CEN') == vars.get('§SI'))) {
        vars.setCF(4);
    }
    
    //#8
    if ((vars.get('§FS_FAM2_ISOLA') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '01') && (vars.get('§FS_ACC_FIN') == vars.get('§SI'))) {
        vars.setCF(2);
    }
    
    //#9
    if ((vars.get('§FS_FAM2_ADDF') == vars.get('§SI')) && (vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '01')) {
        vars.setCF(2);
    }
    // GENERATED

    return vars.output;
};
