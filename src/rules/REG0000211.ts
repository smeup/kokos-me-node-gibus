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

export const REG0000211: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000211
    // REQUEST:
    // """
    // #1
    // COND:
    // §NR_GIUN_RULLO <= #0
    // THEN:
    // *SET *LG = ''
    // ELSE:
    // *SET *CF = §NR_GIUN_RULLO
    // """
    // RESPONSE:
    //#1
    if (vars.get('§NR_GIUN_RULLO') <= 0) {
        vars.setLG('');
    } else {
        vars.setCF(vars.get('§NR_GIUN_RULLO'));
    }
    // GENERATED

    return vars.output;
};
