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

export const REG0005764: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005764
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_DOP_MOT<>§SI
    // THEN:
    // *SET *CF=#1
    // ELSE:
    // *SET *CF=#2
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_DOP_MOT') != vars.get('§SI')) {
        vars.setCF(1);
    } else {
        vars.setCF(2);
    }
    // GENERATED

    return vars.output;
};
