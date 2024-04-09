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

export const REG0004547: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004547
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A=*COL
    // *SET *CON-B=*LUNG
    // #2
    // COND:
    // §_AR = 'VE0006'
    // THEN:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.getCOL());
    vars.setCON_B(vars.getLUNG());
    
    //#2
    if (vars.get('_AR') == 'VE0006') {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
