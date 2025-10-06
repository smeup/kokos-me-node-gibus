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

export const REG0000219: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000219
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CM = §LIST_TE
    // *SET *CF = §CONSUMO_TELO
    // """
    // RESPONSE:
    //#1
    vars.setCM(vars.get('§LIST_TE'));
    vars.setCF(vars.get('§CONSUMO_TELO'));
    // GENERATED

    return vars.output;
};
