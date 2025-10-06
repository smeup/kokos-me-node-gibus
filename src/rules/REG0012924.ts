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

export const REG0012924: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0012924
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = *COL
    // *SET *CON-B = [ *LUNG - #15 ]
    // #2
    // COND:
    // §FS_FAM2_JOY = §SI AND ( §NR_SCH_ANT1 > #0 OR §NR_USB_ANT1 > #0 )
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §FS_ACC_LAT_ANT = §SI
    // THEN:
    // *SET *CF = #0
    // #4
    // COND:
    // §FS_ACC_LAT_SX = §SI
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('*COL'));
    vars.setCON_B(vars.get('*LUNG') - 15);
    //#2
    if (vars.get('§FS_FAM2_JOY') == vars.get('§SI') && (vars.get('§NR_SCH_ANT1') > 0 || vars.get('§NR_USB_ANT1') > 0)) {
        vars.setCF(1);
    }
    //#3
    if (vars.get('§FS_ACC_LAT_ANT') == vars.get('§SI')) {
        vars.setCF(0);
    }
    //#4
    if (vars.get('§FS_ACC_LAT_SX') == vars.get('§SI')) {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
