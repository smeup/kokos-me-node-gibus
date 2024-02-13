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

export const REG0012569: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012569
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = *COL
    // *SET *CON-B = *LUNG
    // #2
    // COND:
    // §FS_CLI_ZIP_GH15 = §SI
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('*COL'));
    vars.setCON_B(vars.get('*LUNG'));
    
    //#2
    if (vars.get('§FS_CLI_ZIP_GH15') == vars.get('§SI')) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
