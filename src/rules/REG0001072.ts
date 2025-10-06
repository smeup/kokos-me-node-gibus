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

export const REG0001072: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001072
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = §VERN_GUIDE
    // #2
    // COND:
    // §AUMENTO_ALTE <= #0
    // THEN:
    // *SET *CON-B = §L_SU_GUI_ZIP
    // *SET *CF = #2
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VERN_GUIDE'));
    
    //#2
    if (vars.get('§AUMENTO_ALTE') <= 0) {
        vars.setCON_B(vars.get('§L_SU_GUI_ZIP'));
        vars.setCF(2);
    }
    // GENERATED

    return vars.output;
};
