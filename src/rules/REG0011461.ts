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

export const REG0011461: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011461
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_FAM2_TWIST = §SI
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §FS_FAM2_VARIA = §SI
    // THEN:
    // *SET *CF = #1
    // #4
    // COND:
    // §FS_FAM2_JOY = §SI
    // THEN:
    // *SET *CF = #1
    // #5
    // COND:
    // §FS_FAM2_JOY = §SI AND §FS_DOP_MOT = §SI
    // THEN:
    // *SET *CF = #2
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    //#2
    if (vars.get('§FS_FAM2_TWIST') == vars.get('§SI')) {
        vars.setCF(1);
    }
    //#3
    if (vars.get('§FS_FAM2_VARIA') == vars.get('§SI')) {
        vars.setCF(1);
    }
    //#4
    if (vars.get('§FS_FAM2_JOY') == vars.get('§SI')) {
        vars.setCF(1);
    }
    //#5
    if (vars.get('§FS_FAM2_JOY') == vars.get('§SI') && vars.get('§FS_DOP_MOT') == vars.get('§SI')) {
        vars.setCF(2);
    }
    // GENERATED

    return vars.output;
};
