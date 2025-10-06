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

export const REG0008702: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008702
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYB1 = ''
    // #2
    // COND:
    // §FS_FAM2_JOY = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // *SET §DUMMYN1 = #21,9
    // *SET §DUMMYN2 = #17,4
    // *SET §DUMMYN3 = #13
    // #3
    // COND:
    // §FS_FAM2_ZENIT = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // *SET §DUMMYN1 = #24,9
    // *SET §DUMMYN2 = #24,9
    // *SET §DUMMYN3 = #24,9
    // #4
    // COND:
    // §FS_FAM2_AZIMUT = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // *SET §DUMMYN1 = #29
    // *SET §DUMMYN2 = #27,1
    // *SET §DUMMYN3 = #25,3
    // #5
    // COND:
    // §FS_FAM2_TWIST = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // *SET §DUMMYN1 = #19,6
    // *SET §DUMMYN2 = #19,6
    // *SET §DUMMYN3 = #19,6
    // #6
    // THEN:
    // *SET §DUMMYN4 = [§SPOR - §DUMMYN1]
    // #7
    // COND:
    // §FS_ACC_LAT_ANT = §SI OR §FS_ACC_LAT_POS = §SI
    // THEN:
    // *SET §DUMMYN4 = [§SPOR - §DUMMYN2]
    // #8
    // COND:
    // §FS_ACC_LAT_ANT = §SI AND §FS_ACC_LAT_POS = §SI
    // THEN:
    // *SET §DUMMYN4 = [§SPOR - §DUMMYN3]
    // #9
    // COND:
    // §DUMMYB1 = §SI
    // THEN:
    // *SET *CF = [§DUMMYN4  / #100]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYB1("");
    //#2
    if (vars.get('§FS_FAM2_JOY') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
        vars.setDUMMYN1(21.9);
        vars.setDUMMYN2(17.4);
        vars.setDUMMYN3(13);
    }
    //#3
    if (vars.get('§FS_FAM2_ZENIT') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
        vars.setDUMMYN1(24.9);
        vars.setDUMMYN2(24.9);
        vars.setDUMMYN3(24.9);
    }
    //#4
    if (vars.get('§FS_FAM2_AZIMUT') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
        vars.setDUMMYN1(29);
        vars.setDUMMYN2(27.1);
        vars.setDUMMYN3(25.3);
    }
    //#5
    if (vars.get('§FS_FAM2_TWIST') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
        vars.setDUMMYN1(19.6);
        vars.setDUMMYN2(19.6);
        vars.setDUMMYN3(19.6);
    }
    //#6
    vars.setDUMMYN4(vars.get('§SPOR') - vars.get('§DUMMYN1'));
    //#7
    if (vars.get('§FS_ACC_LAT_ANT') == vars.get('§SI') || vars.get('§FS_ACC_LAT_POS') == vars.get('§SI')) {
        vars.setDUMMYN4(vars.get('§SPOR') - vars.get('§DUMMYN2'));
    }
    //#8
    if (vars.get('§FS_ACC_LAT_ANT') == vars.get('§SI') && vars.get('§FS_ACC_LAT_POS') == vars.get('§SI')) {
        vars.setDUMMYN4(vars.get('§SPOR') - vars.get('§DUMMYN3'));
    }
    //#9
    if (vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setCF(vars.get('§DUMMYN4') / 100);
    }
    // GENERATED

    return vars.output;
};
