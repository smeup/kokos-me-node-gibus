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

export const REG0011484: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011484
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = '0051'
    // *SET *CF = #0
    // *SET §DUMMYB1 = ''
    // *SET §DUMMYN4 = §SPOR
    // #2
    // COND:
    // §FS_FAM2_TWIST = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // *SET §DUMMYN1 = #8
    // *SET §DUMMYN2 = #8
    // *SET §DUMMYN3 = #8
    // #3
    // COND:
    // §FS_FAM2_VARIA = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // *SET §DUMMYN1 = #25
    // *SET §DUMMYN2 = #25
    // *SET §DUMMYN3 = #8
    // #4
    // COND:
    // §SPOR_MF_T01 > #0
    // THEN:
    // *SET §DUMMYN4 = §SPOR_MF_T01
    // #5
    // COND:
    // §DUMMYB1 = §SI
    // THEN:
    // *SET *CON-B = [§DUMMYN4  - §DUMMYN1]
    // *SET *CF = #1
    // #6
    // COND:
    // §DUMMYB1 = §SI AND (§FS_ACC_LAT_ANT = §SI OR §FS_ACC_LAT_POS = §SI)
    // THEN:
    // *SET *CON-B = [§DUMMYN4 - §DUMMYN2]
    // #7
    // COND:
    // §DUMMYB1 = §SI AND (§FS_ACC_LAT_ANT = §SI OR §FS_ACC_LAT_POS = §SI) AND §FS_FAM2_MOD_ACC = §SI
    // THEN:
    // *SET *CON-B = [§DUMMYN4 - §DUMMYN3]
    // #8
    // THEN:
    // *SET §DUMMYB1 = ''
    // #9
    // COND:
    // §FS_FAM2_VARIA = §SI AND §FS_ACC_LAT_SX = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #10
    // COND:
    // §DUMMYB1 = §SI
    // THEN:
    // *SET §DUMMYN1 = *CON-B
    // #11
    // COND:
    // §DUMMYB1 = §SI
    // THEN:
    // *SET *CON-B = [§DUMMYN1 - #0,8]
    // #12
    // COND:
    // *CON-B > #719
    // THEN:
    // *SET §DUMMYN1 = #200
    // ELSE:
    // *SET *CF = #0
    // #13
    // COND:
    // *CON-B > #719
    // THEN:
    // *SET *CON-B = §DUMMYN1
    // ELSE:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCON_A('0051');
    vars.setCF(0);
    vars.setDUMMYB1('');
    vars.setDUMMYN4(vars.get('§SPOR'));
    //#2
    if (vars.get('§FS_FAM2_TWIST') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
        vars.setDUMMYN1(8);
        vars.setDUMMYN2(8);
        vars.setDUMMYN3(8);
    }
    //#3
    if (vars.get('§FS_FAM2_VARIA') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
        vars.setDUMMYN1(25);
        vars.setDUMMYN2(25);
        vars.setDUMMYN3(8);
    }
    //#4
    if (vars.get('§SPOR_MF_T01') > 0) {
        vars.setDUMMYN4(vars.get('§SPOR_MF_T01'));
    }
    //#5
    if (vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§DUMMYN4') - vars.get('§DUMMYN1'));
        vars.setCF(1);
    }
    //#6
    if (vars.get('§DUMMYB1') == vars.get('§SI') && (vars.get('§FS_ACC_LAT_ANT') == vars.get('§SI') || vars.get('§FS_ACC_LAT_POS') == vars.get('§SI'))) {
        vars.setCON_B(vars.get('§DUMMYN4') - vars.get('§DUMMYN2'));
    }
    //#7
    if (vars.get('§DUMMYB1') == vars.get('§SI') && (vars.get('§FS_ACC_LAT_ANT') == vars.get('§SI') || vars.get('§FS_ACC_LAT_POS') == vars.get('§SI')) && vars.get('§FS_FAM2_MOD_ACC') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§DUMMYN4') - vars.get('§DUMMYN3'));
    }
    //#8
    vars.setDUMMYB1('');
    //#9
    if (vars.get('§FS_FAM2_VARIA') == vars.get('§SI') && vars.get('§FS_ACC_LAT_SX') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    //#10
    if (vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§CON-B'));
    }
    //#11
    if (vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§DUMMYN1') - 0.8);
    }
    //#12
    if (vars.get('§CON-B') > 719) {
        vars.setDUMMYN1(200);
    } else {
        vars.setCF(0);
    }
    //#13
    if (vars.get('§CON-B') > 719) {
        vars.setCON_B(vars.get('§DUMMYN1'));
    } else {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
