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

export const REG0011393: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011393
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYB1 = ''
    // *SET §DUMMYB2 = ''
    // #2
    // COND:
    // §TI_TRA_TET_INC = '30X100'
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #3
    // COND:
    // §TI_TRA_TET_POS = '30X100'
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #4
    // COND:
    // §TRA_TET_POS3 >  #0
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #5
    // COND:
    // §DUMMYB1 = §SI AND §DUMMYB2 = §SI
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYB1('');
    vars.setDUMMYB2('');
    //#2
    if (vars.get('§TI_TRA_TET_INC') == '30X100') {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    //#3
    if (vars.get('§TI_TRA_TET_POS') == '30X100') {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    //#4
    if (vars.get('§TRA_TET_POS3') > 0) {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    //#5
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§DUMMYB2') == vars.get('§SI')) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
