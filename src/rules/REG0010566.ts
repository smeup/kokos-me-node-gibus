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

export const REG0010566: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010566
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_APERTURA_CEN = §SI
    // THEN:
    // *SET *CON-A = '0051'
    // *SET *CF = #2
    // ELSE:
    // *SET *CON-A = '0051'
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_APERTURA_CEN') == vars.get('§SI')) {
        vars.setCON_A('0051');
        vars.setCF(2);
    } else {
        vars.setCON_A('0051');
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
