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

export const REG0001918: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001918
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0,5
    // #2
    // COND:
    // §FS_MEN_LAT_PAR = §SI
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0.5);
    
    //#2
    if (vars.get('§FS_MEN_LAT_PAR') == vars.get('§SI')) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
