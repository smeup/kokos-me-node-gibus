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

export const REG0003788: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003788
    // REQUEST:
    // """
    // #1
    // COND:
    // §P_TRA1 >#600
    // THEN:
    // *SET *CF=#2
    // ELSE:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§P_TRA1') > 600) {
        vars.setCF(2);
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
