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

export const REG0008799: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008799
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYN4 = #0
    // *SET §DUMMYB1 = ''
    // #2
    // COND:
    // §FS_FAM2_ZENIT = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // *SET §DUMMYN1 = #24
    // *SET §DUMMYN2 = #24
    // *SET §DUMMYN3 = #24
    // #3
    // COND:
    // §FS_FAM2_AZIMUT = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // *SET §DUMMYN1 = #25
    // *SET §DUMMYN2 = #23,1
    // *SET §DUMMYN3 = #21,3
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
    // §DUMMYB1 = §SI AND (§FS_ACC_LAT_ANT = §SI AND §FS_ACC_LAT_POS = §SI)
    // THEN:
    // *SET §DUMMYN4 = [§SPOR - §DUMMYN3]
    // #7
    // THEN:
    // *SET §DUMMYN1 = #0
    // #8
    // COND:
    // §DUMMYN4 > #0
    // THEN:
    // *SET §DUMMYN1 = [§DUMMYN4  * #2 + #34]
    // #9
    // COND:
    // §DUMMYN1 > #0
    // THEN:
    // *SET *CF = [§DUMMYN1 / #100]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYN4(0);
    vars.setDUMMYB1('');
    //#2
    if (vars.get('§FS_FAM2_ZENIT') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
        vars.setDUMMYN1(24);
        vars.setDUMMYN2(24);
        vars.setDUMMYN3(24);
    }
    //#3
    if (vars.get('§FS_FAM2_AZIMUT') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
        vars.setDUMMYN1(25);
        vars.setDUMMYN2(23.1);
        vars.setDUMMYN3(21.3);
    }
    //#4
    if (vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setDUMMYN4(vars.get('§SPOR') - vars.get('§DUMMYN1'));
    }
    //#5
    if (vars.get('§DUMMYB1') == vars.get('§SI') && (vars.get('§FS_ACC_LAT_ANT') == vars.get('§SI') || vars.get('§FS_ACC_LAT_POS') == vars.get('§SI'))) {
        vars.setDUMMYN4(vars.get('§SPOR') - vars.get('§DUMMYN2'));
    }
    //#6
    if (vars.get('§DUMMYB1') == vars.get('§SI') && (vars.get('§FS_ACC_LAT_ANT') == vars.get('§SI') && vars.get('§FS_ACC_LAT_POS') == vars.get('§SI'))) {
        vars.setDUMMYN4(vars.get('§SPOR') - vars.get('§DUMMYN3'));
    }
    //#7
    vars.setDUMMYN1(0);
    //#8
    if (vars.get('§DUMMYN4') > 0) {
        vars.setDUMMYN1(vars.get('§DUMMYN4') * 2 + 34);
    }
    //#9
    if (vars.get('§DUMMYN1') > 0) {
        vars.setCF(vars.get('§DUMMYN1') / 100);
    }
    // GENERATED

    return vars.output;
};
