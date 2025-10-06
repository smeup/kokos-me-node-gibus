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

export const REG0009407: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0009407
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = §VERN_FRANGI
    // #2
    // COND:
    // §FRONTALE_ANT2 > #0
    // THEN:
    // *SET *CF = #1
    // *SET *CON-B = §FRONTALE_ANT2
    // #3
    // COND:
    // §FS_FAM2_LUCE <> §SI AND §FS_PTE_LUC <> §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VERN_FRANGI'));
    
    //#2
    if (vars.get('§FRONTALE_ANT2') > 0) {
        vars.setCF(1);
        vars.setCON_B(vars.get('§FRONTALE_ANT2'));
    }
    
    //#3
    if (vars.get('§FS_FAM2_LUCE') != vars.get('§SI') && vars.get('§FS_PTE_LUC') != vars.get('§SI')) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
