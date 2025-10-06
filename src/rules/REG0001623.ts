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

export const REG0001623: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001623
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_LED_RGB = §SI
    // THEN:
    // *SET *CON-A = '0055'
    // *SET *CON-B = §GRO_LED_IN_S
    // ELSE:
    // *SET *LG = ''
    // #2
    // THEN:
    // *SET *CF = [§NR_LED_RGB_LAT / #2]
    // #3
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_LED_RGB') == vars.get('§SI')) {
        vars.setCON_A('0055');
        vars.setCON_B(vars.get('§GRO_LED_IN_S'));
    } else {
        vars.setLG('');
    }
    
    //#2
    vars.setCF(vars.get('§NR_LED_RGB_LAT') / 2);
    
    //#3
    vars.setCF(0);
    // GENERATED

    return vars.output;
};
