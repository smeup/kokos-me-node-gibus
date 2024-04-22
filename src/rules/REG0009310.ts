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

export const REG0009310: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009310
    // REQUEST:
    // """
    // #1
    // COND:
    // §POS_COMANDO = '03'
    // THEN:
    // *SET *NT = 'Preassemlato a DX'
    // #2
    // COND:
    // §POS_COMANDO = '01'
    // THEN:
    // *SET *NT = 'Preassemlato a SX'
    // """
    // RESPONSE:
    //#1
    if (vars.get('§POS_COMANDO') === '03') {
        vars.setNT('Preassemlato a DX');
    }
    
    //#2
    if (vars.get('§POS_COMANDO') === '01') {
        vars.setNT('Preassemlato a SX');
    }
    
    // GENERATED

    return vars.output;
};
