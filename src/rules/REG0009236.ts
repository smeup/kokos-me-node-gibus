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

export const REG0009236: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009236
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = §VERN_1_COM
    // *SET §DUMMYB1 = ''
    // #2
    // COND:
    // §FS_ACC_LAT_SX = §SI
    // THEN:
    // *SET *LG = ''
    // #3
    // COND:
    // §FS_FAM2_VARIA = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // *SET §DUMMYN1 = #34
    // *SET §DUMMYN2 = #34
    // *SET §DUMMYN3 = #17
    // #4
    // COND:
    // §DUMMYB1 = §SI
    // THEN:
    // *SET §DUMMYN4 = [§SPOR - §DUMMYN1]
    // #5
    // COND:
    // §DUMMYB1 = §SI AND (§FS_ACC_LAT_ANT = §SI OR §FS_ACC_LAT_POS = §SI)
    // THEN:
    // *SET §DUMMYN4 = [§SPOR - §DUMMYN2]
    // #6
    // COND:
    // §DUMMYB1 = §SI AND (§FS_ACC_LAT_ANT = §SI OR §FS_ACC_LAT_POS = §SI) AND §FS_FAM2_MOD_ACC = §SI
    // THEN:
    // *SET §DUMMYN4 = [§SPOR - §DUMMYN3]
    // #7
    // COND:
    // §DUMMYB1 = §SI
    // THEN:
    // *SET *CON-B = §DUMMYN4
    // *SET *CF = #1
    // #8
    // COND:
    // §DUMMYB1 = §SI AND §FS_SUP_LAT_SX = §SI
    // THEN:
    // *SET §DUMMYN1 = [§DUMMYN4 - #10,5]
    // #9
    // COND:
    // §DUMMYB1 = §SI AND §FS_SUP_LAT_SX = §SI
    // THEN:
    // *SET *CON-B =  [§DUMMYN1 / #2]
    // *SET *CF = #2
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VERN_1_COM'));
    vars.DUMMYB1('');
    //#2
    if (vars.get('§FS_ACC_LAT_SX') == vars.get('§SI')) {
        vars.setLG('');
    }
    //#3
    if (vars.get('§FS_FAM2_VARIA') == vars.get('§SI')) {
        vars.DUMMYB1(vars.get('§SI'));
        vars.DUMMYN1(34);
        vars.DUMMYN2(34);
        vars.DUMMYN3(17);
    }
    //#4
    if (vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.DUMMYN4(vars.get('§SPOR') - vars.get('§DUMMYN1'));
    }
    //#5
    if (vars.get('§DUMMYB1') == vars.get('§SI') && (vars.get('§FS_ACC_LAT_ANT') == vars.get('§SI') || vars.get('§FS_ACC_LAT_POS') == vars.get('§SI'))) {
        vars.DUMMYN4(vars.get('§SPOR') - vars.get('§DUMMYN2'));
    }
    //#6
    if (vars.get('§DUMMYB1') == vars.get('§SI') && (vars.get('§FS_ACC_LAT_ANT') == vars.get('§SI') || vars.get('§FS_ACC_LAT_POS') == vars.get('§SI')) && vars.get('§FS_FAM2_MOD_ACC') == vars.get('§SI')) {
        vars.DUMMYN4(vars.get('§SPOR') - vars.get('§DUMMYN3'));
    }
    //#7
    if (vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§DUMMYN4'));
        vars.setCF(1);
    }
    //#8
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§FS_SUP_LAT_SX') == vars.get('§SI')) {
        vars.DUMMYN1(vars.get('§DUMMYN4') - 10.5);
    }
    //#9
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§FS_SUP_LAT_SX') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§DUMMYN1') / 2);
        vars.setCF(2);
    }
    // GENERATED

    return vars.output;
};
