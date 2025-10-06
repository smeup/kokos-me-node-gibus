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

export const REG0010965: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010965
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_AMPLIF_AUDIO = §SI
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §N_AMP_T01 > #0
    // THEN:
    // *SET *CF = §N_AMP_T01
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_AMPLIF_AUDIO') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§N_AMP_T01') > 0) {
        vars.setCF(vars.get('§N_AMP_T01'));
    }
    // GENERATED

    return vars.output;
};
