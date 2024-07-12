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

export const REG0008927: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008927
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = '0051'
    // *SET *CON-B = #22
    // *SET §DUMMYB1 = ''
    // #2
    // COND:
    // §FS_FAM2_ZENIT = §SI AND §LA_COM = 'ANT'
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §FS_ACC_LAT_SX = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #4
    // COND:
    // §FS_STA_MUR_ANT1 = §SI
    // THEN:
    // *SET §DUMMYB1 = ''
    // #5
    // COND:
    // §DUMMYB1 = §SI
    // THEN:
    // *SET *CON-B = #18,5
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A('0051');
    vars.setCON_B(22);
    vars.setDUMMYB1('');
    //#2
    if (vars.get('§FS_FAM2_ZENIT') == vars.get('§SI') && vars.get('§LA_COM') == 'ANT') {
        vars.setCF(1);
    }
    //#3
    if (vars.get('§FS_ACC_LAT_SX') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    //#4
    if (vars.get('§FS_STA_MUR_ANT1') == vars.get('§SI')) {
        vars.setDUMMYB1('');
    }
    //#5
    if (vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setCON_B(18.5);
    }
    // GENERATED

    return vars.output;
};
