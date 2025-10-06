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

export const REG0003024: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003024
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_ZEROGRADI = §SI OR §FS_GUI_ZER = §SI
    // THEN:
    // *SET *CON-A = *COL
    // *SET *CON-B = *LUNG
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_ZEROGRADI') == vars.get('§SI') || vars.get('§FS_GUI_ZER') == vars.get('§SI')) {
        vars.setCON_A(vars.get('*COL'));
        vars.setCON_B(vars.get('*LUNG'));
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
