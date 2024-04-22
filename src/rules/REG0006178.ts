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

export const REG0006178: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006178
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // *SET *CF = #0
    // #2
    // COND:
    // §TRA_TET_ANT2 > #0
    // THEN:
    // *SET *CF = #1
    // *SET *CON-B = §TRA_TET_ANT2
    // #3
    // COND:
    // §FS_FAM2_AVIA = §SI AND §LARG_M2 > #0
    // THEN:
    // *SET *CF = #1
    // *SET *CON-B = [ §LARG_M2 - #8,1]
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('§VERN_1_COM'));
    vars.setCF(0);
    
    //#2
    if (vars.get('§TRA_TET_ANT2') > 0) {
        vars.setCF(1);
        vars.setCON_B(vars.get('§TRA_TET_ANT2'));
    }
    
    //#3
    if (vars.get('§FS_FAM2_AVIA') == vars.get('§SI') && vars.get('§LARG_M2') > 0) {
        vars.setCF(1);
        vars.setCON_B(vars.get('§LARG_M2') - 8.1);
    }
    // GENERATED

    return vars.output;
};
