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

export const REG0002580: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002580
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_COM_MOTORE = §SI
    // ELSE:
    // *SET *LG = ''
    // #2
    // THEN:
    // *SET *CON-A = '0103'
    // *SET *CON-B = §L_TUBO_40_TG
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_COM_MOTORE') == vars.get('§SI')) {
    } else {
        vars.setLG('');
    }
    
    //#2
    vars.setCON_A('0103');
    vars.setCON_B(vars.get('§L_TUBO_40_TG'));
    // GENERATED

    return vars.output;
};
