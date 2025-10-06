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

export const REG0011126: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011126
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #1
    // #2
    // COND:
    // §FS_FAM2_ZENIT = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #3
    // COND:
    // §FS_ACC_POS2 = §SI
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #4
    // COND:
    // §FS_STA_MUR_POS2 = §SI
    // THEN:
    // *SET §DUMMYB2 = ''
    // #5
    // COND:
    // §DUMMYB1 = §SI AND §DUMMYB2 = §SI
    // """
    // RESPONSE:
    //#1
    vars.setCF(1);
    //#2
    if (vars.get('§FS_FAM2_ZENIT') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    //#3
    if (vars.get('§FS_ACC_POS2') == vars.get('§SI')) {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    //#4
    if (vars.get('§FS_STA_MUR_POS2') == vars.get('§SI')) {
        vars.setDUMMYB2('');
    }
    //#5
    if ((vars.get('§DUMMYB1') == vars.get('§SI')) && (vars.get('§DUMMYB2') == vars.get('§SI'))) {
    }
    // GENERATED

    return vars.output;
};
