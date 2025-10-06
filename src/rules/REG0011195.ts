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

export const REG0011195: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011195
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §N_MODULI = #3 AND §TI_SCA_LAT_T01 ='04'
    // THEN:
    // *SET *CF = §NR_FRANGI
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§N_MODULI') == 3 && vars.get('§TI_SCA_LAT_T01') == '04') {
        vars.setCF(vars.get('§NR_FRANGI'));
    }
    // GENERATED

    return vars.output;
};
