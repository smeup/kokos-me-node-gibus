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

export const REG0004701: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004701
    // REQUEST:
    // """
    // #1
    // COND:
    // (§FS_MON_POS_1<>§SI ) OR (§L_SBA_POS1 >#0)  OR (§L_SPO_MON_POS1 >#0 )
    // THEN:
    // *SET *CON-A=§VERN_1_COM
    // *SET *CON-B=#30,8
    // ELSE:
    // *SET *CON-A=§VERN_1_COM
    // *SET *CON-B=#29,8
    // #2
    // COND:
    // (§FS_FAM2_ISOLA=§SI ) AND (§TI_ACC_TWI='02' ) AND ((§FS_ACC_CEN=§SI )OR (§FS_ACC_FIN=§SI)) AND ( §FS_ACC_DX_SX=§SI )
    // THEN:
    // *SET *CF=#0
    // #3
    // COND:
    // ( §FS_FAM2_ADDF=§SI ) AND ( §FS_ACC_DX_SX=§SI ) AND (§FS_ACC_PRI=§SI )
    // THEN:
    // *SET *CF=#0
    // #4
    // COND:
    // ( §FS_FAM2_ADDF=§SI ) AND ( §FS_ACC_DX_SX=§SI ) AND (§FS_ACC_CEN=§SI )
    // THEN:
    // *SET *CF=#0
    // #5
    // COND:
    // ( §FS_FAM2_ADDL=§SI ) AND (§TI_ACC_TWI='01') AND (( §FS_ACC_CEN=§SI ) OR ( §FS_ACC_FIN=§SI )) AND (§LA_ADD_LAT='SX')
    // THEN:
    // *SET *CF=#0
    // #6
    // COND:
    // (§FS_FAM2_ADDL=§SI ) AND (§TI_ACC_TWI='02') AND (§FS_ACC_CEN=§SI ) AND (§LA_ADD_LAT='SX')
    // THEN:
    // *SET *CF=#0
    // #7
    // COND:
    // ( §FS_FAM2_ADDF=§SI ) AND (§TI_ACC_TWI='02') AND (§FS_ACC_FIN=§SI )
    // THEN:
    // *SET *CF=#0
    // """
    // RESPONSE:
    //#1
    if ((vars.get('§FS_MON_POS_1') != vars.get('§SI')) || (vars.get('§L_SBA_POS1') > 0) || (vars.get('§L_SPO_MON_POS1') > 0)) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B(30.8);
    } else {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B(29.8);
    }
    //#2
    if ((vars.get('§FS_FAM2_ISOLA') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '02') && ((vars.get('§FS_ACC_CEN') == vars.get('§SI')) || (vars.get('§FS_ACC_FIN') == vars.get('§SI'))) && (vars.get('§FS_ACC_DX_SX') == vars.get('§SI'))) {
        vars.setCF(0);
    }
    //#3
    if ((vars.get('§FS_FAM2_ADDF') == vars.get('§SI')) && (vars.get('§FS_ACC_DX_SX') == vars.get('§SI')) && (vars.get('§FS_ACC_PRI') == vars.get('§SI'))) {
        vars.setCF(0);
    }
    //#4
    if ((vars.get('§FS_FAM2_ADDF') == vars.get('§SI')) && (vars.get('§FS_ACC_DX_SX') == vars.get('§SI')) && (vars.get('§FS_ACC_CEN') == vars.get('§SI'))) {
        vars.setCF(0);
    }
    //#5
    if ((vars.get('§FS_FAM2_ADDL') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '01') && ((vars.get('§FS_ACC_CEN') == vars.get('§SI')) || (vars.get('§FS_ACC_FIN') == vars.get('§SI'))) && (vars.get('§LA_ADD_LAT') == 'SX')) {
        vars.setCF(0);
    }
    //#6
    if ((vars.get('§FS_FAM2_ADDL') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '02') && (vars.get('§FS_ACC_CEN') == vars.get('§SI')) && (vars.get('§LA_ADD_LAT') == 'SX')) {
        vars.setCF(0);
    }
    //#7
    if ((vars.get('§FS_FAM2_ADDF') == vars.get('§SI')) && (vars.get('§TI_ACC_TWI') == '02') && (vars.get('§FS_ACC_FIN') == vars.get('§SI'))) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
