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

export const REG0010708: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010708
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #2
    // #2
    // COND:
    // §FS_COM_MOTORE = §SI
    // THEN:
    // *SET *CF = #4
    // """
    // RESPONSE:
    //#1
    vars.setCF(2);
    
    //#2
    if (vars.get('§FS_COM_MOTORE') == vars.get('§SI')) {
        vars.setCF(4);
    }
    // GENERATED

    return vars.output;
};
