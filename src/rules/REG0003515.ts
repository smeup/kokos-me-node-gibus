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

export const REG0003515: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003515
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = §NR_RUB_STE
    // #2
    // THEN:
    // *SET *CF=§NR_RUB_STE
    // """
    // RESPONSE:
    //#1
    vars.setCF(vars.get('§NR_RUB_STE'));
    
    //#2
    vars.setCF(vars.get('§NR_RUB_STE'));
    // GENERATED

    return vars.output;
};
