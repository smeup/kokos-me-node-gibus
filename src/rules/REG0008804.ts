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

export const REG0008804: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008804
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
    // *SET §DUMMYN1 = #41,1
    // *SET §DUMMYN2 = #41,1
    // *SET §DUMMYN3 = #41,1
    // #3
    // COND:
    // §FS_FAM2_AZIMUT = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // *SET §DUMMYN1 = #48,5
    // *SET §DUMMYN2 = #46,6
    // *SET §DUMMYN3 = #44,8
    // #4
    // COND:
    // §DUMMYB1 = §SI
    // THEN:
    // *SET *CF = #2
    // *SET *CON-B = [§SPOR - §DUMMYN1]
    // #5
    // COND:
    // §DUMMYB1 = §SI AND (§FS_ACC_LAT_ANT = §SI OR §FS_ACC_LAT_POS = §SI)
    // THEN:
    // *SET *CF = #2
    // *SET *CON-B = [§SPOR - §DUMMYN2]
    // #6
    // COND:
    // §DUMMYB1 = §SI AND (§FS_ACC_LAT_ANT = §SI AND §FS_ACC_LAT_POS = §SI)
    // THEN:
    // *SET *CF = #2
    // *SET *CON-B = [§SPOR - §DUMMYN3]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VERN_1_COM'));
    vars.setDUMMYB1('');
    //#2
    if (vars.get('§FS_FAM2_ZENIT') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
        vars.setDUMMYN1(41.1);
        vars.setDUMMYN2(41.1);
        vars.setDUMMYN3(41.1);
    }
    //#3
    if (vars.get('§FS_FAM2_AZIMUT') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
        vars.setDUMMYN1(48.5);
        vars.setDUMMYN2(46.6);
        vars.setDUMMYN3(44.8);
    }
    //#4
    if (vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setCF(2);
        vars.setCON_B(vars.get('§SPOR') - vars.get('§DUMMYN1'));
    }
    //#5
    if (vars.get('§DUMMYB1') == vars.get('§SI') && (vars.get('§FS_ACC_LAT_ANT') == vars.get('§SI') || vars.get('§FS_ACC_LAT_POS') == vars.get('§SI'))) {
        vars.setCF(2);
        vars.setCON_B(vars.get('§SPOR') - vars.get('§DUMMYN2'));
    }
    //#6
    if (vars.get('§DUMMYB1') == vars.get('§SI') && (vars.get('§FS_ACC_LAT_ANT') == vars.get('§SI') && vars.get('§FS_ACC_LAT_POS') == vars.get('§SI'))) {
        vars.setCF(2);
        vars.setCON_B(vars.get('§SPOR') - vars.get('§DUMMYN3'));
    }
    // GENERATED

    return vars.output;
};
