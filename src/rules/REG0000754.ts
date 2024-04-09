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

export const REG0000754: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000754
    // REQUEST:
    // """
    // #1
    // COND:
    // (§FS_SP_0_GC = §SI) OR (§FS_TEKA_GC = §SI)
    // ELSE:
    // *SET *LG = ''
    // #2
    // THEN:
    // *SET *CON-A = §VERN_PLAST
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_SP_0_GC') == vars.get('§SI') || vars.get('§FS_TEKA_GC') == vars.get('§SI')) {
    } else {
        vars.setLG('');
    }
    
    //#2
    vars.setCON_A(vars.get('§VERN_PLAST'));
    // GENERATED

    return vars.output;
};
