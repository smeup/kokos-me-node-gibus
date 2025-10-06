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

export const REG0012234: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012234
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // THEN:
    // *SET *CON-A = §VERN_FRANGI
    // *SET *CON-B = #150
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
    vars.setCF(0);
    
    //#2
    vars.setCON_A(vars.get('§VERN_FRANGI'));
    vars.setCON_B(150);
    
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
