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

export const REG0011544: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011544
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #1
    // #2
    // THEN:
    // *SET §DUMMYN1 = [ §LARG * §SPOR / #10000 ]
    // #3
    // COND:
    // §DUMMYN1 >= #18
    // THEN:
    // *SET *CF = #0
    // #4
    // COND:
    // §FS_CEN_T01 = §SI
    // THEN:
    // *SET *CF = #0
    // #5
    // COND:
    // §FS_LED_RGB = §SI
    // THEN:
    // *SET *CF = #0
    // #6
    // """
    // RESPONSE:
    //#1
    vars.setCF(1);
    //#2
    vars.setDUMMYN1(vars.get('§LARG') * vars.get('§SPOR') / 10000);
    //#3
    if (vars.get('§DUMMYN1') >= 18) {
        vars.setCF(0);
    }
    //#4
    if (vars.get('§FS_CEN_T01') == vars.get('§SI')) {
        vars.setCF(0);
    }
    //#5
    if (vars.get('§FS_LED_RGB') == vars.get('§SI')) {
        vars.setCF(0);
    }
    //#6
    // GENERATED

    return vars.output;
};
