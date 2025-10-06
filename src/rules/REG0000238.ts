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

export const REG0000238: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000238
    // REQUEST:
    // """
    // #1
    // COND:
    // §NR_BRACCI > #0 AND §FS_DIM_250 = §SI
    // THEN:
    // *SET *CF = §NR_BRACCI
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§NR_BRACCI') > 0 && vars.get('§FS_DIM_250') == vars.get('§SI')) {
        vars.setCF(vars.get('§NR_BRACCI'));
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
