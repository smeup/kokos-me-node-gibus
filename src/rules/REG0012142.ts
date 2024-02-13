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

export const REG0012142: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012142
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §LA_COM = 'ANT' AND §VER_STA_T01 = '2021'
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    //#2
    if (vars.get('§LA_COM') == 'ANT' && vars.get('§VER_STA_T01') == '2021') {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
