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

export const REG0008345: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008345
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // ( §FS_FAM2_FLY_R=§SI ) AND ( §FS_FAM2_ADDL=§SI )
    // THEN:
    // *SET *CON-A=§VR_LAM_ABB
    // *SET *CON-B=#40
    // *SET *CF=#2
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if ((vars.get('§FS_FAM2_FLY_R') == vars.get('§SI')) && (vars.get('§FS_FAM2_ADDL') == vars.get('§SI'))) {
        vars.setCON_A(vars.get('§VR_LAM_ABB'));
        vars.setCON_B(40);
        vars.setCF(2);
    }
    // GENERATED

    return vars.output;
};
