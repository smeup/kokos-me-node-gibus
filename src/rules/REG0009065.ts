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

export const REG0009065: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009065
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET §DUMMYN4 = #0
    // #2
    // THEN:
    // *SET *CON-A = '0055'
    // *SET *CF = #0
    // *SET §DUMMYB1 = ''
    // #3
    // COND:
    // §FS_FAM2_ZENIT = §SI AND §FS_LED_RGB_DX = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // *SET §DUMMYN1 = #30,9
    // *SET §DUMMYN2 = #30,9
    // *SET §DUMMYN3 = #30,9
    // #4
    // COND:
    // §FS_FAM2_AZIMUT = §SI AND §FS_LED_RGB_DX = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // *SET §DUMMYN1 = #35
    // *SET §DUMMYN2 = #33,1
    // *SET §DUMMYN3 = #31,3
    // #5
    // COND:
    // §FS_FAM2_TWIST = §SI AND §FS_LED_RGB_DX = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // *SET §DUMMYN1 = #20
    // *SET §DUMMYN2 = #20
    // *SET §DUMMYN3 = #20
    // #6
    // COND:
    // §DUMMYB1 = §SI
    // THEN:
    // *SET §DUMMYN4 = [§SPOR - §DUMMYN1]
    // #7
    // COND:
    // §DUMMYB1 = §SI AND (§FS_ACC_LAT_ANT = §SI OR §FS_ACC_LAT_POS = §SI)
    // THEN:
    // *SET §DUMMYN4 = [§SPOR - §DUMMYN2]
    // #8
    // COND:
    // §DUMMYB1 = §SI AND (§FS_ACC_LAT_ANT = §SI AND §FS_ACC_LAT_POS = §SI)
    // THEN:
    // *SET §DUMMYN4 = [§SPOR - §DUMMYN3]
    // #9
    // COND:
    // §DUMMYN4 > #0
    // THEN:
    // *SET *CF = [§DUMMYN4 / #100]
    // """
    // RESPONSE:
    //#1
    vars.setDUMMYN4(0);
    //#2
    vars.setCON_A('0055');
    vars.setCF(0);
    vars.setDUMMYB1('');
    //#3
    if (vars.get('§FS_FAM2_ZENIT') == vars.get('§SI') && vars.get('§FS_LED_RGB_DX') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
        vars.setDUMMYN1(30.9);
        vars.setDUMMYN2(30.9);
        vars.setDUMMYN3(30.9);
    }
    //#4
    if (vars.get('§FS_FAM2_AZIMUT') == vars.get('§SI') && vars.get('§FS_LED_RGB_DX') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
        vars.setDUMMYN1(35);
        vars.setDUMMYN2(33.1);
        vars.setDUMMYN3(31.3);
    }
    //#5
    if (vars.get('§FS_FAM2_TWIST') == vars.get('§SI') && vars.get('§FS_LED_RGB_DX') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
        vars.setDUMMYN1(20);
        vars.setDUMMYN2(20);
        vars.setDUMMYN3(20);
    }
    //#6
    if (vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setDUMMYN4(vars.get('§SPOR') - vars.get('§DUMMYN1'));
    }
    //#7
    if (vars.get('§DUMMYB1') == vars.get('§SI') && (vars.get('§FS_ACC_LAT_ANT') == vars.get('§SI') || vars.get('§FS_ACC_LAT_POS') == vars.get('§SI'))) {
        vars.setDUMMYN4(vars.get('§SPOR') - vars.get('§DUMMYN2'));
    }
    //#8
    if (vars.get('§DUMMYB1') == vars.get('§SI') && (vars.get('§FS_ACC_LAT_ANT') == vars.get('§SI') && vars.get('§FS_ACC_LAT_POS') == vars.get('§SI'))) {
        vars.setDUMMYN4(vars.get('§SPOR') - vars.get('§DUMMYN3'));
    }
    //#9
    if (vars.get('§DUMMYN4') > 0) {
        vars.setCF(vars.get('§DUMMYN4') / 100);
    }
    // GENERATED

    return vars.output;
};
