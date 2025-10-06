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

export const REG0010191: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010191
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_TEL_RUL = §SI
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_TEL_RUL_FRO = §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_TEL_RUL') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#2
    if (vars.get('§FS_TEL_RUL_FRO') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    // GENERATED

    return vars.output;
};
