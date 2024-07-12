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

export const REG0008340: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008340
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
    // *SET *CF=#1
    // #3
    // COND:
    // §LARG >#0
    // THEN:
    // *SET §DUMMYN1 = #86
    // #4
    // COND:
    // §LARG >#360
    // THEN:
    // *SET §DUMMYN1 = #105
    // #5
    // COND:
    // §LARG >#600
    // THEN:
    // *SET §DUMMYN1 = #125
    // #6
    // THEN:
    // *SET *CON-B= §DUMMYN1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if ((vars.get('§FS_FAM2_FLY_R') == vars.get('§SI')) && (vars.get('§FS_FAM2_ADDL') == vars.get('§SI')) ) {
        vars.setCON_A(vars.get('§VR_LAM_ABB'));
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§LARG') > 0) {
        vars.setDUMMYN1(86);
    }
    
    //#4
    if (vars.get('§LARG') > 360) {
        vars.setDUMMYN1(105);
    }
    
    //#5
    if (vars.get('§LARG') > 600) {
        vars.setDUMMYN1(125);
    }
    
    //#6
    vars.setCON_B(vars.get('§DUMMYN1'));
    // GENERATED

    return vars.output;
};
