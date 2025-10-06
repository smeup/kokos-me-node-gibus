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

export const REG0009969: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009969
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF  = #0
    // #2
    // COND:
    // §TI_GAM_OPT = '01'
    // THEN:
    // *SET *CF  = #1
    // #3
    // COND:
    // §TI_GAM_OPT = '03'
    // THEN:
    // *SET *CF  = #1
    // #4
    // COND:
    // §FS_PIE_MAG = §SI
    // ELSE:
    // *SET *CF  = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    //#2
    if (vars.get('§TI_GAM_OPT') == '01') {
        vars.setCF(1);
    }
    //#3
    if (vars.get('§TI_GAM_OPT') == '03') {
        vars.setCF(1);
    }
    //#4
    if (vars.get('§FS_PIE_MAG') == vars.get('§SI')) {
    } else {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
