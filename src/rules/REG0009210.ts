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

export const REG0009210: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009210
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYB1 = ''
    // *SET §DUMMYN1 = #0
    // *SET *CON-A = '0051'
    // #2
    // COND:
    // §FS_FAM2_TWIST = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #3
    // COND:
    // §FS_FAM2_VARIA = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #4
    // COND:
    // §DUMMYB1 = §SI
    // THEN:
    // *SET §DUMMYN1 = [(§NR_FRANGI - #1) * #20 + #4,2]
    // *SET *CF = #2
    // #5
    // THEN:
    // *SET §DUMMYB1 = ''
    // #6
    // COND:
    // §FS_FAM2_VARIA = §SI AND §FS_ACC_LAT_ANT = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #7
    // COND:
    // §FS_FAM2_VARIA = §SI AND §FS_ACC_LAT_POS = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #8
    // COND:
    // §DUMMYB1 = §SI
    // THEN:
    // *SET §DUMMYN1 = [(§NR_FRANGI - #1) * #20 + #3,6]
    // *SET *CF = #2
    // #9
    // COND:
    // §DUMMYN1 > #0
    // THEN:
    // *SET *CON-B = §DUMMYN1
    // #10
    // COND:
    // §FS_NO_COM = §SI
    // THEN:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYB1('');
    vars.setDUMMYN1(0);
    vars.setCON_A('0051');
    //#2
    if (vars.get('§FS_FAM2_TWIST') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    //#3
    if (vars.get('§FS_FAM2_VARIA') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    //#4
    if (vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setDUMMYN1((vars.get('§NR_FRANGI') - 1) * 20 + 4.2);
        vars.setCF(2);
    }
    //#5
    vars.setDUMMYB1('');
    //#6
    if (vars.get('§FS_FAM2_VARIA') == vars.get('§SI') && vars.get('§FS_ACC_LAT_ANT') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    //#7
    if (vars.get('§FS_FAM2_VARIA') == vars.get('§SI') && vars.get('§FS_ACC_LAT_POS') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    //#8
    if (vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setDUMMYN1((vars.get('§NR_FRANGI') - 1) * 20 + 3.6);
        vars.setCF(2);
    }
    //#9
    if (vars.get('§DUMMYN1') > 0) {
        vars.setCON_B(vars.get('§DUMMYN1'));
    }
    //#10
    if (vars.get('§FS_NO_COM') == vars.get('§SI')) {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
