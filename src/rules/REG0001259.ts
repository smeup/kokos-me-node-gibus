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

export const REG0001259: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001259
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_FAM2_CLI_ZIP<>§SI
    // THEN:
    // *SET *CON-A = *COL
    // *SET *CON-B = *LUNG
    // ELSE:
    // *SET *CF=#0
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_FAM2_CLI_ZIP') != vars.get('§SI')) {
        vars.setCON_A(vars.get('*COL'));
        vars.setCON_B(vars.get('*LUNG'));
    } else {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
