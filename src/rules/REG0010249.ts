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

export const REG0010249: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010249
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYB1 = ''
    // #2
    // COND:
    // §FS_LED_LAT_SX = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #3
    // COND:
    // §DUMMYB1 = §SI
    // THEN:
    // *SET *CF = [§POS_PRI_LED + #1 - §NR_FRANGI_LED]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYB1('');
    //#2
    if (vars.get('§FS_LED_LAT_SX') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    //#3
    if (vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setCF(vars.get('§POS_PRI_LED') + 1 - vars.get('§NR_FRANGI_LED'));
    }
    // GENERATED

    return vars.output;
};
