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

export const REG0009882: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009882
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_LED_PER_DX = §SI AND §NR_SPO_GIB_LAT = #6
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §FS_LED_PER_DX = §SI AND §NR_SPO_GIB_LAT = #10
    // THEN:
    // *SET *CF = #1
    // #4
    // COND:
    // §FS_LED_PER_DX = §SI AND §NR_SPO_GIB_LAT = #12
    // THEN:
    // *SET *CF = #2
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    //#2
    if (vars.get('§FS_LED_PER_DX') == vars.get('§SI') && vars.get('§NR_SPO_GIB_LAT') == 6) {
        vars.setCF(1);
    }
    //#3
    if (vars.get('§FS_LED_PER_DX') == vars.get('§SI') && vars.get('§NR_SPO_GIB_LAT') == 10) {
        vars.setCF(1);
    }
    //#4
    if (vars.get('§FS_LED_PER_DX') == vars.get('§SI') && vars.get('§NR_SPO_GIB_LAT') == 12) {
        vars.setCF(2);
    }
    // GENERATED

    return vars.output;
};
