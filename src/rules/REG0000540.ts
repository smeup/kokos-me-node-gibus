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

export const REG0000540: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000540
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_FRANGITRATTA = §SI
    // THEN:
    // *SET *CF = [#2 * §NR_FRANG_AGG]
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_FRANGITRATTA') == vars.get('§SI')) {
        vars.setCF(2 * vars.get('§NR_FRANG_AGG'));
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
