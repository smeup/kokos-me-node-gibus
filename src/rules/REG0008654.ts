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

export const REG0008654: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008654
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_FAM2_JOY = §SI
    // THEN:
    // *SET *CF = #1
    // *SET §DUMMYN1 = #26
    // *SET §DUMMYN2 = #19,5
    // *SET §DUMMYN3 = #13
    // #3
    // COND:
    // §FS_FAM2_ZENIT = §SI
    // THEN:
    // *SET *CF = #1
    // *SET §DUMMYN1 = #24,9
    // *SET §DUMMYN2 = #24,9
    // *SET §DUMMYN3 = #24,9
    // #4
    // COND:
    // §FS_FAM2_AZIMUT = §SI
    // THEN:
    // *SET *CF = #1
    // *SET §DUMMYN1 = #29
    // *SET §DUMMYN2 = #27,1
    // *SET §DUMMYN3 = #25,3
    // #5
    // THEN:
    // *SET *CON-B = [§SPOR - §DUMMYN1]
    // #6
    // COND:
    // §FS_ACC_LAT_ANT = §SI OR §FS_ACC_LAT_POS = §SI
    // THEN:
    // *SET *CON-B = [§SPOR - §DUMMYN2]
    // #7
    // COND:
    // §FS_ACC_LAT_ANT = §SI AND §FS_ACC_LAT_POS = §SI
    // THEN:
    // *SET *CON-B = [§SPOR - §DUMMYN3]
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('§VERN_1_COM'));
    vars.setCF(0);
    //#2
    if (vars.get('§FS_FAM2_JOY') == vars.get('§SI')) {
        vars.setCF(1);
        vars.setDUMMYN1(26);
        vars.setDUMMYN2(19.5);
        vars.setDUMMYN3(13);
    }
    //#3
    if (vars.get('§FS_FAM2_ZENIT') == vars.get('§SI')) {
        vars.setCF(1);
        vars.setDUMMYN1(24.9);
        vars.setDUMMYN2(24.9);
        vars.setDUMMYN3(24.9);
    }
    //#4
    if (vars.get('§FS_FAM2_AZIMUT') == vars.get('§SI')) {
        vars.setCF(1);
        vars.setDUMMYN1(29);
        vars.setDUMMYN2(27.1);
        vars.setDUMMYN3(25.3);
    }
    //#5
    vars.setCON_B(vars.get('§SPOR') - vars.get('§DUMMYN1'));
    //#6
    if ((vars.get('§FS_ACC_LAT_ANT') == vars.get('§SI')) || (vars.get('§FS_ACC_LAT_POS') == vars.get('§SI'))) {
        vars.setCON_B(vars.get('§SPOR') - vars.get('§DUMMYN2'));
    }
    //#7
    if ((vars.get('§FS_ACC_LAT_ANT') == vars.get('§SI')) && (vars.get('§FS_ACC_LAT_POS') == vars.get('§SI'))) {
        vars.setCON_B(vars.get('§SPOR') - vars.get('§DUMMYN3'));
    }
    // GENERATED

    return vars.output;
};
