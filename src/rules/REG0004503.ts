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

export const REG0004503: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004503
    // REQUEST:
    // """
    // #1
    // COND:
    // ( §VE_COM_CE='P' ) OR ( §VE_COM_CE='C' )
    // THEN:
    // *SET *CF=#1
    // """
    // RESPONSE:
    //#1
    if (vars.get('§VE_COM_CE') == 'P' || vars.get('§VE_COM_CE') == 'C') {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
