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

export const REG0002078: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002078
    // REQUEST:
    // """
    // #1
    // COND:
    // §POS_COMANDO_QU = 'A' OR §POS_COMANDO_QU = 'B'
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§POS_COMANDO_QU') == 'A' || vars.get('§POS_COMANDO_QU') == 'B') {
    } else {
        vars.setLG('');
    }
    
    // GENERATED

    return vars.output;
};
