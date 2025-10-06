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

export const REG0006118: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006118
    // REQUEST:
    // """
    // #1
    // COND:
    // §L_AST2_TG > #0
    // THEN:
    // *SET *CON-A = §VR_AST_2
    // *SET *CON-B = §L_AST2_TG
    // ELSE:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§L_AST2_TG') > 0) {
        vars.setCON_A(vars.get('§VR_AST_2'));
        vars.setCON_B(vars.get('§L_AST2_TG'));
    } else {
        vars.setLG('');
    }
    
    // GENERATED

    return vars.output;
};
