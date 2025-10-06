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

export const REG0008096: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008096
    // REQUEST:
    // """
    // #1
    // COND:
    // ( §N_GIUNZIONE_C > #0 ) OR (§N_GIUNZIONE_D > #0 )  OR (§N_GIUNZIONE_F > #0 )
    // ELSE:
    // *SET *LG=''
    // #2
    // COND:
    // §FS_NO_TRASM=§SI
    // THEN:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    if ((vars.get('§N_GIUNZIONE_C') > 0) || (vars.get('§N_GIUNZIONE_D') > 0) || (vars.get('§N_GIUNZIONE_F') > 0)) {
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§FS_NO_TRASM') == vars.get('§SI')) {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
