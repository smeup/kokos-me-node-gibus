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

export const REG0002445: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002445
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_SP_50Q = §SI
    // THEN:
    // *SET *CON-A = §VERN_BRACCI
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_SP_50Q') == vars.get('§SI')) {
        vars.setCON_A(vars.get('§VERN_BRACCI'));
    } else {
        vars.setLG('');
    }
    
    // GENERATED

    return vars.output;
};
