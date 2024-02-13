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

export const REG0009264: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009264
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYN4 = #0
    // *SET §DUMMYB1 = ''
    // #2
    // COND:
    // §FS_FAM2_VARIA = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // *SET §DUMMYN1 = #28
    // *SET §DUMMYN2 = #32
    // *SET §DUMMYN3 = #15
    // #3
    // COND:
    // §DUMMYB1 = §SI
    // THEN:
    // *SET §DUMMYN4 = [§SPOR - §DUMMYN1]
    // #4
    // COND:
    // §DUMMYB1 = §SI AND (§FS_ACC_LAT_ANT = §SI OR §FS_ACC_LAT_POS = §SI)
    // THEN:
    // *SET §DUMMYN4 = [§SPOR - §DUMMYN2]
    // #5
    // COND:
    // §DUMMYB1 = §SI AND (§FS_ACC_LAT_ANT = §SI OR §FS_ACC_LAT_POS = §SI) AND §FS_FAM2_MOD_ACC = §SI
    // THEN:
    // *SET §DUMMYN4 = [§SPOR - §DUMMYN3]
    // #6
    // COND:
    // §DUMMYN4 > #0
    // THEN:
    // *SET *CF = [§DUMMYN4 / #100]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYN4(0);
    vars.setDUMMYB1('');
    //#2
    if (vars.get('§FS_FAM2_VARIA') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
        vars.setDUMMYN1(28);
        vars.setDUMMYN2(32);
        vars.setDUMMYN3(15);
    }
    //#3
    if (vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setDUMMYN4(vars.get('§SPOR') - vars.get('§DUMMYN1'));
    }
    //#4
    if (vars.get('§DUMMYB1') == vars.get('§SI') && (vars.get('§FS_ACC_LAT_ANT') == vars.get('§SI') || vars.get('§FS_ACC_LAT_POS') == vars.get('§SI'))) {
        vars.setDUMMYN4(vars.get('§SPOR') - vars.get('§DUMMYN2'));
    }
    //#5
    if (vars.get('§DUMMYB1') == vars.get('§SI') && (vars.get('§FS_ACC_LAT_ANT') == vars.get('§SI') || vars.get('§FS_ACC_LAT_POS') == vars.get('§SI')) && vars.get('§FS_FAM2_MOD_ACC') == vars.get('§SI')) {
        vars.setDUMMYN4(vars.get('§SPOR') - vars.get('§DUMMYN3'));
    }
    //#6
    if (vars.get('§DUMMYN4') > 0) {
        vars.setCF(vars.get('§DUMMYN4') / 100);
    }
    // GENERATED

    return vars.output;
};
