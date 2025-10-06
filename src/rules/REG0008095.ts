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

export const REG0008095: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008095
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // ( §FS_FAM2_OPENFLY=§SI ) AND ( §FS_FAM2_ISOLA=§SI )
    // THEN:
    // *SET *CF=§N_MON_TOT
    // #3
    // COND:
    // §FS_FAM2_OPENFLY = §SI AND §FS_PIE_AUT = §SI
    // THEN:
    // *SET *CF=§N_MON_TOT
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if ((vars.get('§FS_FAM2_OPENFLY') == vars.get('§SI')) && (vars.get('§FS_FAM2_ISOLA') == vars.get('§SI'))) {
        vars.setCF(vars.get('§N_MON_TOT'));
    }
    
    //#3
    if (vars.get('§FS_FAM2_OPENFLY') == vars.get('§SI') && vars.get('§FS_PIE_AUT') == vars.get('§SI')) {
        vars.setCF(vars.get('§N_MON_TOT'));
    }
    // GENERATED

    return vars.output;
};
