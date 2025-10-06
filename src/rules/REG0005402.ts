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

export const REG0005402: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005402
    // REQUEST:
    // """
    // #1
    // COND:
    // §NR_STR_RGB_70 >#0
    // THEN:
    // *SET *CON-A='0000'
    // *SET *CON-B=#700
    // *SET *CF=§NR_STR_RGB_70
    // ELSE:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§NR_STR_RGB_70') > 0) {
        vars.setCON_A('0000');
        vars.setCON_B(700);
        vars.setCF(vars.get('§NR_STR_RGB_70'));
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
