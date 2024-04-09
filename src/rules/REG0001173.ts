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

export const REG0001173: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001173
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // (§FS_FAM2_TOLO = §SI) OR (§FS_SP_0_GCT = §SI) OR (§FS_FRO_TOL = §SI) OR (§FS_13_QU_GC = §SI)
    // THEN:
    // *SET *CF = [§NR_ZAVOR_AGG + §NR_ZAVOR_FRONTA]
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    //#2
    if ((vars.get('§FS_FAM2_TOLO') == vars.get('§SI')) || (vars.get('§FS_SP_0_GCT') == vars.get('§SI')) || (vars.get('§FS_FRO_TOL') == vars.get('§SI')) || (vars.get('§FS_13_QU_GC') == vars.get('§SI'))) {
        vars.setCF(vars.get('§NR_ZAVOR_AGG') + vars.get('§NR_ZAVOR_FRONTA'));
    }
    // GENERATED

    return vars.output;
};
