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

export const REG0006626: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006626
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_FAM2_165=§SI
    // ELSE:
    // *SET *LG=''
    // #2
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_FAM2_165') == vars.get('§SI')) {
    } else {
        vars.setLG("");
    }
    
    //#2
    vars.setCF(0);
    // GENERATED

    return vars.output;
};
