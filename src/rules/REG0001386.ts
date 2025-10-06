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

export const REG0001386: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001386
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = §VR_TRA_TET
    // #2
    // COND:
    // §FS_FAM2_VIVA = §SI
    // THEN:
    // *SET *CF = #2
    // #3
    // COND:
    // §FS_FAM2_QUADRA = §SI
    // THEN:
    // *SET *CF = #2
    // #4
    // COND:
    // §FS_FAM2_LUCE = §SI
    // THEN:
    // *SET *CF = #2
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VR_TRA_TET'));
    
    //#2
    if (vars.get('§FS_FAM2_VIVA') == vars.get('§SI')) {
        vars.setCF(2);
    }
    
    //#3
    if (vars.get('§FS_FAM2_QUADRA') == vars.get('§SI')) {
        vars.setCF(2);
    }
    
    //#4
    if (vars.get('§FS_FAM2_LUCE') == vars.get('§SI')) {
        vars.setCF(2);
    }
    // GENERATED

    return vars.output;
};
