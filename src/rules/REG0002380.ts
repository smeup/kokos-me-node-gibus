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

export const REG0002380: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002380
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_FAM2_DUETTO = §SI
    // THEN:
    // *SET *CF = #12
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // §FS_DUE_2G_ZIP = §SI
    // THEN:
    // *SET *CF = #24
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_FAM2_DUETTO') == vars.get('§SI')) {
        vars.setCF(12);
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§FS_DUE_2G_ZIP') == vars.get('§SI')) {
        vars.setCF(24);
    }
    // GENERATED

    return vars.output;
};
