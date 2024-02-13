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

export const REG0011570: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011570
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_FAM2_JOY = §SI
    // THEN:
    // *SET *CF = §NR_FRANGI_LED
    // #3
    // COND:
    // §FS_FAM2_TWIST = §SI
    // THEN:
    // *SET *CF = §NR_FRANGI_LED
    // #4
    // COND:
    // §FS_FAM2_VARIA = §SI
    // THEN:
    // *SET *CF = §NR_FRANGI_LED
    // #5
    // THEN:
    // *SET §DUMMYB1 = ''
    // #6
    // COND:
    // §FS_LAM_BIO_JOY = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #7
    // COND:
    // §FS_LAM_BIO = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #8
    // COND:
    // §DUMMYB1 = §SI
    // THEN:
    // *SET *CF = #0
    // #9
    // COND:
    // §NR_SPO > #0 AND §DUMMYB1 = §SI
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    //#2
    if (vars.get('§FS_FAM2_JOY') == vars.get('§SI')) {
        vars.setCF(vars.get('§NR_FRANGI_LED'));
    }
    //#3
    if (vars.get('§FS_FAM2_TWIST') == vars.get('§SI')) {
        vars.setCF(vars.get('§NR_FRANGI_LED'));
    }
    //#4
    if (vars.get('§FS_FAM2_VARIA') == vars.get('§SI')) {
        vars.setCF(vars.get('§NR_FRANGI_LED'));
    }
    //#5
    vars.setDUMMYB1('');
    //#6
    if (vars.get('§FS_LAM_BIO_JOY') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    //#7
    if (vars.get('§FS_LAM_BIO') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    //#8
    if (vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setCF(0);
    }
    //#9
    if ((vars.get('§NR_SPO') > 0) && (vars.get('§DUMMYB1') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
