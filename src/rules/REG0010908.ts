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

export const REG0010908: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010908
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
    // §FS_FAM2_ZENIT = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #4
    // COND:
    // §FS_FAM2_TWIST = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #5
    // COND:
    // §LA_COM = 'ANT'
    // THEN:
    // *SET §DUMMYB1 = ''
    // #6
    // COND:
    // §FS_ANG_AN2_ALA = §SI AND §FS_STA_MUR_ANT2 <> §SI
    // THEN:
    // *SET §DUMMYB1 = ''
    // #7
    // COND:
    // §DUMMYB1 = §SI
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    //#2
    vars.setDUMMYB1('');
    //#3
    if (vars.get('§FS_FAM2_ZENIT') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    //#4
    if (vars.get('§FS_FAM2_TWIST') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    //#5
    if (vars.get('§LA_COM') == 'ANT') {
        vars.setDUMMYB1('');
    }
    //#6
    if ((vars.get('§FS_ANG_AN2_ALA') == vars.get('§SI')) && (vars.get('§FS_STA_MUR_ANT2') != vars.get('§SI'))) {
        vars.setDUMMYB1('');
    }
    //#7
    if (vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
