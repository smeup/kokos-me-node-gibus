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

export const REG0009913: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009913
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = §PD_LAR_50_UP
    // #2
    // COND:
    // §PD_LAR_150_UP > #0
    // THEN:
    // *SET *CF = §PD_LAR_150_UP
    // #3
    // COND:
    // §PD_LARG_ML > #0
    // THEN:
    // *SET *CF = §PD_LARG_ML
    // #4
    // COND:
    // §FS_OPT_VOL = §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(vars.get('§PD_LAR_50_UP'));
    
    //#2
    if (vars.get('§PD_LAR_150_UP') > 0) {
        vars.setCF(vars.get('§PD_LAR_150_UP'));
    }
    
    //#3
    if (vars.get('§PD_LARG_ML') > 0) {
        vars.setCF(vars.get('§PD_LARG_ML'));
    }
    
    //#4
    if (vars.get('§FS_OPT_VOL') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    // GENERATED

    return vars.output;
};
