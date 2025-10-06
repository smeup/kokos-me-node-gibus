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

export const REG0010918: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010918
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_ANG_PO1_AFR = §SI
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §LA_COM = 'POS'
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_ANG_PO1_AFR') == vars.get('§SI')) {
        vars.setCF(0);
    }
    //#2
    if (vars.get('§LA_COM') == 'POS') {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
