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

export const REG0008662: Rule = (iv) => {

    const vars = new Variables(iv);
    
    // GENERATED
    // RULE: REG0008662
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_FAM2_JOY = §SI
    // THEN:
    // *SET *CF = #1
    // *SET §DUMMYN1 = #26
    // *SET §DUMMYN2 = #19,5
    // *SET §DUMMYN3 = #13
    // #3
    // COND:
    // §FS_FAM2_ZENIT = §SI
    // THEN:
    // *SET *CF = #1
    // *SET §DUMMYN1 = #45,8
    // *SET §DUMMYN2 = #45,8
    // *SET §DUMMYN3 = #45,8
    // #4
    // COND:
    // §FS_FAM2_AZIMUT = §SI
    // THEN:
    // *SET *CF = #1
    // *SET §DUMMYN1 = #49,8
    // *SET §DUMMYN2 = #47,9
    // *SET §DUMMYN3 = #46,1
    // #5
    // THEN:
    // *SET *CON-B = [§LARG - §DUMMYN1]
    // #6
    // COND:
    // §FS_ACC_LAT_SX = §SI OR §FS_ACC_LAT_DX = §SI
    // THEN:
    // *SET *CON-B = [§LARG - §DUMMYN2]
    // #7
    // COND:
    // §FS_ACC_LAT_SX = §SI AND §FS_ACC_LAT_DX = §SI
    // THEN:
    // *SET *CON-B = [§LARG - §DUMMYN3]
    // #8
    // THEN:
    // *SET §DUMMYB1 = ''
    // *SET §DUMMYB2 = ''
    // #9
    // COND:
    // §FS_FAM2_AZIMUT = §SI OR §FS_FAM2_ZENIT = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #10
    // COND:
    // §FS_MISTING_ANT = §SI
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #11
    // COND:
    // §FS_LED_RGB_FRB = §SI
    // THEN:
    // *SET §DUMMYB2 = ''
    // #12
    // COND:
    // §FS_LED_PER_FRB = §SI
    // THEN:
    // *SET §DUMMYB2 = ''
    // #13
    // COND:
    // §DUMMYB1 = §SI AND §DUMMYB2 = §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('§VERN_1_COM'));
    vars.setCF(0);
    //#2
    if (vars.get('§FS_FAM2_JOY') == vars.get('§SI')) {
        vars.setCF(1);
        vars.setDUMMYN1(26);
        vars.setDUMMYN2(19.5);
        vars.setDUMMYN3(13);
    }
    //#3
    if (vars.get('§FS_FAM2_ZENIT') == vars.get('§SI')) {
        vars.setCF(1);
        vars.setDUMMYN1(45.8);
        vars.setDUMMYN2(45.8);
        vars.setDUMMYN3(45.8);
    }
    //#4
    if (vars.get('§FS_FAM2_AZIMUT') == vars.get('§SI')) {
        vars.setCF(1);
        vars.setDUMMYN1(49.8);
        vars.setDUMMYN2(47.9);
        vars.setDUMMYN3(46.1);
    }
    //#5
    vars.setCON_B(vars.get('§LARG') - vars.get('§DUMMYN1'));
    //#6
    if ((vars.get('§FS_ACC_LAT_SX') == vars.get('§SI')) || (vars.get('§FS_ACC_LAT_DX') == vars.get('§SI'))) {
        vars.setCON_B(vars.get('§LARG') - vars.get('§DUMMYN2'));
    }
    //#7
    if ((vars.get('§FS_ACC_LAT_SX') == vars.get('§SI')) && (vars.get('§FS_ACC_LAT_DX') == vars.get('§SI'))) {
        vars.setCON_B(vars.get('§LARG') - vars.get('§DUMMYN3'));
    }
    //#8
    vars.setDUMMYB1('');
    vars.setDUMMYB2('');
    //#9
    if ((vars.get('§FS_FAM2_AZIMUT') == vars.get('§SI')) || (vars.get('§FS_FAM2_ZENIT') == vars.get('§SI'))) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    //#10
    if (vars.get('§FS_MISTING_ANT') == vars.get('§SI')) {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    //#11
    if (vars.get('§FS_LED_RGB_FRB') == vars.get('§SI')) {
        vars.setDUMMYB2('');
    }
    //#12
    if (vars.get('§FS_LED_PER_FRB') == vars.get('§SI')) {
        vars.setDUMMYB2('');
    }
    //#13
    if ((vars.get('§DUMMYB1') == vars.get('§SI')) && (vars.get('§DUMMYB2') == vars.get('§SI'))) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
