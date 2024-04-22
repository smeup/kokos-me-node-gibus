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

export const REG0013312: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0013312
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET §DUMMYN1 = #0
    // *SET §DUMMYN2 = #0
    // *SET §DUMMYN3 = #0
    // *SET §DUMMYN4 = #0
    // #2
    // COND:
    // §FS_LED_RGB_DX = §SI
    // THEN:
    // *SET §DUMMYN1 = #1
    // #3
    // COND:
    // §FS_LED_RGB_SX = §SI
    // THEN:
    // *SET §DUMMYN2 = #1
    // #4
    // COND:
    // §FS_LED_RGB_FRA = §SI
    // THEN:
    // *SET §DUMMYN3 = #1
    // #5
    // COND:
    // §FS_LED_RGB_FRB = §SI
    // THEN:
    // *SET §DUMMYN4 = #1
    // #6
    // THEN:
    // *SET *CF = [ §DUMMYN1 + §DUMMYN2 + §DUMMYN3 + §DUMMYN4 ]
    // """
    // RESPONSE:
    //#1
    vars.setDUMMYN1(0);
    vars.setDUMMYN2(0);
    vars.setDUMMYN3(0);
    vars.setDUMMYN4(0);
    
    //#2
    if (vars.get('§FS_LED_RGB_DX') == vars.get('§SI')) {
        vars.setDUMMYN1(1);
    }
    
    //#3
    if (vars.get('§FS_LED_RGB_SX') == vars.get('§SI')) {
        vars.setDUMMYN2(1);
    }
    
    //#4
    if (vars.get('§FS_LED_RGB_FRA') == vars.get('§SI')) {
        vars.setDUMMYN3(1);
    }
    
    //#5
    if (vars.get('§FS_LED_RGB_FRB') == vars.get('§SI')) {
        vars.setDUMMYN4(1);
    }
    
    //#6
    vars.setCF(vars.get('§DUMMYN1') + vars.get('§DUMMYN2') + vars.get('§DUMMYN3') + vars.get('§DUMMYN4'));
    // GENERATED

    return vars.output;
};
