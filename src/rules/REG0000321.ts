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

export const REG0000321: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0000321
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = §VERN_PLAST
    // #2
    // COND:
    // §FS_DUCK = §SI
    // THEN:
    // *SET *CF = §NR_KIT_PROT_TEL
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VERN_PLAST'));
    
    //#2
    if (vars.get('§FS_DUCK') == vars.get('§SI')) {
        vars.setCF(vars.get('§NR_KIT_PROT_TEL'));
    }
    // GENERATED

    return vars.output;
};
