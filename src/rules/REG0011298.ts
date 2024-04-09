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

export const REG0011298: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011298
    // REQUEST:
    // """
    // #1
    // COND:
    // ( §L_PORTANTE5 > #0 )
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // *SET *CON-B = §L_PORTANTE5
    // ELSE:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§L_PORTANTE5') > 0) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B(vars.get('§L_PORTANTE5'));
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
