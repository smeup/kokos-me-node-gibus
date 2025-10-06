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

export const REG0005161: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005161
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // §PC_LU_DX_MOD1 > #0
    // THEN:
    // *SET *CF=#1
    // #3
    // COND:
    // §PC_LU_DX_MOD1 > #600 AND §FS_ADD_LAT_DX = §SI
    // THEN:
    // *SET *CF = #2
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§PC_LU_DX_MOD1') > 0) {
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§PC_LU_DX_MOD1') > 600 && vars.get('§FS_ADD_LAT_DX') == vars.get('§SI')) {
        vars.setCF(2);
    }
    // GENERATED

    return vars.output;
};
