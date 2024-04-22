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

export const REG0008118: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008118
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // #3
    // COND:
    // §FS_FAM2_ISOLA = §SI
    // THEN:
    // *SET *CF = [ §N_MODULI * #2]
    // #4
    // #5
    // COND:
    // ( §FS_TRA_TET_FRO=§SI ) AND ( §FS_FAM2_ADDF=§SI )
    // THEN:
    // *SET *CF = [ §N_MODULI * #1 ]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#3
    if (vars.get('§FS_FAM2_ISOLA') == vars.get('§SI')) {
        vars.setCF(vars.get('§N_MODULI') * 2);
    }
    
    //#5
    if ((vars.get('§FS_TRA_TET_FRO') == vars.get('§SI')) && (vars.get('§FS_FAM2_ADDF') == vars.get('§SI'))) {
        vars.setCF(vars.get('§N_MODULI') * 1);
    }
    // GENERATED

    return vars.output;
};
