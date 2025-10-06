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

export const REG0007824: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0007824
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #1
    // #2
    // COND:
    // §_LIN = 'DE' OR §_LIN = 'FR'
    // THEN:
    // *SET *CF = #0
    // #3
    // COND:
    // §FS_ZERO_PIU = §SI
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    vars.setCF(1);
    
    //#2
    if (vars.get('_LIN') == 'DE' || vars.get('_LIN') == 'FR') {
        vars.setCF(0);
    }
    
    //#3
    if (vars.get('§FS_ZERO_PIU') == vars.get('§SI')) {
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
