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

export const REG0012963: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012963
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYB1 = ''
    // *SET §DUMMYB2 = ''
    // #2
    // THEN:
    // *SET §DUMMYN1 = #0
    // *SET §DUMMYN2 = #0
    // #3
    // COND:
    // §FS_FAM2_TWIST = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #4
    // COND:
    // §FS_FAM2_VARIA = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #5
    // COND:
    // §TI_STRIP = '02' OR §TI_STRIP = '03'
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #6
    // COND:
    // §FS_LED_RGB_FRB = §SI
    // THEN:
    // *SET §DUMMYN2 = [ §DUMMYN1 + #1 ]
    // #7
    // COND:
    // §FS_LED_RGB_FRB = §SI
    // THEN:
    // *SET §DUMMYN1 = §DUMMYN2
    // #8
    // COND:
    // §FS_LED_RGB_FRA = §SI
    // THEN:
    // *SET §DUMMYN2 = [ §DUMMYN1 + #1 ]
    // #9
    // COND:
    // §FS_LED_RGB_FRA = §SI
    // THEN:
    // *SET §DUMMYN1 = §DUMMYN2
    // #10
    // COND:
    // §FS_LED_RGB_SX = §SI
    // THEN:
    // *SET §DUMMYN2 = [ §DUMMYN1 + #1 ]
    // #11
    // COND:
    // §FS_LED_RGB_SX = §SI
    // THEN:
    // *SET §DUMMYN1 = §DUMMYN2
    // #12
    // COND:
    // §FS_LED_RGB_DX = §SI
    // THEN:
    // *SET §DUMMYN2 = [ §DUMMYN1 + #1 ]
    // #13
    // COND:
    // §FS_LED_RGB_DX = §SI
    // THEN:
    // *SET §DUMMYN1 = §DUMMYN2
    // #14
    // COND:
    // §DUMMYB1 = §SI AND §DUMMYB2 = §SI
    // THEN:
    // *SET *CF = §DUMMYN1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYB1('');
    vars.setDUMMYB2('');
    //#2
    vars.setDUMMYN1(0);
    vars.setDUMMYN2(0);
    //#3
    if (vars.get('§FS_FAM2_TWIST') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    //#4
    if (vars.get('§FS_FAM2_VARIA') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    //#5
    if (vars.get('§TI_STRIP') == '02' || vars.get('§TI_STRIP') == '03') {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    //#6
    if (vars.get('§FS_LED_RGB_FRB') == vars.get('§SI')) {
        vars.setDUMMYN2(vars.get('§DUMMYN1') + 1);
    }
    //#7
    if (vars.get('§FS_LED_RGB_FRB') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§DUMMYN2'));
    }
    //#8
    if (vars.get('§FS_LED_RGB_FRA') == vars.get('§SI')) {
        vars.setDUMMYN2(vars.get('§DUMMYN1') + 1);
    }
    //#9
    if (vars.get('§FS_LED_RGB_FRA') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§DUMMYN2'));
    }
    //#10
    if (vars.get('§FS_LED_RGB_SX') == vars.get('§SI')) {
        vars.setDUMMYN2(vars.get('§DUMMYN1') + 1);
    }
    //#11
    if (vars.get('§FS_LED_RGB_SX') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§DUMMYN2'));
    }
    //#12
    if (vars.get('§FS_LED_RGB_DX') == vars.get('§SI')) {
        vars.setDUMMYN2(vars.get('§DUMMYN1') + 1);
    }
    //#13
    if (vars.get('§FS_LED_RGB_DX') == vars.get('§SI')) {
        vars.setDUMMYN1(vars.get('§DUMMYN2'));
    }
    //#14
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§DUMMYB2') == vars.get('§SI')) {
        vars.setCF(vars.get('§DUMMYN1'));
    }
    // GENERATED

    return vars.output;
};
