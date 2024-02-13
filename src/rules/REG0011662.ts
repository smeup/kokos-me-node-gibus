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

export const REG0011662: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011662
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET §DUMMYN1 = #0
    // *SET §DUMMYN2 = #0
    // *SET §DUMMYN3 = #0
    // *SET §DUMMYN4 = #0
    // #2
    // THEN:
    // *SET §DUMMYN5 = #0
    // *SET §DUMMYN6 = #0
    // #3
    // COND:
    // §FS_LED_RGB_FRB = §SI
    // ELSE:
    // *SET *LG = ''
    // #4
    // COND:
    // §FS_FAM2_TWIST = §SI OR §FS_FAM2_VARIA = §SI
    // ELSE:
    // *SET *LG = ''
    // #5
    // THEN:
    // *SET §DUMMYN7 = §GRO_LED_IN_L
    // *SET *CON-A = '0000'
    // *SET §DUMMYB1 = §SI
    // #6
    // COND:
    // §TI_STRIP = '01'
    // THEN:
    // *SET  §DUMMYN1 = #300
    // *SET  §DUMMYN2 = #350
    // *SET  §DUMMYN3 = #400
    // *SET  §DUMMYN4 = #500
    // #7
    // COND:
    // §TI_STRIP = '01'
    // THEN:
    // *SET  §DUMMYN5 = #600
    // *SET  §DUMMYN6 = #700
    // #8
    // COND:
    // §TI_STRIP = '02' OR §TI_STRIP = '03'
    // THEN:
    // *SET §DUMMYN2 = #350
    // *SET §DUMMYN4 = #500
    // *SET §DUMMYN6 = #700
    // #9
    // COND:
    // §DUMMYB1 = §SI AND §DUMMYN7 <= §DUMMYN1
    // THEN:
    // *SET *CF = #0,5
    // *SET *CON-B = #600
    // *SET §DUMMYB1 = ''
    // #10
    // COND:
    // §DUMMYB1 = §SI AND §DUMMYN7 <= §DUMMYN2
    // THEN:
    // *SET *CF = #0,5
    // *SET *CON-B = #700
    // *SET §DUMMYB1 = ''
    // #11
    // COND:
    // §DUMMYB1 = §SI AND §DUMMYN7 <= §DUMMYN3
    // THEN:
    // *SET *CF = #1
    // *SET *CON-B = #400
    // *SET §DUMMYB1 = ''
    // #12
    // COND:
    // §DUMMYB1 = §SI AND §DUMMYN7 <= §DUMMYN4
    // THEN:
    // *SET *CF = #1
    // *SET *CON-B = #500
    // *SET §DUMMYB1 = ''
    // #13
    // COND:
    // §DUMMYB1 = §SI AND §DUMMYN7 <= §DUMMYN5
    // THEN:
    // *SET *CF = #1
    // *SET *CON-B = #600
    // *SET §DUMMYB1 = ''
    // #14
    // COND:
    // §DUMMYB1 = §SI AND §DUMMYN7 <= §DUMMYN6
    // THEN:
    // *SET *CF = #1
    // *SET *CON-B = #700
    // *SET §DUMMYB1 = ''
    // """
    // RESPONSE:
    Traduzione:
    //#1
    vars.setDUMMYN1(0);
    vars.setDUMMYN2(0);
    vars.setDUMMYN3(0);
    vars.setDUMMYN4(0);
    //#2
    vars.setDUMMYN5(0);
    vars.setDUMMYN6(0);
    //#3
    if (vars.get('§FS_LED_RGB_FRB') == vars.get('§SI')) {
    } else {
        vars.setLG('');
    }
    //#4
    if (vars.get('§FS_FAM2_TWIST') == vars.get('§SI') || vars.get('§FS_FAM2_VARIA') == vars.get('§SI')) {
    } else {
        vars.setLG('');
    }
    //#5
    vars.setDUMMYN7(vars.get('§GRO_LED_IN_L'));
    vars.setCON_A('0000');
    vars.setDUMMYB1(vars.get('§SI'));
    //#6
    if (vars.get('§TI_STRIP') == '01') {
        vars.setDUMMYN1(300);
        vars.setDUMMYN2(350);
        vars.setDUMMYN3(400);
        vars.setDUMMYN4(500);
    }
    //#7
    if (vars.get('§TI_STRIP') == '01') {
        vars.setDUMMYN5(600);
        vars.setDUMMYN6(700);
    }
    //#8
    if (vars.get('§TI_STRIP') == '02' || vars.get('§TI_STRIP') == '03') {
        vars.setDUMMYN2(350);
        vars.setDUMMYN4(500);
        vars.setDUMMYN6(700);
    }
    //#9
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§DUMMYN7') <= vars.get('§DUMMYN1')) {
        vars.setCF(0.5);
        vars.setCON_B(600);
        vars.setDUMMYB1('');
    }
    //#10
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§DUMMYN7') <= vars.get('§DUMMYN2')) {
        vars.setCF(0.5);
        vars.setCON_B(700);
        vars.setDUMMYB1('');
    }
    //#11
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§DUMMYN7') <= vars.get('§DUMMYN3')) {
        vars.setCF(1);
        vars.setCON_B(400);
        vars.setDUMMYB1('');
    }
    //#12
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§DUMMYN7') <= vars.get('§DUMMYN4')) {
        vars.setCF(1);
        vars.setCON_B(500);
        vars.setDUMMYB1('');
    }
    //#13
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§DUMMYN7') <= vars.get('§DUMMYN5')) {
        vars.setCF(1);
        vars.setCON_B(600);
        vars.setDUMMYB1('');
    }
    //#14
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§DUMMYN7') <= vars.get('§DUMMYN6')) {
        vars.setCF(1);
        vars.setCON_B(700);
        vars.setDUMMYB1('');
    }
    ###
    // GENERATED

    return vars.output;
};
