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

export const REG0005218: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005218
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // §FS_LED_RGB_FRB=§SI
    // THEN:
    // *SET *CON-A='0055'
    // *SET §DUMMYN1= [ §GRO_LED_IN_L ]
    // #3
    // COND:
    // §FS_LED_RGB_FRB=§SI
    // THEN:
    // *SET *CON-A='0055'
    // *SET *CF= [§DUMMYN1/#100 ]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_LED_RGB_FRB') == vars.get('§SI')) {
        vars.setCON_A('0055');
        vars.setDUMMYN1(vars.get('§GRO_LED_IN_L'));
    }
    
    //#3
    if (vars.get('§FS_LED_RGB_FRB') == vars.get('§SI')) {
        vars.setCON_A('0055');
        vars.setCF(vars.get('§DUMMYN1') / 100);
    }
    // GENERATED

    return vars.output;
};
