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

export const REG0011174: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011174
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYB1 = ''
    // #2
    // COND:
    // §VR_LAM_ABB <> ''
    // THEN:
    // *SET *CON-A = §VR_LAM_ABB
    // ELSE:
    // *SET *CON-A = §VERN_1_COM
    // #3
    // COND:
    // §FS_FAM2_AZIMUT = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // *SET §DUMMYN1 = #21,6
    // *SET §DUMMYN2 = #19,7
    // *SET §DUMMYN3 = #17,8
    // #4
    // COND:
    // §DUMMYB1 = §SI
    // THEN:
    // *SET *CF = #1
    // *SET *CON-B = [ §LARG - §DUMMYN1]
    // #5
    // COND:
    // §DUMMYB1 = §SI AND (§FS_ACC_LAT_SX = §SI OR §FS_ACC_LAT_DX = §SI)
    // THEN:
    // *SET *CF = #1
    // *SET *CON-B = [ §LARG - §DUMMYN2]
    // #6
    // COND:
    // §DUMMYB1 = §SI AND (§FS_ACC_LAT_SX = §SI AND §FS_ACC_LAT_DX = §SI)
    // THEN:
    // *SET *CF = #1
    // *SET *CON-B = [ §LARG - §DUMMYN3]
    // #7
    // COND:
    // §VR_ABB_T01 <> ''
    // THEN:
    // *SET *CON-A = §VR_ABB_T01
    // #8
    // COND:
    // §VERN_1_COM = '0133'
    // THEN:
    // *SET *CON-A = '0230'
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYB1('');
    //#2
    if (vars.get('§VR_LAM_ABB') != '') {
        vars.setCON_A(vars.get('§VR_LAM_ABB'));
    } else {
        vars.setCON_A(vars.get('§VERN_1_COM'));
    }
    //#3
    if (vars.get('§FS_FAM2_AZIMUT') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
        vars.setDUMMYN1(21.6);
        vars.setDUMMYN2(19.7);
        vars.setDUMMYN3(17.8);
    }
    //#4
    if (vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setCF(1);
        vars.setCON_B(vars.get('§LARG') - vars.get('§DUMMYN1'));
    }
    //#5
    if (vars.get('§DUMMYB1') == vars.get('§SI') && (vars.get('§FS_ACC_LAT_SX') == vars.get('§SI') || vars.get('§FS_ACC_LAT_DX') == vars.get('§SI'))) {
        vars.setCF(1);
        vars.setCON_B(vars.get('§LARG') - vars.get('§DUMMYN2'));
    }
    //#6
    if (vars.get('§DUMMYB1') == vars.get('§SI') && (vars.get('§FS_ACC_LAT_SX') == vars.get('§SI') && vars.get('§FS_ACC_LAT_DX') == vars.get('§SI'))) {
        vars.setCF(1);
        vars.setCON_B(vars.get('§LARG') - vars.get('§DUMMYN3'));
    }
    //#7
    if (vars.get('§VR_ABB_T01') != '') {
        vars.setCON_A(vars.get('§VR_ABB_T01'));
    }
    //#8
    if (vars.get('§VERN_1_COM') == '0133') {
        vars.setCON_A('0230');
    }
    // GENERATED

    return vars.output;
};
