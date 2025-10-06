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

export const REG0003156: Rule = (iv) => {

    const vars = new Variables(iv);
    
    // GENERATED
    // RULE: REG0003156
    // REQUEST:
    // """
    // #1
    // COND:
    // ( §FS_COM_ARGANO=§SI ) OR ( §FS_NO_TRASM=§SI )
    // THEN:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    if ((vars.get('§FS_COM_ARGANO') == vars.get('§SI')) || (vars.get('§FS_NO_TRASM') == vars.get('§SI'))) {
        vars.setLG('');
    } else {
    }
    // GENERATED

    return vars.output;
};
