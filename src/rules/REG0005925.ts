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

export const REG0005925: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005925
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // ( §N_MODULI = #2 ) AND ( §FS_FAM2_ISOLA = §SI )
    // THEN:
    // *SET *CF =#2
    // #3
    // COND:
    // ( §N_MODULI = #2 ) AND ( §FS_FAM2_ADDF = §SI )
    // THEN:
    // *SET *CF=#1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if ((vars.get('§N_MODULI') == 2) && (vars.get('§FS_FAM2_ISOLA') == vars.get('§SI'))) {
        vars.setCF(2);
    }
    
    //#3
    if ((vars.get('§N_MODULI') == 2) && (vars.get('§FS_FAM2_ADDF') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
