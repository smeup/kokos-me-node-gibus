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

export const REG0003204: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003204
    // REQUEST:
    // """
    // #1
    // COND:
    // §FA_SALVAG_COES = §SI
    // THEN:
    // *SET *CON-B =*LUNG
    // *SET *CON-A=*COL
    // ELSE:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FA_SALVAG_COES') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§LUNG'));
        vars.setCON_A(vars.getCOL());
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
