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

export const REG0009876: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009876
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_LED_PER_FRB = §SI AND §NR_SPO_GIB_FRO = #6
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    //#2
    if (vars.get('§FS_LED_PER_FRB') == vars.get('§SI') && vars.get('§NR_SPO_GIB_FRO') == 6) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
