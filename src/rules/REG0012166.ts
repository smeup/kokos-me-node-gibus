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

export const REG0012166: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012166
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYB1 = ''
    // *SET §DUMMYB2 = ''
    // #2
    // COND:
    // §FS_ADD_LAT_SX = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #3
    // COND:
    // §FS_FAM2_TWIST = §SI AND §SPOR >= #530
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #4
    // COND:
    // §FS_FAM2_ZENIT = §SI AND §SPOR >= #530
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #5
    // COND:
    // §FS_FAM2_JOY = §SI AND §SPOR >= #590
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #6
    // COND:
    // §DUMMYB1 = §SI AND §DUMMYB2 = §SI
    // THEN:
    // *SET *CF = #2
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYB1('');
    vars.setDUMMYB2('');
    //#2
    if (vars.get('§FS_ADD_LAT_SX') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    //#3
    if (vars.get('§FS_FAM2_TWIST') == vars.get('§SI') && vars.get('§SPOR') >= 530) {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    //#4
    if (vars.get('§FS_FAM2_ZENIT') == vars.get('§SI') && vars.get('§SPOR') >= 530) {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    //#5
    if (vars.get('§FS_FAM2_JOY') == vars.get('§SI') && vars.get('§SPOR') >= 590) {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    //#6
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§DUMMYB2') == vars.get('§SI')) {
        vars.setCF(2);
    }
    // GENERATED

    return vars.output;
};
