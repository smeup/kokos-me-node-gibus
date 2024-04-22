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

export const REG0012057: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012057
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET §DUMMYN1 = [ §SPOR + #75 ]
    // #2
    // COND:
    // §FS_POL_T01 = §SI
    // THEN:
    // *SET *CF = [ §DUMMYN1 / #100 ]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setDUMMYN1(vars.get('§SPOR') + 75);
    
    //#2
    if (vars.get('§FS_POL_T01') == vars.get('§SI')) {
        vars.setCF(vars.get('§DUMMYN1') / 100);
    }
    // GENERATED

    return vars.output;
};
