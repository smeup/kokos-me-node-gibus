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

export const REG0012847: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012847
    // REQUEST:
    // """
    // #1
    // COND:
    // §ATTACCO = '02'
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // *SET *CF = #2
    // ELSE:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    if (vars.get('§ATTACCO') == '02') {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCF(2);
    } else {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
