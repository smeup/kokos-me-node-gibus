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

export const REG0004289: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004289
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // ( §FS_MED_ACCOPP=§SI ) AND (§FS_FAM2_165<>§SI ) AND ( ( §N_MODULI = #1 ) OR ( §N_MODULI = #2 ) )
    // THEN:
    // *SET *CF=#1
    // #3
    // COND:
    // ( §FS_MED_ACCOPP=§SI ) AND (§FS_FAM2_165<>§SI ) AND ( §N_MODULI = #3 )
    // THEN:
    // *SET *CF=#0
    // #4
    // COND:
    // ( §FS_FAM2_165=§SI ) AND ( §N_MODULI=#1 )
    // THEN:
    // *SET *CF=#2
    // #5
    // COND:
    // ( §FS_FAM2_165=§SI ) AND ( §N_MODULI=#2 )
    // THEN:
    // *SET *CF=#1
    // #6
    // COND:
    // ( §FS_FAM2_165=§SI ) AND ( §N_MODULI=#3 )
    // THEN:
    // *SET *CF=#0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if ((vars.get('§FS_MED_ACCOPP') == vars.get('§SI')) && (vars.get('§FS_FAM2_165') != vars.get('§SI')) && ((vars.get('§N_MODULI') == 1) || (vars.get('§N_MODULI') == 2))) {
        vars.setCF(1);
    }
    
    //#3
    if ((vars.get('§FS_MED_ACCOPP') == vars.get('§SI')) && (vars.get('§FS_FAM2_165') != vars.get('§SI')) && (vars.get('§N_MODULI') == 3)) {
        vars.setCF(0);
    }
    
    //#4
    if ((vars.get('§FS_FAM2_165') == vars.get('§SI')) && (vars.get('§N_MODULI') == 1)) {
        vars.setCF(2);
    }
    
    //#5
    if ((vars.get('§FS_FAM2_165') == vars.get('§SI')) && (vars.get('§N_MODULI') == 2)) {
        vars.setCF(1);
    }
    
    //#6
    if ((vars.get('§FS_FAM2_165') == vars.get('§SI')) && (vars.get('§N_MODULI') == 3)) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
