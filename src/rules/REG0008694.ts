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

export const REG0008694: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008694
    // REQUEST:
    // """
    // #1
    // COND:
    // §FS_MON_POS2_ACC = §SI
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_ANG_POS2_ACC = §SI
    // THEN:
    // *SET *CF = #0
    // #3
    // THEN:
    // *SET §DUMMYB1 = ''
    // *SET §DUMMYB2 = ''
    // #4
    // COND:
    // §FS_ACC_LAT_POS = §SI OR ( §FS_ADD_LAT_POS = §SI AND §FS_STA_MUR_POS2 = §SI )
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #5
    // COND:
    // §FS_ACC_LAT_DX = §SI OR ( §FS_ADD_LAT_DX = §SI AND  §FS_STA_MUR_POS2 = §SI )
    // THEN:
    // *SET §DUMMYB2 = §SI
    // #6
    // COND:
    // §DUMMYB1 = §SI AND §DUMMYB2 = §SI
    // THEN:
    // *SET *CF = #0
    // #7
    // COND:
    // §TI_ANG_POS2 = '04'
    // THEN:
    // *SET *CF = #0
    // """
    // RESPONSE:
    //#1
    if (vars.get('§FS_MON_POS2_ACC') == vars.get('§SI')) {
        vars.setCF(0);
    }
    //#2
    if (vars.get('§FS_ANG_POS2_ACC') == vars.get('§SI')) {
        vars.setCF(0);
    }
    //#3
    vars.setDUMMYB1('');
    vars.setDUMMYB2('');
    //#4
    if ((vars.get('§FS_ACC_LAT_POS') == vars.get('§SI')) || (vars.get('§FS_ADD_LAT_POS') == vars.get('§SI') && vars.get('§FS_STA_MUR_POS2') == vars.get('§SI'))) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    //#5
    if ((vars.get('§FS_ACC_LAT_DX') == vars.get('§SI')) || (vars.get('§FS_ADD_LAT_DX') == vars.get('§SI') && vars.get('§FS_STA_MUR_POS2') == vars.get('§SI'))) {
        vars.setDUMMYB2(vars.get('§SI'));
    }
    //#6
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§DUMMYB2') == vars.get('§SI')) {
        vars.setCF(0);
    }
    //#7
    if (vars.get('§TI_ANG_POS2') == '04') {
        vars.setCF(0);
    }
    // GENERATED

    return vars.output;
};
