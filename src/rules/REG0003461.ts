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

export const REG0003461: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0003461
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // §FRONTALE_ANT2 >#0
    // THEN:
    // *SET *CF=#1
    // *SET *CON-A=§VR_SLI_CAR
    // #3
    // COND:
    // §FRONTALE_ANT3 >#0
    // THEN:
    // *SET *CF=#2
    // *SET *CON-A=§VR_SLI_CAR
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§FRONTALE_ANT2') > 0) {
        vars.setCF(1);
        vars.setCON_A(vars.get('§VR_SLI_CAR'));
    }
    
    //#3
    if (vars.get('§FRONTALE_ANT3') > 0) {
        vars.setCF(2);
        vars.setCON_A(vars.get('§VR_SLI_CAR'));
    }
    // GENERATED

    return vars.output;
};
