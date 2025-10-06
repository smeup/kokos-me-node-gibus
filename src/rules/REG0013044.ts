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

export const REG0013044: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0013044
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_FAM2_VARIA = §SI
    // THEN:
    // *SET *CF = #6
    // #3
    // COND:
    // §FS_FAM2_TWIST = §SI
    // THEN:
    // *SET *CF = #6
    // #4
    // COND:
    // §FS_FAM2_JOY = §SI
    // THEN:
    // *SET *CF = #4
    // #5
    // COND:
    // §FS_FAM2_VARIA = §SI AND §AUM_SPO_T01 > #12
    // THEN:
    // *SET *CF = #10
    // #6
    // COND:
    // §FS_FAM2_TWIST = §SI AND §AUM_SPO_T01 > #8
    // THEN:
    // *SET *CF = #10
    // #7
    // COND:
    // §FS_FAM2_JOY = §SI AND §AUM_SPO_T01 > #10
    // THEN:
    // *SET *CF = #8
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    //#2
    if (vars.get('§FS_FAM2_VARIA') == vars.get('§SI')) {
        vars.setCF(6);
    }
    //#3
    if (vars.get('§FS_FAM2_TWIST') == vars.get('§SI')) {
        vars.setCF(6);
    }
    //#4
    if (vars.get('§FS_FAM2_JOY') == vars.get('§SI')) {
        vars.setCF(4);
    }
    //#5
    if (vars.get('§FS_FAM2_VARIA') == vars.get('§SI') && vars.get('§AUM_SPO_T01') > 12) {
        vars.setCF(10);
    }
    //#6
    if (vars.get('§FS_FAM2_TWIST') == vars.get('§SI') && vars.get('§AUM_SPO_T01') > 8) {
        vars.setCF(10);
    }
    //#7
    if (vars.get('§FS_FAM2_JOY') == vars.get('§SI') && vars.get('§AUM_SPO_T01') > 10) {
        vars.setCF(8);
    }
    // GENERATED

    return vars.output;
};
