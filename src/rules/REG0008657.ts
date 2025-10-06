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

export const REG0008657: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008657
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // *SET *CF = #0
    // *SET §DUMMYB1 = ''
    // #2
    // COND:
    // §FS_FAM2_JOY = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // *SET §DUMMYN1 = #26
    // *SET §DUMMYN2 = #19,5
    // *SET §DUMMYN3 = #13
    // #3
    // COND:
    // §FS_FAM2_ZENIT = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // *SET §DUMMYN1 = #45,8
    // *SET §DUMMYN2 = #45,8
    // *SET §DUMMYN3 = #45,8
    // #4
    // COND:
    // §FS_FAM2_AZIMUT = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // *SET §DUMMYN1 = #49,8
    // *SET §DUMMYN2 = #47,9
    // *SET §DUMMYN3 = #46,1
    // #5
    // COND:
    // §DUMMYB1 = §SI
    // THEN:
    // *SET *CON-B = [§LARG - §DUMMYN1]
    // *SET *CF = #1
    // #6
    // COND:
    // §DUMMYB1 = §SI AND (§FS_ACC_LAT_SX = §SI OR §FS_ACC_LAT_DX = §SI)
    // THEN:
    // *SET *CON-B = [§LARG - §DUMMYN2]
    // *SET *CF = #1
    // #7
    // COND:
    // §DUMMYB1 = §SI AND (§FS_ACC_LAT_SX = §SI AND §FS_ACC_LAT_DX = §SI)
    // THEN:
    // *SET *CON-B = [§LARG - §DUMMYN3]
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('§VERN_1_COM'));
    vars.setCF(0);
    vars.setDUMMYB1('');
    //#2
    if (vars.get('§FS_FAM2_JOY') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
        vars.setDUMMYN1(26);
        vars.setDUMMYN2(19.5);
        vars.setDUMMYN3(13);
    }
    //#3
    if (vars.get('§FS_FAM2_ZENIT') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
        vars.setDUMMYN1(45.8);
        vars.setDUMMYN2(45.8);
        vars.setDUMMYN3(45.8);
    }
    //#4
    if (vars.get('§FS_FAM2_AZIMUT') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
        vars.setDUMMYN1(49.8);
        vars.setDUMMYN2(47.9);
        vars.setDUMMYN3(46.1);
    }
    //#5
    if (vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§LARG') - vars.get('§DUMMYN1'));
        vars.setCF(1);
    }
    //#6
    if (vars.get('§DUMMYB1') == vars.get('§SI') && (vars.get('§FS_ACC_LAT_SX') == vars.get('§SI') || vars.get('§FS_ACC_LAT_DX') == vars.get('§SI'))) {
        vars.setCON_B(vars.get('§LARG') - vars.get('§DUMMYN2'));
        vars.setCF(1);
    }
    //#7
    if (vars.get('§DUMMYB1') == vars.get('§SI') && (vars.get('§FS_ACC_LAT_SX') == vars.get('§SI') && vars.get('§FS_ACC_LAT_DX') == vars.get('§SI'))) {
        vars.setCON_B(vars.get('§LARG') - vars.get('§DUMMYN3'));
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
