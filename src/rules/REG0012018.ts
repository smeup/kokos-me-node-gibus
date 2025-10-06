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

export const REG0012018: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012018
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = '0000'
    // *SET *CON-B = §L_RUL_T01
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_TG_RUL_T01 = §SI
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCON_A('0000');
    vars.setCON_B(vars.get('§L_RUL_T01'));
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_TG_RUL_T01') == vars.get('§SI')) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
