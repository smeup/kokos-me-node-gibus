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

export const REG0010887: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010887
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = §N_KIT_STE
    // #2
    // COND:
    // §FS_KIT_STE = §NO
    // THEN:
    // *SET *CF = #0
    // #3
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(vars.get('§N_KIT_STE'));
    
    //#2
    if (vars.get('§FS_KIT_STE') == vars.get('§NO')) {
        vars.setCF(0);
    }
    
    //#3
    vars.setCF(0);
    // GENERATED

    return vars.output;
};
