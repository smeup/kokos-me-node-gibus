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

export const REG0009144: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009144
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §LATO_LED = 'SX'
    // THEN:
    // *SET *CF = §NR_FRANGI_LED
    // #3
    // THEN:
    // *SET §DUMMYB1 = ''
    // #4
    // COND:
    // §FS_LAM_BIO = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #5
    // COND:
    // §DUMMYB1 = §SI
    // THEN:
    // *SET *CF = #0
    // #6
    // COND:
    // §DUMMYB1 = §SI AND §LATO_LED = 'SX' AND §NR_SPO > #0
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    //#2
    if (vars.get('§LATO_LED') == 'SX') {
        vars.setCF(vars.get('§NR_FRANGI_LED'));
    }
    //#3
    vars.setDUMMYB1('');
    //#4
    if (vars.get('§FS_LAM_BIO') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    //#5
    if (vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setCF(0);
    }
    //#6
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§LATO_LED') == 'SX' && vars.get('§NR_SPO') > 0) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
