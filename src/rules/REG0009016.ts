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

export const REG0009016: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009016
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = §VERN_1_COM
    // *SET §DUMMYB1 = ''
    // #2
    // COND:
    // §FS_FAM2_AZIMUT = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // *SET §DUMMYN1 = #25
    // *SET §DUMMYN2 = #16,5
    // *SET §DUMMYN3 = #8
    // #3
    // COND:
    // §DUMMYB1 = §SI
    // THEN:
    // *SET *CON-B = [§SPOR - §DUMMYN1]
    // *SET *CF = #1
    // #4
    // COND:
    // §DUMMYB1 = §SI AND (§FS_ACC_LAT_ANT = §SI OR §FS_ACC_LAT_POS = §SI)
    // THEN:
    // *SET *CON-B = [§SPOR - §DUMMYN2]
    // #5
    // COND:
    // §DUMMYB1 = §SI AND (§FS_ACC_LAT_ANT = §SI AND §FS_ACC_LAT_POS = §SI)
    // THEN:
    // *SET *CON-B = [§SPOR - §DUMMYN3]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VERN_1_COM'));
    vars.setDUMMYB1('');
    //#2
    if (vars.get('§FS_FAM2_AZIMUT') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
        vars.setDUMMYN1(25);
        vars.setDUMMYN2(16.5);
        vars.setDUMMYN3(8);
    }
    //#3
    if (vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setCON_B(vars.get('[§SPOR - §DUMMYN1]'));
        vars.setCF(1);
    }
    //#4
    if (vars.get('§DUMMYB1') == vars.get('§SI') && (vars.get('§FS_ACC_LAT_ANT') == vars.get('§SI') || vars.get('§FS_ACC_LAT_POS') == vars.get('§SI'))) {
        vars.setCON_B(vars.get('[§SPOR - §DUMMYN2]'));
    }
    //#5
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§FS_ACC_LAT_ANT') == vars.get('§SI') && vars.get('§FS_ACC_LAT_POS') == vars.get('§SI')) {
        vars.setCON_B(vars.get('[§SPOR - §DUMMYN3]'));
    }
    // GENERATED

    return vars.output;
};
