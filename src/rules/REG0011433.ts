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

export const REG0011433: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011433
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = *COL
    // *SET *CON-B = *LUNG
    // #2
    // COND:
    // §FS_FAM2_TWIST = §SI
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §FS_FAM2_ZENIT = §SI
    // THEN:
    // *SET *CF = #1
    // #4
    // COND:
    // §FS_FAM2_VARIA = §SI
    // THEN:
    // *SET *CF = #1
    // #5
    // COND:
    // §FS_FAM2_AZIMUT = §SI
    // THEN:
    // *SET *CF = #1
    // #6
    // COND:
    // §FS_FAM2_JOY = §SI AND §FS_ACC_LAT_POS = §SI
    // THEN:
    // *SET *CF = #1
    // #7
    // COND:
    // §FS_FAM2_JOY = §SI AND §FS_ACC_LAT_DX = §SI
    // THEN:
    // *SET *CF = #1
    // #8
    // THEN:
    // *SET §DUMMYB1 = ''
    // *SET §DUMMYB2 = ''
    // #9
    // COND:
    // §FS_FAM2_TWIST = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #10
    // COND:
    // §FS_FAM2_ZENIT = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #11
    // COND:
    // §FS_ACC_LAT_POS = §SI
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #12
    // COND:
    // §FS_ACC_LAT_DX = §SI
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #13
    // COND:
    // §DUMMYB1 = §SI AND §DUMMYB2 = §SI
    // THEN:
    // *SET *CF = #0
    // #14
    // COND:
    // §TI_TE_MON_POS2 = '02'
    // ELSE:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('*COL'));
    vars.setCON_B(vars.get('*LUNG'));
    
    //#2
    if (vars.get('§FS_FAM2_TWIST') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§FS_FAM2_ZENIT') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#4
    if (vars.get('§FS_FAM2_VARIA') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#5
    if (vars.get('§FS_FAM2_AZIMUT') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#6
    if (vars.get('§FS_FAM2_JOY') == vars.get('§SI') && vars.get('§FS_ACC_LAT_POS') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#7
    if (vars.get('§FS_FAM2_JOY') == vars.get('§SI') && vars.get('§FS_ACC_LAT_DX') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#8
    vars.setDUMMYB1('');
    vars.setDUMMYB2('');
    
    //#9
    if (vars.get('§FS_FAM2_TWIST') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#10
    if (vars.get('§FS_FAM2_ZENIT') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#11
    if (vars.get('§FS_ACC_LAT_POS') == vars.get('§SI')) {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    
    //#12
    if (vars.get('§FS_ACC_LAT_DX') == vars.get('§SI')) {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    
    //#13
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§DUMMYB2') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#14
    if (vars.get('§TI_TE_MON_POS2') == '02') {
    } else {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
