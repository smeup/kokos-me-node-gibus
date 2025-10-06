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

export const REG0007957: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0007957
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#8
    // #2
    // COND:
    // ( §FS_FAM2_ADDF=§SI ) AND ( §FS_ACC_PRI=§SI )
    // THEN:
    // *SET *CF=#12
    // #3
    // COND:
    // ( §FS_FAM2_ADDF=§SI ) AND ( §FS_ACC_PRI_02=§SI )
    // THEN:
    // *SET *CF=#8
    // #4
    // COND:
    // ( §FS_FAM2_ADDF=§SI ) AND ( §FS_ACC_CEN=§SI ) AND ( §TI_ACC_TWI='01' )
    // THEN:
    // *SET *CF=#8
    // #5
    // COND:
    // ( §FS_FAM2_ADDF=§SI ) AND ( §FS_ACC_FIN=§SI ) AND ( §TI_ACC_TWI='01' )
    // THEN:
    // *SET *CF=#4
    // #6
    // COND:
    // ( §FS_FAM2_ADDF=§SI ) AND ( §TI_ACC_TWI='02' ) AND ( §FS_ACC_CEN=§SI )
    // THEN:
    // *SET *CF=#4
    // #7
    // COND:
    // ( §FS_FAM2_ADDF=§SI ) AND ( §TI_ACC_TWI='02' ) AND ( §FS_ACC_FIN=§SI )
    // THEN:
    // *SET *CF=#4
    // """
    // RESPONSE:
    //#1
    vars.setCF(8);
    
    //#2
    if ((vars.get('§FS_FAM2_ADDF') == vars.get('§SI')) && (vars.get('§FS_ACC_PRI') == vars.get('§SI'))) {
        vars.setCF(12);
    }
    
    //#3
    if ((vars.get('§FS_FAM2_ADDF') == vars.get('§SI')) && (vars.get('§FS_ACC_PRI_02') == vars.get('§SI'))) {
        vars.setCF(8);
    }
    
    //#4
    if ((vars.get('§FS_FAM2_ADDF') == vars.get('§SI')) && (vars.get('§FS_ACC_CEN') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '01')) {
        vars.setCF(8);
    }
    
    //#5
    if ((vars.get('§FS_FAM2_ADDF') == vars.get('§SI')) && (vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '01')) {
        vars.setCF(4);
    }
    
    //#6
    if ((vars.get('§FS_FAM2_ADDF') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '02') && (vars.get('§FS_ACC_CEN') == vars.get('§SI'))) {
        vars.setCF(4);
    }
    
    //#7
    if ((vars.get('§FS_FAM2_ADDF') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '02') && (vars.get('§FS_ACC_FIN') == vars.get('§SI'))) {
        vars.setCF(4);
    }
    // GENERATED

    return vars.output;
};
