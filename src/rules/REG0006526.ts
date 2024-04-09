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

export const REG0006526: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006526
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = '0051'
    // *SET *CON-B = [§GUI_SCO_INF1 - #0,8]
    // #2
    // COND:
    // §FS_ACC_LAT_SX = §SI AND §FS_FAM2_VARIA = §SI
    // THEN:
    // *SET *CF = #0,5
    // #3
    // COND:
    // §FS_ACC_LAT_DX = §SI AND §FS_FAM2_VARIA = §SI
    // THEN:
    // *SET *CF = #0,5
    // #4
    // COND:
    // §FS_ACC_LAT_SX = §SI AND §FS_ACC_LAT_DX = §SI AND §FS_FAM2_VARIA = §SI
    // THEN:
    // *SET *CF = #1
    // #5
    // COND:
    // §GUI_SCO_INF1 > #0
    // ELSE:
    // *SET *CF = ''
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A('0051');
    vars.setCON_B(vars.get('§GUI_SCO_INF1') - 0.8);
    //#2
    if (vars.get('§FS_ACC_LAT_SX') == vars.get('§SI') && vars.get('§FS_FAM2_VARIA') == vars.get('§SI')) {
        vars.setCF(0.5);
    }
    //#3
    if (vars.get('§FS_ACC_LAT_DX') == vars.get('§SI') && vars.get('§FS_FAM2_VARIA') == vars.get('§SI')) {
        vars.setCF(0.5);
    }
    //#4
    if (vars.get('§FS_ACC_LAT_SX') == vars.get('§SI') && vars.get('§FS_ACC_LAT_DX') == vars.get('§SI') && vars.get('§FS_FAM2_VARIA') == vars.get('§SI')) {
        vars.setCF(1);
    }
    //#5
    if (vars.get('§GUI_SCO_INF1') > 0) {
    } else {
        vars.setCF('');
    }

    // GENERATED

    return vars.output;
};
