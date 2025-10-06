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

export const REG0010032: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010032
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_FAM2_LUCE = §SI
    // THEN:
    // *SET *CF = [§N_MODULI - #1]
    // #3
    // COND:
    // §FS_PTE_LUC = §SI
    // THEN:
    // *SET *CF = [§N_MODULI - #1]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_FAM2_LUCE') == vars.get('§SI')) {
        vars.setCF(vars.get('§N_MODULI') - 1);
    }
    
    //#3
    if (vars.get('§FS_PTE_LUC') == vars.get('§SI')) {
        vars.setCF(vars.get('§N_MODULI') - 1);
    }
    // GENERATED

    return vars.output;
};
