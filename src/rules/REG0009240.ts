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

export const REG0009240: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009240
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = §VERN_1_COM
    // *SET §DUMMYB1 = ''
    // #2
    // COND:
    // §FS_FAM2_VARIA = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // *SET §DUMMYN1 = #25
    // *SET §DUMMYN2 = #8
    // #3
    // COND:
    // §DUMMYB1 = §SI
    // THEN:
    // *SET §DUMMYN4 = [§SPOR - §DUMMYN1]
    // #4
    // COND:
    // §DUMMYB1 = §SI AND §FS_FAM2_MOD_ACC = §SI AND §FS_ACC_LAT_ANT = §SI
    // THEN:
    // *SET §DUMMYN4 = [§SPOR - §DUMMYN2]
    // #5
    // COND:
    // §DUMMYB1 = §SI AND §FS_FAM2_MOD_ACC = §SI AND §FS_ACC_LAT_POS = §SI
    // THEN:
    // *SET §DUMMYN4 = [§SPOR - §DUMMYN2]
    // #6
    // COND:
    // §DUMMYB1 = §SI
    // THEN:
    // *SET *CON-B = §DUMMYN4
    // *SET *CF = #1
    // #7
    // COND:
    // §FS_ACC_LAT_SX = §SI
    // THEN:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VERN_1_COM'));
    vars.setDUMMYB1('');
    //#2
    if (vars.get('§FS_FAM2_VARIA') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
        vars.setDUMMYN1(25);
        vars.setDUMMYN2(8);
    }
    //#3
    if (vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setDUMMYN4(vars.get('§SPOR') - vars.get('§DUMMYN1'));
    }
    //#4
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§FS_FAM2_MOD_ACC') == vars.get('§SI') && vars.get('§FS_ACC_LAT_ANT') == vars.get('§SI')) {
        vars.setDUMMYN4(vars.get('§SPOR') - vars.get('§DUMMYN2'));
    }
    //#5
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§FS_FAM2_MOD_ACC') == vars.get('§SI') && vars.get('§FS_ACC_LAT_POS') == vars.get('§SI')) {
        vars.setDUMMYN4(vars.get('§SPOR') - vars.get('§DUMMYN2'));
    }
    //#6
    if (vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§DUMMYN4'));
        vars.setCF(1);
    }
    //#7
    if (vars.get('§FS_ACC_LAT_SX') == vars.get('§SI')) {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
