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

export const REG0005334: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005334
    // REQUEST:
    // """
    // #1
    // COND:
    // ( §FS_LED_PER_FRA=§SI ) OR ( §FS_LED_PER_FRB=§SI )
    // ELSE:
    // *SET *LG=''
    // #2
    // COND:
    // §LARG <=#325
    // THEN:
    // *SET *CF=#1
    // ELSE:
    // *SET *CF=#0
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_LED_PER_FRA') == vars.get('§SI') || vars.get('§FS_LED_PER_FRB') == vars.get('§SI')) {
        // do nothing
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§LARG') <= 325) {
        vars.setCF(1);
    } else {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
