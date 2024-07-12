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

export const REG0008693: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008693
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_MON_POS1_ACC = §SI
    // THEN:
    // *SET *CF = #0
    // #2
    // THEN:
    // *SET §DUMMYB1 = ''
    // *SET §DUMMYB2 = ''
    // #3
    // COND:
    // §FS_ACC_LAT_POS = §SI OR ( §FS_ADD_LAT_POS = §SI AND §FS_STA_MUR_POS1 = §SI )
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #4
    // COND:
    // §FS_ACC_LAT_SX = §SI OR ( §FS_ADD_LAT_SX = §SI AND  §FS_STA_MUR_POS1 = §SI )
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #5
    // COND:
    // §DUMMYB1 = §SI AND §DUMMYB2 = §SI
    // THEN:
    // *SET *CF = #0
    // #6
    // COND:
    // §TI_ANG_POS1 = '04'
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_MON_POS1_ACC') == vars.get('§SI')) {
        vars.setCF(0);
    }
    //#2
    vars.setDUMMYB1('');
    vars.setDUMMYB2('');
    //#3
    if (vars.get('§FS_ACC_LAT_POS') == vars.get('§SI') || (vars.get('§FS_ADD_LAT_POS') == vars.get('§SI') && vars.get('§FS_STA_MUR_POS1') == vars.get('§SI'))) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    //#4
    if (vars.get('§FS_ACC_LAT_SX') == vars.get('§SI') || (vars.get('§FS_ADD_LAT_SX') == vars.get('§SI') && vars.get('§FS_STA_MUR_POS1') == vars.get('§SI'))) {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    //#5
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§DUMMYB2') == vars.get('§SI')) {
        vars.setCF(0);
    }
    //#6
    if (vars.get('§TI_ANG_POS1') == '04') {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
