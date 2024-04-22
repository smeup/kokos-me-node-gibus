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

export const REG0003496: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003496
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_SCA_FRO_DX <> §SI
    // THEN:
    // *SET *CON-A=§VR_PLA_TEL
    // ELSE:
    // *SET *LG=''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_SCA_FRO_DX') != vars.get('§SI')) {
        vars.setCON_A(vars.get('§VR_PLA_TEL'));
    } else {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
