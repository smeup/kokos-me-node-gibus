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

export const REG0003473: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003473
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // ( §FRONTALE_ANT2 >#0 ) AND ( §FS_FAM2_LUCE <> §SI )
    // THEN:
    // *SET *CON-A=§VR_PLA_TEL
    // *SET *CF=#1
    // #3
    // COND:
    // ( §FRONTALE_ANT3 >#0 ) AND ( §FS_FAM2_LUCE <> §SI)
    // THEN:
    // *SET *CON-A=§VR_PLA_TEL
    // *SET *CF=#2
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    //#2
    if ((vars.get('§FRONTALE_ANT2') > 0) && (vars.get('§FS_FAM2_LUCE') != vars.get('§SI'))) {
        vars.setCON_A(vars.get('§VR_PLA_TEL'));
        vars.setCF(1);
    }
    //#3
    if ((vars.get('§FRONTALE_ANT3') > 0) && (vars.get('§FS_FAM2_LUCE') != vars.get('§SI'))) {
        vars.setCON_A(vars.get('§VR_PLA_TEL'));
        vars.setCF(2);
    }
    // GENERATED

    return vars.output;
};
