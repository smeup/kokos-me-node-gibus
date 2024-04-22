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

export const REG0004751: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004751
    // REQUEST:
    // """
    // #1
    // COND:
    // §NR_STR_RGB_60 >#0
    // THEN:
    // *SET *CF=§NR_STR_RGB_60
    // *SET *CON-A='0000'
    // *SET *CON-B=#600
    // ELSE:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§NR_STR_RGB_60') > 0) {
        vars.setCF(vars.get('§NR_STR_RGB_60'));
        vars.setCON_A('0000');
        vars.setCON_B(600);
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
