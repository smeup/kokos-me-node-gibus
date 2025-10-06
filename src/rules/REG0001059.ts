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

export const REG0001059: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001059
    // REQUEST:
    // """
    // #1
    // COND:
    // §NR_SPAZ_CAS > #0 AND §NR_SPAZ_CAS >= #2
    // THEN:
    // *SET *CF = [§L_SPAZ_CAS / #100]
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // §FS_CHI_VAR = §SI
    // THEN:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§NR_SPAZ_CAS') > 0 && vars.get('§NR_SPAZ_CAS') >= 2) {
        vars.setCF(vars.get('§L_SPAZ_CAS') / 100);
    } else {
        vars.setLG('');
    }
    //#2
    if (vars.get('§FS_CHI_VAR') == vars.get('§SI')) {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
