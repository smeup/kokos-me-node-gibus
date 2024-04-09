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

export const REG0002577: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002577
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_DIDUE = §SI
    // ELSE:
    // *SET *LG = ''
    // #2
    // THEN:
    // *SET *CF = §NR_BRACCI
    // *SET *CON-A = §VERN_PLAST
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_DIDUE') == vars.get('§SI')) {
    } else {
        vars.setLG('');
    }
    
    //#2
    vars.setCF(vars.get('§NR_BRACCI'));
    vars.setCON_A(vars.get('§VERN_PLAST'));
    // GENERATED

    return vars.output;
};
