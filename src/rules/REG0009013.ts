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

export const REG0009013: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009013
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = §VERN_1_COM
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
    // *SET §DUMMYN1 = #36,4
    // *SET §DUMMYN2 = #34,3
    // *SET §DUMMYN3 = #32,2
    // #4
    // COND:
    // §DUMMYB1 = §SI
    // THEN:
    // *SET *CON-B = [§SPOR - §DUMMYN1]
    // *SET *CF = #1
    // #5
    // COND:
    // §DUMMYB1 = §SI AND (§FS_ACC_LAT_ANT = §SI OR §FS_ACC_LAT_POS = §SI)
    // THEN:
    // *SET *CON-B = [§SPOR - §DUMMYN2]
    // *SET *CF = #1
    // #6
    // COND:
    // §DUMMYB1 = §SI AND (§FS_ACC_LAT_ANT = §SI AND §FS_ACC_LAT_POS = §SI)
    // THEN:
    // *SET *CON-B = [§SPOR - §DUMMYN3]
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VERN_1_COM'));
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
        vars.setDUMMYN1(36.4);
        vars.setDUMMYN2(34.3);
        vars.setDUMMYN3(32.2);
    }
    //#4
    if (vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§SPOR') - vars.get('§DUMMYN1'));
        vars.setCF(1);
    }
    //#5
    if (vars.get('§DUMMYB1') == vars.get('§SI') && (vars.get('§FS_ACC_LAT_ANT') == vars.get('§SI') || vars.get('§FS_ACC_LAT_POS') == vars.get('§SI'))) {
        vars.setCON_B(vars.get('§SPOR') - vars.get('§DUMMYN2'));
        vars.setCF(1);
    }
    //#6
    if (vars.get('§DUMMYB1') == vars.get('§SI') && (vars.get('§FS_ACC_LAT_ANT') == vars.get('§SI') && vars.get('§FS_ACC_LAT_POS') == vars.get('§SI'))) {
        vars.setCON_B(vars.get('§SPOR') - vars.get('§DUMMYN3'));
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
