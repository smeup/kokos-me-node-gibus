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

export const REG0002652: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002652
    // REQUEST:
    // """
    // #1
    // COND:
    // ( §LU_SCO_ACC2  > #0 ) AND ( §FS_FAM2_VARIA<>§SI )
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // *SET *CON-B  = §LU_SCO_ACC2
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if ((vars.get('§LU_SCO_ACC2') > 0) && (vars.get('§FS_FAM2_VARIA') != vars.get('§SI'))) {
        vars.setCON_A(vars.get('§VERN_1_COM'));
        vars.setCON_B(vars.get('§LU_SCO_ACC2'));
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
