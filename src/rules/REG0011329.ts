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

export const REG0011329: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011329
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = §NR_FRANGI_LED
    // #2
    // COND:
    // §FS_LAM_BIO = §SI
    // THEN:
    // *SET *CF = #0
    // #3
    // COND:
    // §FS_LAM_BIO_JOY = §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(vars.get('§NR_FRANGI_LED'));
    
    //#2
    if (vars.get('§FS_LAM_BIO') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#3
    if (vars.get('§FS_LAM_BIO_JOY') == vars.get('§SI')) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
