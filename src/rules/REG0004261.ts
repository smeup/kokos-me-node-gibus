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

export const REG0004261: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004261
    // REQUEST:
    // """
    // #1
    // COND:
    // ( §FS_ACC_PRI=§SI ) OR (§FS_ACC_PRI_02=§SI )
    // THEN:
    // *SET *CF=#1
    // ELSE:
    // *SET *CF=#2
    // #2
    // COND:
    // ( §FS_FAM2_ADDL=§SI ) AND (§FS_ACC_CEN=§SI ) AND (§TI_ACC_TWI='01' )
    // THEN:
    // *SET *CF=#0
    // #3
    // COND:
    // (§FS_ACC_FIN=§SI ) AND (§TI_ACC_TWI='01' )
    // THEN:
    // *SET *CF=#1
    // #4
    // COND:
    // ( §FS_FAM2_ADDL=§SI ) AND (§FS_ACC_CEN=§SI ) AND (§TI_ACC_TWI='02' )
    // THEN:
    // *SET *CF= #0
    // #5
    // COND:
    // ( §FS_FAM2_ADDL=§SI ) AND (§FS_ACC_FIN=§SI ) AND (§TI_ACC_TWI='02' )
    // THEN:
    // *SET *CF=#1
    // #6
    // COND:
    // (§FS_ACC_FIN=§SI ) AND (§TI_ACC_TWI='01' )  AND ((§N_GAM_ANT_N_ANG >#0 ) OR (§N_GAM_POS_N_ANG=#0)) AND (§NR_MON_ANG_MAN=#0)
    // THEN:
    // *SET *CF=[
    // #7
    // COND:
    // §FS_FAM2_ZENIT = §SI
    // THEN:
    // *SET *CF =#0
    // """
    // RESPONSE:
    //#1
    if ((vars.get('§FS_ACC_PRI') == vars.get('§SI')) || (vars.get('§FS_ACC_PRI_02') == vars.get('§SI'))) {
        vars.setCF(1);
    } else {
        vars.setCF(2);
    }
    //#2
    if ((vars.get('§FS_FAM2_ADDL') == vars.get('§SI')) && (vars.get('§FS_ACC_CEN') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '01')) {
        vars.setCF(0);
    }
    //#3
    if ((vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '01')) {
        vars.setCF(1);
    }
    //#4
    if ((vars.get('§FS_FAM2_ADDL') == vars.get('§SI')) && (vars.get('§FS_ACC_CEN') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '02')) {
        vars.setCF(0);
    }
    //#5
    if ((vars.get('§FS_FAM2_ADDL') == vars.get('§SI')) && (vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '02')) {
        vars.setCF(1);
    }
    //#6
    if ((vars.get('§FS_ACC_FIN') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '01') && ((vars.get('§N_GAM_ANT_N_ANG') > 0) || (vars.get('§N_GAM_POS_N_ANG') == 0)) && (vars.get('§NR_MON_ANG_MAN') == 0)) {
        vars.setCF("");
    }
    //#7
    if (vars.get('§FS_FAM2_ZENIT') == vars.get('§SI')) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
