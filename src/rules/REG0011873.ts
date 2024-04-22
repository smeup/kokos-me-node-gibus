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

export const REG0011873: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011873
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = §VERN_PLAST
    // *SET *CF = #1
    // #2
    // COND:
    // §FS_FRO_T01 = §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('§VERN_PLAST'));
    vars.setCF(1);
    
    //#2
    if (vars.get('§FS_FRO_T01') == vars.get('§SI')) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
