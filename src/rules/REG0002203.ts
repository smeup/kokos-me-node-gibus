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

export const REG0002203: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002203
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §NR_SUP_CAS > #0
    // THEN:
    // *SET *CF = §NR_SUP_CAS
    // #3
    // COND:
    // §FS_DIDUE = §SI AND §NR_SUP_CAS_AGG > #0
    // THEN:
    // *SET *CF = [§NR_SUP_CAS + §NR_SUP_CAS_AGG]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§NR_SUP_CAS') > 0) {
        vars.setCF(vars.get('§NR_SUP_CAS'));
    }
    
    //#3
    if (vars.get('§FS_DIDUE') == vars.get('§SI') && vars.get('§NR_SUP_CAS_AGG') > 0) {
        vars.setCF(vars.get('§NR_SUP_CAS') + vars.get('§NR_SUP_CAS_AGG'));
    }
    
    // GENERATED

    return vars.output;
};
