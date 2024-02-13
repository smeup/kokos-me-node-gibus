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

export const REG0013062: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0013062
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_FAM2_VARIA = §SI AND §AUM_SPO_T01 < #10
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §FS_FAM2_TWIST = §SI AND §AUM_SPO_T01 < #6
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    //#2
    if (vars.get('§FS_FAM2_VARIA') == vars.get('§SI') && vars.get('§AUM_SPO_T01') < 10) {
        vars.setCF(1);
    }
    //#3
    if (vars.get('§FS_FAM2_TWIST') == vars.get('§SI') && vars.get('§AUM_SPO_T01') < 6) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
