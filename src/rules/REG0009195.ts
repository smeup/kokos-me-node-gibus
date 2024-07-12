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

export const REG0009195: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009195
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // *SET *CF = #0
    // *SET §DUMMYB1 = ''
    // #2
    // COND:
    // §FS_FAM2_VARIA = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // *SET §DUMMYN1 = #34
    // *SET §DUMMYN2 = #38
    // *SET §DUMMYN3 = #21
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
    // §DUMMYB1 = §SI AND (§FS_ACC_LAT_ANT = §SI OR §FS_ACC_LAT_POS = §SI) AND §FS_FAM2_MOD_ACC = §SI
    // THEN:
    // *SET *CON-B = [§SPOR - §DUMMYN3]
    // #6
    // COND:
    // §DUMMYB1 = §SI AND (§FS_ACC_LAT_ANT = §SI AND §FS_ACC_LAT_POS = §SI) AND §FS_FAM2_MOD_ACC = §SI
    // THEN:
    // *SET *CON-B = [§SPOR - #25]
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('§VERN_1_COM'));
    vars.setCF(0);
    vars.setDUMMYB1('');
    //#2
    if (vars.get('§FS_FAM2_VARIA') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
        vars.setDUMMYN1(34);
        vars.setDUMMYN2(38);
        vars.setDUMMYN3(21);
    }
    //#3
    if (vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§SPOR') - vars.get('§DUMMYN1'));
        vars.setCF(1);
    }
    //#4
    if (vars.get('§DUMMYB1') == vars.get('§SI') && (vars.get('§FS_ACC_LAT_ANT') == vars.get('§SI') || vars.get('§FS_ACC_LAT_POS') == vars.get('§SI'))) {
        vars.setCON_B(vars.get('§SPOR') - vars.get('§DUMMYN2'));
    }
    //#5
    if (vars.get('§DUMMYB1') == vars.get('§SI') && (vars.get('§FS_ACC_LAT_ANT') == vars.get('§SI') || vars.get('§FS_ACC_LAT_POS') == vars.get('§SI')) && vars.get('§FS_FAM2_MOD_ACC') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§SPOR') - vars.get('§DUMMYN3'));
    }
    //#6
    if (vars.get('§DUMMYB1') == vars.get('§SI') && (vars.get('§FS_ACC_LAT_ANT') == vars.get('§SI') && vars.get('§FS_ACC_LAT_POS') == vars.get('§SI')) && vars.get('§FS_FAM2_MOD_ACC') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§SPOR') - 25);
    }
    // GENERATED

    return vars.output;
};
