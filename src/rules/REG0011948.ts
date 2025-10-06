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

export const REG0011948: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011948
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = §VR_PLA_TEL
    // #2
    // COND:
    // §TIPO_PLANA = '01'
    // THEN:
    // *SET *CF = [ §X_CHI_RET * #2 ]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VR_PLA_TEL'));
    
    //#2
    if (vars.get('§TIPO_PLANA') == '01') {
        vars.setCF(vars.get('§X_CHI_RET') * 2);
    }
    // GENERATED

    return vars.output;
};
