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

export const REG0004218: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0004218
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_RUL_85_LIS = §SI
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // §FS_SPA_60 = §SI
    // THEN:
    // *SET *CF = #0
    // #3
    // COND:
    // §FS_SPA_75 = §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_RUL_85_LIS') == vars.get('§SI')) {
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§FS_SPA_60') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#3
    if (vars.get('§FS_SPA_75') == vars.get('§SI')) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
