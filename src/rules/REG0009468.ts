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

export const REG0009468: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009468
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #2
    // #2
    // COND:
    // §FS_LED_FRO = §SI
    // THEN:
    // *SET *CF = #0
    // #3
    // COND:
    // §FS_LED_CAS = §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(2);
    
    //#2
    if (vars.get('§FS_LED_FRO') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#3
    if (vars.get('§FS_LED_CAS') == vars.get('§SI')) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
