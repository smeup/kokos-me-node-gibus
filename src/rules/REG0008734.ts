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

export const REG0008734: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008734
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_ACC_LAT_ANT = §SI
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §FS_ACC_LAT_DX = §SI
    // THEN:
    // *SET *CF = #1
    // #4
    // COND:
    // §FS_SCA_MON_ANT2 = §SI
    // THEN:
    // *SET *CF = #0
    // #5
    // COND:
    // §FS_FAM2_TWIST = §SI AND §FS_STA_MUR_ANT2 = §SI  AND §VER_STA_T01 <> '2021'
    // THEN:
    // *SET *CF = #0
    // #6
    // COND:
    // §FS_FAM2_ZENIT = §SI AND §FS_STA_MUR_ANT2 = §SI  AND §VER_STA_T01 <> '2021'
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    //#2
    if (vars.get('§FS_ACC_LAT_ANT') == vars.get('§SI')) {
        vars.setCF(1);
    }
    //#3
    if (vars.get('§FS_ACC_LAT_DX') == vars.get('§SI')) {
        vars.setCF(1);
    }
    //#4
    if (vars.get('§FS_SCA_MON_ANT2') == vars.get('§SI')) {
        vars.setCF(0);
    }
    //#5
    if ((vars.get('§FS_FAM2_TWIST') == vars.get('§SI')) && (vars.get('§FS_STA_MUR_ANT2') == vars.get('§SI')) && (vars.get('§VER_STA_T01') != '2021')) {
        vars.setCF(0);
    }
    //#6
    if ((vars.get('§FS_FAM2_ZENIT') == vars.get('§SI')) && (vars.get('§FS_STA_MUR_ANT2') == vars.get('§SI')) && (vars.get('§VER_STA_T01') != '2021')) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
