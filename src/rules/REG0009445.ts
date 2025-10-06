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

export const REG0009445: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009445
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = §VR_LAME
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_FAM2_JOY = §SI
    // THEN:
    // *SET *CF = #1
    // *SET §DUMMYN1 = #70
    // *SET §DUMMYN2 = #70
    // *SET §DUMMYN3 = #70
    // #3
    // THEN:
    // *SET *CON-B = [§LARG - §DUMMYN1]
    // #4
    // COND:
    // §FS_ACC_LAT_SX = §SI OR §FS_ACC_LAT_DX = §SI
    // THEN:
    // *SET *CON-B = [§LARG - §DUMMYN2]
    // #5
    // COND:
    // §FS_ACC_LAT_SX = §SI AND §FS_ACC_LAT_DX = §SI
    // THEN:
    // *SET *CON-B = [§LARG - §DUMMYN3]
    // #6
    // COND:
    // §L_CAN_T01 > #0
    // THEN:
    // *SET *CON-B = §L_CAN_T01
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('§VR_LAME'));
    vars.setCF(0);
    //#2
    if (vars.get('§FS_FAM2_JOY') == vars.get('§SI')) {
        vars.setCF(1);
        vars.setDUMMYN1(70);
        vars.setDUMMYN2(70);
        vars.setDUMMYN3(70);
    }
    //#3
    vars.setCON_B(vars.get('§LARG') - vars.get('§DUMMYN1'));
    //#4
    if (vars.get('§FS_ACC_LAT_SX') == vars.get('§SI') || vars.get('§FS_ACC_LAT_DX') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§LARG') - vars.get('§DUMMYN2'));
    }
    //#5
    if (vars.get('§FS_ACC_LAT_SX') == vars.get('§SI') && vars.get('§FS_ACC_LAT_DX') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§LARG') - vars.get('§DUMMYN3'));
    }
    //#6
    if (vars.get('§L_CAN_T01') > 0) {
        vars.setCON_B(vars.get('§L_CAN_T01'));
    }
    // GENERATED

    return vars.output;
};
