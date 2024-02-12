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

export const REG0008697: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0008697
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = §VERN_1_COM
    // #2
    // THEN:
    // *SET *CM = 'FT_TA_MO_ANG'
    // #3
    // COND:
    // §FS_MON_POS_2 <> §SI AND §TI_ANG_POS2 <> '01'  AND §TI_ANG_POS2 <> '02'
    // THEN:
    // *SET *CM = 'FT_TA_MO_PIA'
    // #4
    // COND:
    // §FS_ACC_LAT_POS = §SI
    // THEN:
    // *SET *CM = 'FT_TA_MO_PIA'
    // #5
    // COND:
    // §FS_ACC_LAT_DX = §SI
    // THEN:
    // *SET *CM = 'FT_TA_MO_PIA'
    // #6
    // COND:
    // §FS_FAM2_JOY = §SI
    // THEN:
    // *SET *CON-B = #24,7
    // #7
    // COND:
    // §FS_FAM2_JOY = §SI AND §FS_MON_POS_2 = §SI
    // THEN:
    // *SET *CON-B = #24,4
    // #8
    // COND:
    // §FS_FAM2_JOY = §SI AND §FS_PO_AGG_MUR2 = §SI
    // THEN:
    // *SET *CON-B = #24,5
    // #9
    // COND:
    // §FS_FAM2_ZENIT = §SI OR §FS_FAM2_TWIST = §SI
    // THEN:
    // *SET *CON-B = #30,8
    // #10
    // COND:
    // (§FS_FAM2_ZENIT = §SI OR §FS_FAM2_TWIST = §SI) AND §FS_MON_POS_2 = §SI
    // THEN:
    // *SET *CON-B = #29,8
    // #11
    // COND:
    // §FS_FAM2_AZIMUT = §SI OR §FS_FAM2_VARIA = §SI
    // THEN:
    // *SET *CON-B = #31
    // #12
    // COND:
    // (§FS_FAM2_AZIMUT = §SI OR §FS_FAM2_VARIA = §SI) AND (§FS_MON_POS_2 = §SI AND §TI_PR_POS2 = '01')
    // THEN:
    // *SET *CON-B = #30,7
    // #13
    // COND:
    // (§FS_FAM2_AZIMUT = §SI OR §FS_FAM2_VARIA = §SI) AND §FS_PO_AGG_MUR2 = §SI
    // THEN:
    // *SET *CON-B = #30,7
    // #14
    // THEN:
    // *SET §DUMMYB1 = ''
    // #15
    // COND:
    // §FS_FAM2_JOY = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #16
    // COND:
    // §DUMMYB1 = §SI AND *CM = 'FT_TA_MO_PIA' AND *CON-B = #24,4
    // THEN:
    // *SET *CM = 'FT_TA_MO_T03'
    // #17
    // COND:
    // §FS_FAM2_JOY = §SI AND §FS_MON_POS_2 <> §SI AND §FS_ACC_POS2 = §SI
    // THEN:
    // *SET *CM = 'FT_TA_MO_PI2'
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('§VERN_1_COM'));
    //#2
    vars.setCM('FT_TA_MO_ANG');
    //#3
    if (vars.get('§FS_MON_POS_2') != vars.get('§SI') && vars.get('§TI_ANG_POS2') != '01' && vars.get('§TI_ANG_POS2') != '02') {
        vars.setCM('FT_TA_MO_PIA');
    }
    //#4
    if (vars.get('§FS_ACC_LAT_POS') == vars.get('§SI')) {
        vars.setCM('FT_TA_MO_PIA');
    }
    //#5
    if (vars.get('§FS_ACC_LAT_DX') == vars.get('§SI')) {
        vars.setCM('FT_TA_MO_PIA');
    }
    //#6
    if (vars.get('§FS_FAM2_JOY') == vars.get('§SI')) {
        vars.setCON_B(24.7);
    }
    //#7
    if (vars.get('§FS_FAM2_JOY') == vars.get('§SI') && vars.get('§FS_MON_POS_2') == vars.get('§SI')) {
        vars.setCON_B(24.4);
    }
    //#8
    if (vars.get('§FS_FAM2_JOY') == vars.get('§SI') && vars.get('§FS_PO_AGG_MUR2') == vars.get('§SI')) {
        vars.setCON_B(24.5);
    }
    //#9
    if (vars.get('§FS_FAM2_ZENIT') == vars.get('§SI') || vars.get('§FS_FAM2_TWIST') == vars.get('§SI')) {
        vars.setCON_B(30.8);
    }
    //#10
    if ((vars.get('§FS_FAM2_ZENIT') == vars.get('§SI') || vars.get('§FS_FAM2_TWIST') == vars.get('§SI')) && vars.get('§FS_MON_POS_2') == vars.get('§SI')) {
        vars.setCON_B(29.8);
    }
    //#11
    if (vars.get('§FS_FAM2_AZIMUT') == vars.get('§SI') || vars.get('§FS_FAM2_VARIA') == vars.get('§SI')) {
        vars.setCON_B(31);
    }
    //#12
    if ((vars.get('§FS_FAM2_AZIMUT') == vars.get('§SI') || vars.get('§FS_FAM2_VARIA') == vars.get('§SI')) && (vars.get('§FS_MON_POS_2') == vars.get('§SI') && vars.get('§TI_PR_POS2') == '01')) {
        vars.setCON_B(30.7);
    }
    //#13
    if ((vars.get('§FS_FAM2_AZIMUT') == vars.get('§SI') || vars.get('§FS_FAM2_VARIA') == vars.get('§SI')) && vars.get('§FS_PO_AGG_MUR2') == vars.get('§SI')) {
        vars.setCON_B(30.7);
    }
    //#14
    vars.setDUMMYB1('');
    //#15
    if (vars.get('§FS_FAM2_JOY') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    //#16
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('*CM') == 'FT_TA_MO_PIA' && vars.get('*CON-B') == 24.4) {
        vars.setCM('FT_TA_MO_T03');
    }
    //#17
    if (vars.get('§FS_FAM2_JOY') == vars.get('§SI') && vars.get('§FS_MON_POS_2') != vars.get('§SI') && vars.get('§FS_ACC_POS2') == vars.get('§SI')) {
        vars.setCM('FT_TA_MO_PI2');
    }
    // GENERATED

    return vars.output;
};
