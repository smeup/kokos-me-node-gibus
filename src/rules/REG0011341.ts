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

export const REG0011341: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011341
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #1
    // *SET §DUMMYB1 = ''
    // *SET §DUMMYB2 = ''
    // #2
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #3
    // COND:
    // §LA_ADD_MUR_ANT2 = '02'
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #4
    // COND:
    // §DUMMYB1 = §SI AND §DUMMYB2 = §SI
    // #5
    // THEN:
    // *SET §DUMMYB1 = ''
    // *SET §DUMMYB2 = ''
    // #6
    // COND:
    // §FS_FAM2_AZIMUT = §SI OR §FS_FAM2_VARIA = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #7
    // COND:
    // §FS_ANG_AN2_ALA = §SI
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #8
    // COND:
    // §DUMMYB1 = §SI AND §DUMMYB2 = §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(1);
    vars.setDUMMYB1('');
    vars.setDUMMYB2('');
    //#2
    vars.setDUMMYB1(vars.get('§SI'));
    //#3
    if (vars.get('§LA_ADD_MUR_ANT2') == '02') {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    //#4
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§DUMMYB2') == vars.get('§SI')) {
    }
    //#5
    vars.setDUMMYB1('');
    vars.setDUMMYB2('');
    //#6
    if (vars.get('§FS_FAM2_AZIMUT') == vars.get('§SI') || vars.get('§FS_FAM2_VARIA') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    //#7
    if (vars.get('§FS_ANG_AN2_ALA') == vars.get('§SI')) {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    //#8
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§DUMMYB2') == vars.get('§SI')) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
