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

export const REG0009493: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009493
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = §VERN_PLAST
    // #2
    // COND:
    // §FS_TXT = §SI
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §FS_TXT = §SI AND §SPOR >= #350
    // THEN:
    // *SET *CF = #2
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VERN_PLAST'));
    
    //#2
    if (vars.get('§FS_TXT') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§FS_TXT') == vars.get('§SI') && vars.get('§SPOR') >= 350) {
        vars.setCF(2);
    }
    // GENERATED

    return vars.output;
};
