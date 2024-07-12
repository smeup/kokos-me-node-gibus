/**
 * This rule represents a template implementation of a rule.
 * It takes an input value and performs some operations on it using the Variables class.
 * The result is returned as the output value.
 * 
 * @param iv The input value for the rule.
 * @returns The output value after applying the rule.
 */
import { Rule } from "../types/general.js";
import { Variables } from "../converter/variables.js";

export const REG0010648: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010648
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #1
    // #2
    // COND:
    // §PI_AN_AG_MU1_MG = §SI
    // THEN:
    // *SET *CF = #0
    // #3
    // COND:
    // §FS_ACC_ANT1 = §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(1);
    //#2
    if (vars.get('§PI_AN_AG_MU1_MG') == vars.get('§SI')) {
        vars.setCF(0);
    }
    //#3
    if (vars.get('§FS_ACC_ANT1') == vars.get('§SI')) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
