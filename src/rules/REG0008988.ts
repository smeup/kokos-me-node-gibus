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

export const REG0008988: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008988
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
    // *SET §DUMMYB1 = ''
    // *SET §DUMMYN1 = #0
    // *SET §DUMMYN2 = #0
    // *SET §DUMMYN3 = #0
    // #3
    // COND:
    // §FS_FAM2_ZENIT = §SI
    // THEN:
    // *SET §DUMMYB1 = ''
    // *SET §DUMMYN1 = #0
    // *SET §DUMMYN2 = #0
    // *SET §DUMMYN3 = #0
    // #4
    // COND:
    // §FS_FAM2_AZIMUT = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // *SET §DUMMYN1 = #34
    // *SET §DUMMYN2 = #25,5
    // *SET §DUMMYN3 = #17
    // #5
    // COND:
    // §DUMMYB1 = §SI
    // THEN:
    // *SET §DUMMYN4 = [§SPOR - §DUMMYN1]
    // #6
    // COND:
    // §DUMMYB1 = §SI AND (§FS_ACC_LAT_ANT = §SI OR §FS_ACC_LAT_POS = §SI)
    // THEN:
    // *SET §DUMMYN4 = [§SPOR - §DUMMYN2]
    // #7
    // COND:
    // §DUMMYB1 = §SI AND (§FS_ACC_LAT_ANT = §SI AND §FS_ACC_LAT_POS = §SI)
    // THEN:
    // *SET §DUMMYN4 = [§SPOR - §DUMMYN3]
    // #8
    // COND:
    // §DUMMYB1 = §SI
    // THEN:
    // *SET *CF = [§DUMMYN4  / #100]
    // #9
    // COND:
    // §DUMMYB1 = §SI AND §FS_SUP_LAT_SX = §SI
    // THEN:
    // *SET *CF = [§DUMMYN4  - #10,5]
    // #10
    // COND:
    // §DUMMYB1 = §SI AND §FS_SUP_LAT_SX = §SI
    // THEN:
    // *SET §DUMMYN1 = [*CF / #100 / #2]
    // #11
    // COND:
    // §DUMMYB1 = §SI AND §FS_SUP_LAT_SX = §SI
    // THEN:
    // *SET *CF = §DUMMYN1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYB1("");
    //#2
    if (vars.get('§FS_FAM2_JOY') == vars.get('§SI')) {
        vars.setDUMMYB1("");
        vars.setDUMMYN1(0);
        vars.setDUMMYN2(0);
        vars.setDUMMYN3(0);
    }
    //#3
    if (vars.get('§FS_FAM2_ZENIT') == vars.get('§SI')) {
        vars.setDUMMYB1("");
        vars.setDUMMYN1(0);
        vars.setDUMMYN2(0);
        vars.setDUMMYN3(0);
    }
    //#4
    if (vars.get('§FS_FAM2_AZIMUT') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
        vars.setDUMMYN1(34);
        vars.setDUMMYN2(25.5);
        vars.setDUMMYN3(17);
    }
    //#5
    if (vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setDUMMYN4(vars.get('§SPOR') - vars.get('§DUMMYN1'));
    }
    //#6
    if (vars.get('§DUMMYB1') == vars.get('§SI') && (vars.get('§FS_ACC_LAT_ANT') == vars.get('§SI') || vars.get('§FS_ACC_LAT_POS') == vars.get('§SI'))) {
        vars.setDUMMYN4(vars.get('§SPOR') - vars.get('§DUMMYN2'));
    }
    //#7
    if (vars.get('§DUMMYB1') == vars.get('§SI') && (vars.get('§FS_ACC_LAT_ANT') == vars.get('§SI') && vars.get('§FS_ACC_LAT_POS') == vars.get('§SI'))) {
        vars.setDUMMYN4(vars.get('§SPOR') - vars.get('§DUMMYN3'));
    }
    //#8
    if (vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setCF(vars.get('§DUMMYN4') / 100);
    }
    //#9
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§FS_SUP_LAT_SX') == vars.get('§SI')) {
        vars.setCF(vars.get('§DUMMYN4') - 10.5);
    }
    //#10
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§FS_SUP_LAT_SX') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('*CF') / 100 / 2);
    }
    //#11
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§FS_SUP_LAT_SX') == vars.get('§SI')) {
        vars.setCF(vars.get('§DUMMYN1'));
    }
    // GENERATED

    return vars.output;
};
