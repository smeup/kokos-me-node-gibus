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

export const REG0012434: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012434
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // THEN:
    // *SET §DUMMYB1 = ''
    // #3
    // COND:
    // §FS_LED_RGB = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #4
    // COND:
    // §FS_FAM2_VARIA = §SI AND §DUMMYB1 = §SI
    // THEN:
    // *SET *CF = #3
    // #5
    // COND:
    // §FS_FAM2_ZENIT = §SI AND §DUMMYB1 = §SI
    // THEN:
    // *SET *CF = #2
    // #6
    // COND:
    // §FS_FAM2_AZIMUT = §SI AND §DUMMYB1 = §SI
    // THEN:
    // *SET *CF = #2
    // #7
    // COND:
    // §FS_FAM2_TWIST = §SI AND §DUMMYB1 = §SI
    // THEN:
    // *SET *CF = #2
    // #8
    // THEN:
    // *SET §DUMMYB1 = ''
    // #9
    // COND:
    // §FS_LED_PER = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #10
    // COND:
    // §FS_FAM2_VARIA = §SI AND §DUMMYB1 = §SI
    // THEN:
    // *SET *CF = #4
    // #11
    // COND:
    // §FS_FAM2_ZENIT = §SI AND §DUMMYB1 = §SI
    // THEN:
    // *SET *CF = #2
    // #12
    // COND:
    // §FS_FAM2_AZIMUT = §SI AND §DUMMYB1 = §SI
    // THEN:
    // *SET *CF = #2
    // #13
    // COND:
    // §FS_FAM2_TWIST = §SI AND §DUMMYB1 = §SI
    // THEN:
    // *SET *CF = #4
    // #14
    // COND:
    // §FS_PAS_CAV_T01 = §SI
    // THEN:
    // *SET *CM = '111420'
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    //#2
    vars.setDUMMYB1('');
    //#3
    if (vars.get('§FS_LED_RGB') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    //#4
    if (vars.get('§FS_FAM2_VARIA') == vars.get('§SI') && vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setCF(3);
    }
    //#5
    if (vars.get('§FS_FAM2_ZENIT') == vars.get('§SI') && vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setCF(2);
    }
    //#6
    if (vars.get('§FS_FAM2_AZIMUT') == vars.get('§SI') && vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setCF(2);
    }
    //#7
    if (vars.get('§FS_FAM2_TWIST') == vars.get('§SI') && vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setCF(2);
    }
    //#8
    vars.setDUMMYB1('');
    //#9
    if (vars.get('§FS_LED_PER') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    //#10
    if (vars.get('§FS_FAM2_VARIA') == vars.get('§SI') && vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setCF(4);
    }
    //#11
    if (vars.get('§FS_FAM2_ZENIT') == vars.get('§SI') && vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setCF(2);
    }
    //#12
    if (vars.get('§FS_FAM2_AZIMUT') == vars.get('§SI') && vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setCF(2);
    }
    //#13
    if (vars.get('§FS_FAM2_TWIST') == vars.get('§SI') && vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setCF(4);
    }
    //#14
    if (vars.get('§FS_PAS_CAV_T01') == vars.get('§SI')) {
        vars.setCM('111420');
    }
    // GENERATED

    return vars.output;
};
