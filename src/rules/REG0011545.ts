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

export const REG0011545: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011545
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYN1 = [ §LARG * §SPOR / #10000 ]
    // #2
    // COND:
    // §DUMMYN1 >= #18
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §FS_LED_RGB = §SI
    // THEN:
    // *SET *CF = #1
    // #4
    // COND:
    // §FS_CEN_T01 = §SI
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYN1(vars.get('§LARG') * vars.get('§SPOR') / 10000);
    //#2
    if (vars.get('§DUMMYN1') >= 18) {
        vars.setCF(1);
    }
    //#3
    if (vars.get('§FS_LED_RGB') == vars.get('§SI')) {
        vars.setCF(1);
    }
    //#4
    if (vars.get('§FS_CEN_T01') == vars.get('§SI')) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
