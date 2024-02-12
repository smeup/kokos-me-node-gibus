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

export const REG0008848: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008848
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYB1 = ''
    // #2
    // COND:
    // §FS_FAM2_ZENIT = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // *SET §DUMMYN1 = #30,6
    // *SET §DUMMYN2 = #30,6
    // *SET §DUMMYN3 = #30,6
    // #3
    // COND:
    // §FS_FAM2_AZIMUT = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // *SET §DUMMYN1 = #34,4
    // *SET §DUMMYN2 = #34,4
    // *SET §DUMMYN2 = #34,4
    // #4
    // COND:
    // §FS_FAM2_TWIST = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // *SET §DUMMYN1 = #40,3
    // *SET §DUMMYN2 = #40,3
    // *SET §DUMMYN3 = #40,3
    // #5
    // THEN:
    // *SET §DUMMYN4 = [§LARG - §DUMMYN1]
    // #6
    // COND:
    // §FS_ACC_LAT_SX = §SI OR §FS_ACC_LAT_DX = §SI
    // THEN:
    // *SET §DUMMYN4 = [§LARG - §DUMMYN2]
    // #7
    // COND:
    // §FS_ACC_LAT_SX = §SI AND §FS_ACC_LAT_DX = §SI
    // THEN:
    // *SET §DUMMYN4 = [§LARG - §DUMMYN3]
    // #8
    // COND:
    // §DUMMYB1 = §SI
    // THEN:
    // *SET *CF = [§DUMMYN4 / #100]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYB1("");
    //#2
    if (vars.get('§FS_FAM2_ZENIT') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
        vars.setDUMMYN1(30.6);
        vars.setDUMMYN2(30.6);
        vars.setDUMMYN3(30.6);
    }
    //#3
    if (vars.get('§FS_FAM2_AZIMUT') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
        vars.setDUMMYN1(34.4);
        vars.setDUMMYN2(34.4);
        vars.setDUMMYN2(34.4);
    }
    //#4
    if (vars.get('§FS_FAM2_TWIST') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
        vars.setDUMMYN1(40.3);
        vars.setDUMMYN2(40.3);
        vars.setDUMMYN3(40.3);
    }
    //#5
    vars.setDUMMYN4(vars.get('§LARG') - vars.get('§DUMMYN1'));
    //#6
    if ((vars.get('§FS_ACC_LAT_SX') == vars.get('§SI')) || (vars.get('§FS_ACC_LAT_DX') == vars.get('§SI'))) {
        vars.setDUMMYN4(vars.get('§LARG') - vars.get('§DUMMYN2'));
    }
    //#7
    if ((vars.get('§FS_ACC_LAT_SX') == vars.get('§SI')) && (vars.get('§FS_ACC_LAT_DX') == vars.get('§SI'))) {
        vars.setDUMMYN4(vars.get('§LARG') - vars.get('§DUMMYN3'));
    }
    //#8
    if (vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setCF(vars.get('§DUMMYN4') / 100);
    }
    // GENERATED

    return vars.output;
};
