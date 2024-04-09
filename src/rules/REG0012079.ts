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

export const REG0012079: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012079
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_SPA_60 = §SI OR §FS_SPA_75 = §SI
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §FS_MOLLA_COMP = §SI AND §FS_ARG_MAG = §SI
    // THEN:
    // *SET *CF = #0
    // #4
    // COND:
    // §FS_AL_LED_T01 = §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_SPA_60') == vars.get('§SI') || vars.get('§FS_SPA_75') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§FS_MOLLA_COMP') == vars.get('§SI') && vars.get('§FS_ARG_MAG') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#4
    if (vars.get('§FS_AL_LED_T01') == vars.get('§SI')) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
