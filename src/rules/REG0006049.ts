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

export const REG0006049: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006049
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = [ §N_MODULI + #1 ]
    // #2
    // COND:
    // §FS_MAKI = §SI
    // THEN:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    vars.setCF(vars.get('§N_MODULI') + 1);
    
    //#2
    if (vars.get('§FS_MAKI') == vars.get('§SI')) {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
