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

export const REG0002353: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002353
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = *COL
    // *SET *CON-B = *LUNG
    // *SET *CF = #0
    // #2
    // COND:
    // §TI_TRA_TET_ANT = '70X130'
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §TI_TRA_TET_INC = '70X130'
    // THEN:
    // *SET *CF = #1
    // #4
    // COND:
    // §FS_FAM2_QUADRA = §SI
    // THEN:
    // *SET *CF = #1
    // #5
    // COND:
    // §FS_FAM2_VIVA = §SI
    // THEN:
    // *SET *CF = #1
    // #6
    // COND:
    // §FS_FAM2_165 = §SI
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('*COL'));
    vars.setCON_B(vars.get('*LUNG'));
    vars.setCF(0);
    //#2
    if (vars.get('§TI_TRA_TET_ANT') == '70X130') {
        vars.setCF(1);
    }
    //#3
    if (vars.get('§TI_TRA_TET_INC') == '70X130') {
        vars.setCF(1);
    }
    //#4
    if (vars.get('§FS_FAM2_QUADRA') == vars.get('§SI')) {
        vars.setCF(1);
    }
    //#5
    if (vars.get('§FS_FAM2_VIVA') == vars.get('§SI')) {
        vars.setCF(1);
    }
    //#6
    if (vars.get('§FS_FAM2_165') == vars.get('§SI')) {
        vars.setCF(1);
    }
    // GENERATED

    return vars.output;
};
