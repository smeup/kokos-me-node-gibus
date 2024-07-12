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

export const REG0001950: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001950
    // REQUEST:
    // """
    // #1
    // COND:
    // (§FS_VERTI90_Z_BA = §SI) OR (§FS_VERTI90 = §SI)
    // THEN:
    // *SET *CON-A = *COL
    // *SET *CON-B = *LUNG
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if ((vars.get('§FS_VERTI90_Z_BA') == vars.get('§SI')) || (vars.get('§FS_VERTI90') == vars.get('§SI'))) {
        vars.setCON_A(vars.getCOL());
        vars.setCON_B(vars.getLUNG());
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
