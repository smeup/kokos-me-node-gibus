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

export const REG0008994: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008994
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_ACC_LAT_SX = §SI
    // THEN:
    // *SET *LG = ''
    // #3
    // COND:
    // §FS_FAM2_AZIMUT = §SI
    // THEN:
    // *SET *CF = #1
    // *SET §DUMMYN1 = #34
    // *SET §DUMMYN2 = #25,5
    // *SET §DUMMYN3 = #17
    // #4
    // THEN:
    // *SET *CON-B = [§SPOR - §DUMMYN1]
    // #5
    // COND:
    // §FS_ACC_LAT_ANT = §SI OR §FS_ACC_LAT_POS = §SI
    // THEN:
    // *SET *CON-B = [§SPOR - §DUMMYN2]
    // #6
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
    if (vars.get('§FS_ACC_LAT_SX') == vars.get('§SI')) {
        vars.setLG('');
    }
    //#3
    if (vars.get('§FS_FAM2_AZIMUT') == vars.get('§SI')) {
        vars.setCF(1);
        vars.setDUMMYN1(34);
        vars.setDUMMYN2(25.5);
        vars.setDUMMYN3(17);
    }
    //#4
    vars.setCON_B(vars.get('§SPOR') - vars.get('§DUMMYN1'));
    //#5
    if (vars.get('§FS_ACC_LAT_ANT') == vars.get('§SI') || vars.get('§FS_ACC_LAT_POS') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§SPOR') - vars.get('§DUMMYN2'));
    }
    //#6
    if (vars.get('§FS_ACC_LAT_ANT') == vars.get('§SI') && vars.get('§FS_ACC_LAT_POS') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§SPOR') - vars.get('§DUMMYN3'));
    }
    // GENERATED

    return vars.output;
};
