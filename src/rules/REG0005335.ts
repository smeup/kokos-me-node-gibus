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

export const REG0005335: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005335
    // REQUEST:
    // """
    // #1
    // COND:
    // ( §FS_LED_PER_FRA=§SI ) OR (§FS_LED_PER_FRB=§SI )
    // THEN:
    // *SET *CF=#1
    // #2
    // COND:
    // ( §FS_LED_PER_FRA=§SI ) AND (§FS_LED_PER_FRB=§SI )
    // THEN:
    // *SET *CF=#2
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_LED_PER_FRA') == vars.get('§SI') || vars.get('§FS_LED_PER_FRB') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#2
    if (vars.get('§FS_LED_PER_FRA') == vars.get('§SI') && vars.get('§FS_LED_PER_FRB') == vars.get('§SI')) {
        vars.setCF(2);
    }
    // GENERATED

    return vars.output;
};
