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

export const REG0012658: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012658
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = §VERN_1_COM
    // #2
    // COND:
    // §NR_ATT_SOF > #0
    // THEN:
    // *SET *CF = §NR_ATT_SOF
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VERN_1_COM'));
    
    //#2
    if (vars.get('§NR_ATT_SOF') > 0) {
        vars.setCF(vars.get('§NR_ATT_SOF'));
    }
    // GENERATED

    return vars.output;
};
