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

export const REG0005920: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005920
    // REQUEST:
    // """
    // #1
    // COND:
    // ( §N_MON_TOT >#0 ) AND (§N_MODULI=#1 )
    // THEN:
    // *SET *CF= §N_MON_TOT
    // #2
    // COND:
    // (§N_MODULI=#2 ) AND (§N_TOT_MON_LAT>#0 )
    // THEN:
    // *SET *CF=§N_TOT_MON_LAT
    // #3
    // THEN:
    // *SET *CF=§N_TOT_MON_LAT
    // """
    // RESPONSE:
    //#1
    if ((vars.get('§N_MON_TOT') > 0) && (vars.get('§N_MODULI') == 1)) {
        vars.setCF(vars.get('§N_MON_TOT'));
    }
    
    //#2
    if ((vars.get('§N_MODULI') == 2) && (vars.get('§N_TOT_MON_LAT') > 0)) {
        vars.setCF(vars.get('§N_TOT_MON_LAT'));
    }
    
    //#3
    vars.setCF(vars.get('§N_TOT_MON_LAT'));
    // GENERATED

    return vars.output;
};
