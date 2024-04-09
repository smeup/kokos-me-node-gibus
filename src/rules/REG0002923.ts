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

export const REG0002923: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002923
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_TET_NO_PER = §SI
    // THEN:
    // *SET *CF = [§N_LASTRE_TET + #0,5]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_TET_NO_PER') == vars.get('§SI')) {
        vars.setCF(vars.get('§N_LASTRE_TET') + 0.5);
    }
    // GENERATED

    return vars.output;
};
