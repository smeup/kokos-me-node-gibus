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

export const REG0012228: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012228
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = [ §N_DIV_FRA - #1 ]
    // #2
    // COND:
    // §FS_FAM2_LUCE = §SI
    // THEN:
    // *SET *CF = #0
    // #3
    // COND:
    // §FS_PTE_LUC = §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(vars.get('§N_DIV_FRA') - 1);
    
    //#2
    if (vars.get('§FS_FAM2_LUCE') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#3
    if (vars.get('§FS_PTE_LUC') == vars.get('§SI')) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
