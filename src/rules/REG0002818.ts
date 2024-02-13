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

export const REG0002818: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002818
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_CHI_VAR = §SI
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // §NR_SPAZ_CAS > #0 AND §NR_SPAZ_CAS >= #1
    // THEN:
    // *SET *CF = [§L_SPAZ_CAS / #100]
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_CHI_VAR') == vars.get('§SI')) {
    } else {
        vars.setLG("");
    }
    //#2
    if ((vars.get('§NR_SPAZ_CAS') > 0) && (vars.get('§NR_SPAZ_CAS') >= 1)) {
        vars.setCF(vars.get('§L_SPAZ_CAS') / 100);
    } else {
        vars.setLG("");
    }
    // GENERATED

    return vars.output;
};
