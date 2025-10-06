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

export const REG0009847: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009847
    // REQUEST:
    // """
    // #1
    // COND:
    // §NR_BARRE_3MT >#0
    // THEN:
    // *SET *CF= [ §NR_BARRE_3MT * §NR_FRANGI_LED ]
    // ELSE:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§NR_BARRE_3MT') > 0) {
        vars.setCF(vars.get('§NR_BARRE_3MT') * vars.get('§NR_FRANGI_LED'));
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
