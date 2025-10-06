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

export const REG0012260: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012260
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = §WS003MOU02
    // """
    // RESPONSE:
    //#1
    vars.setCF(vars.get('§WS003MOU02'));
    // GENERATED

    return vars.output;
};
