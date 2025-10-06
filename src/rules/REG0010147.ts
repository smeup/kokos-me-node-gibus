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

export const REG0010147: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010147
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYB1 = ''
    // *SET §DUMMYB2 = ''
    // #2
    // COND:
    // §FS_LED_LAT_DX = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #3
    // COND:
    // §FS_DYN_DX = §SI
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #4
    // COND:
    // §DUMMYB1 = §SI AND §DUMMYB2 = §SI
    // THEN:
    // *SET *CF = [§POS_PRI_LED + #1 - §NR_FRANGI_LED]
    // #5
    // COND:
    // §DUMMYB1 = §SI AND §DUMMYB2 = §SI AND §NR_LED_LAT_DX > #0
    // THEN:
    // *SET *CF = [§PO_PRI_LED_DX + #1 - §NR_LED_LAT_DX]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYB1('');
    vars.setDUMMYB2('');
    //#2
    if (vars.get('§FS_LED_LAT_DX') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    //#3
    if (vars.get('§FS_DYN_DX') == vars.get('§SI')) {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    //#4
    if ((vars.get('§DUMMYB1') == vars.get('§SI')) && (vars.get('§DUMMYB2') == vars.get('§SI'))) {
        vars.setCF(vars.get('§POS_PRI_LED') + 1 - vars.get('§NR_FRANGI_LED'));
    }
    //#5
    if ((vars.get('§DUMMYB1') == vars.get('§SI')) && (vars.get('§DUMMYB2') == vars.get('§SI')) && (vars.get('§NR_LED_LAT_DX') > 0)) {
        vars.setCF(vars.get('§PO_PRI_LED_DX') + 1 - vars.get('§NR_LED_LAT_DX'));
    }
    // GENERATED

    return vars.output;
};
