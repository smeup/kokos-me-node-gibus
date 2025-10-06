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

export const REG0002430: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002430
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_SP_50Q = §SI AND §LARG >= #590
    // THEN:
    // *SET *CON-A = *COL
    // *SET *CON-B = *LUNG
    // *SET *LG = ''
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_SP_50Q') == vars.get('§SI') && vars.get('§LARG') >= 590) {
        vars.setCON_A(vars.getCOL());
        vars.setCON_B(vars.getLUNG());
        vars.setLG('');
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
