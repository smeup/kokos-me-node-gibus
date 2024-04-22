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

export const REG0009411: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009411
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = §VR_PLA_TEL
    // #2
    // THEN:
    // *SET *CF = #2
    // #3
    // COND:
    // §FS_FAM2_LUCE = §SI
    // THEN:
    // *SET *CF = #1
    // #4
    // COND:
    // §FS_PTE_LUC = §SI
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('§VR_PLA_TEL'));
    
    //#2
    vars.setCF(2);
    
    //#3
    if (vars.get('§FS_FAM2_LUCE') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#4
    if (vars.get('§FS_PTE_LUC') == vars.get('§SI')) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
