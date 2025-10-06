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

export const REG0001940: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001940
    // REQUEST:
    // """
    // #1
    // COND:
    // §_AR = 'LR0001'
    // THEN:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('_AR') === 'LR0001') {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
