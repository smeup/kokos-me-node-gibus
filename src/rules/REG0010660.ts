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

export const REG0010660: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010660
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #1
    // #2
    // COND:
    // §PI_PO_AG_MU2_MG = §SI
    // THEN:
    // *SET *CF = #0
    // #3
    // COND:
    // §FS_ACC_POS2 = §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(1);
    //#2
    if (vars.get('§PI_PO_AG_MU2_MG') == vars.get('§SI')) {
        vars.setCF(0);
    }
    //#3
    if (vars.get('§FS_ACC_POS2') == vars.get('§SI')) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
