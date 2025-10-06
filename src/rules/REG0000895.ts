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

export const REG0000895: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000895
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_LASTRE_PMMA = §SI
    // THEN:
    // *SET *CON-A = '0000'
    // *SET *CON-B = §H_LAS_TET
    // *SET *CF = §N_LASTRE_TET
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_LASTRE_PMMA') == vars.get('§SI')) {
        vars.setCON_A('0000');
        vars.setCON_B(vars.get('§H_LAS_TET'));
        vars.setCF(vars.get('§N_LASTRE_TET'));
    } else {
        vars.setLG('');
    }
    
    // GENERATED

    return vars.output;
};
