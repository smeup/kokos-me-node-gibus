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

export const REG0005771: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005771
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // ( §FS_AT_BORI_MAG=§SI ) AND ( ( ( §TI_ATVEL_02='PAAL') OR ( §TI_ATVEL_02='PABA' )) OR  ( ( §TI_ATVEL_04='PAAL' ) OR           (§TI_ATVEL_04='PABA' ) ) ) AND ( §FS_SOF_BOM_01<>§SI ) AND ( §FS_SOF_BOM_03<>§SI )
    // THEN:
    // *SET *CF=#1
    // #3
    // COND:
    // ( §FS_AT_BORI_MAG=§SI ) AND ( ( ( §TI_ATVEL_02='PAAL') OR ( §TI_ATVEL_02='PABA' ) ) AND  ( ( §TI_ATVEL_04='PAAL' ) OR         (§TI_ATVEL_04='PABA' ) ) ) AND ( §FS_SOF_BOM_01<>§SI ) AND ( §FS_SOF_BOM_03<>§SI )
    // THEN:
    // *SET *CF=#2
    // #4
    // COND:
    // ( §FS_AT_BORI_MAG=§SI ) AND ( §FS_RIN_MURO=§SI ) AND ( ( ( §TI_ATVEL_02<>'PAAL') AND ( §TI_ATVEL_02<>'PABA' ) ) AND          ( ( §TI_ATVEL_04<>'PAAL' ) AND ( §TI_ATVEL_04<>'PABA' ) ) ) AND ( §FS_SOF_BOM_01<>§SI ) AND ( §FS_SOF_BOM_03<>§SI )
    // THEN:
    // *SET *CF=#1
    // #5
    // COND:
    // ( §FS_AT_BORI_MAG=§SI ) AND ( §FS_RIN_MURO=§SI ) AND ( ( ( §TI_ATVEL_02='PAAL') OR ( §TI_ATVEL_02='PABA' ) ) OR              ( ( §TI_ATVEL_04='PAAL' ) OR ( §TI_ATVEL_04='PABA' ) ) ) AND ( §FS_SOF_BOM_01<>§SI ) AND ( §FS_SOF_BOM_03<>§SI )
    // THEN:
    // *SET *CF=#2
    // #6
    // COND:
    // ( §FS_AT_BORI_MAG=§SI ) AND ( §FS_RIN_MURO=§SI ) AND ( ( ( §TI_ATVEL_02='PAAL') OR ( §TI_ATVEL_02='PABA' ) ) AND              ( ( §TI_ATVEL_04='PAAL' ) OR ( §TI_ATVEL_04='PABA' ) ) ) AND ( §FS_SOF_BOM_01<>§SI ) AND ( §FS_SOF_BOM_03<>§SI )
    // THEN:
    // *SET *CF=#3
    // #7
    // COND:
    // ( §FS_AT_BORI_MAG=§SI ) AND ( §TI_AUT_VER_C='02' ) AND ( §FS_RIN_MURO=§SI ) AND                                                ( ( ( §TI_ATVEL_02<>'PAAL') AND ( §TI_ATVEL_02<>'PABA' )) AND ( ( §TI_ATVEL_04<>'PAAL' ) AND ( §TI_ATVEL_04<>'PABA' ) ) )    AND ( §FS_SOF_BOM_01<>§SI ) AND ( §FS_SOF_BOM_03<>§SI )
    // THEN:
    // *SET *CF=#2
    // #8
    // COND:
    // ( §FS_AT_BORI_MAG=§SI ) AND ( §TI_AUT_VER_C='02' ) AND ( §FS_RIN_MURO=§SI ) AND                                                ( ( ( §TI_ATVEL_02='PAAL' ) OR ( §TI_ATVEL_02='PABA' )) OR ( ( §TI_ATVEL_04='PAAL' ) OR ( §TI_ATVEL_04='PABA' ) ) )         AND ( §FS_SOF_BOM_01<>§SI ) AND ( §FS_SOF_BOM_03<>§SI )
    // THEN:
    // *SET *CF=#3
    // #9
    // COND:
    // ( §FS_AT_BORI_MAG=§SI ) AND ( §TI_AUT_VER_C='02' ) AND ( §FS_RIN_MURO=§SI ) AND                                                ( ( ( §TI_ATVEL_02='PAAL' ) OR ( §TI_ATVEL_02='PABA' )) AND ( ( §TI_ATVEL_04='PAAL' ) OR ( §TI_ATVEL_04='PABA' ) ) )       AND ( §TI_VEL_LIBRE='W4' ) AND ( §FS_SOF_BOM_01<>§SI ) AND ( §FS_SOF_BOM_03<>§SI )
    // THEN:
    // *SET *CF=#4
    // #10
    // COND:
    // ( ( ( §TI_ATVEL_01='PAAL' ) OR ( §TI_ATVEL_01='PABA' ) ) OR ( ( §TI_ATVEL_03='PAAL' ) OR                                     ( §TI_ATVEL_03='PABA' ) ) ) AND ( §FS_RIN_MURO<>§SI ) AND (( §FS_SOF_BOM_01<>§SI ) OR ( §FS_SOF_BOM_03<>§SI ))  AND          ( §FS_AT_BORI_MAG=§SI )
    // THEN:
    // *SET *CF=#1
    // #11
    // COND:
    // ( ( ( §TI_ATVEL_01='PAAL' ) OR ( §TI_ATVEL_01='PABA' ) ) AND ( ( §TI_ATVEL_03='PAAL' ) OR                                        ( §TI_ATVEL_03='PABA' ) ) ) AND ( §FS_RIN_MURO<>§SI ) AND (( §FS_SOF_BOM_01<>§SI ) AND ( §FS_SOF_BOM_03<>§SI ))  AND         ( §FS_AT_BORI_MAG=§SI )
    // THEN:
    // *SET *CF=#2
    // #12
    // COND:
    // ( ( ( §TI_ATVEL_01='PAAL' ) OR ( §TI_ATVEL_01='PABA' ) ) OR ( ( §TI_ATVEL_03='PAAL' ) OR                                     ( §TI_ATVEL_03='PABA' ) ) ) AND ( §FS_RIN_MURO=§SI ) AND (( §FS_SOF_BOM_01<>§SI ) OR ( §FS_SOF_BOM_03<>§SI ))  AND           ( §FS_AT_BORI_MAG=§SI )
    // THEN:
    // *SET *CF= [ §QRIN_MURO + #1 ]
    // #13
    // COND:
    // ( ( ( §TI_ATVEL_01='PAAL' ) OR ( §TI_ATVEL_01='PABA' ) ) AND ( ( §TI_ATVEL_03='PAAL' ) OR                                        ( §TI_ATVEL_03='PABA' ) ) ) AND ( §FS_RIN_MURO=§SI ) AND (( §FS_SOF_BOM_01<>§SI ) AND ( §FS_SOF_BOM_03<>§SI ))  AND          ( §FS_AT_BORI_MAG=§SI )
    // THEN:
    // *SET *CF= [ §QRIN_MURO + #2 ]
    // #14
    // COND:
    // ( ( ( §TI_ATVEL_01='PAAL' ) OR ( §TI_ATVEL_01='PABA' ) ) AND ( ( §TI_ATVEL_03='PAAL' ) OR                                    ( §TI_ATVEL_03='PABA' ) ) ) AND ( §FS_RIN_MURO=§SI ) AND (( §FS_SOF_BOM_01=§SI ) AND ( §FS_SOF_BOM_03=§SI ))  AND            ( §FS_AT_BORI_MAG=§SI )
    // THEN:
    // *SET *CF= [ §QRIN_MURO ]
    // #15
    // COND:
    // ( ( ( §TI_ATVEL_01='PAAL' ) OR ( §TI_ATVEL_01='PABA' ) ) AND ( ( §TI_ATVEL_03='PAAL' ) OR  ( §TI_ATVEL_03='PABA' ) ) )         AND (( §FS_SOF_BOM_01=§SI ) AND ( §FS_SOF_BOM_03=§SI )) AND ( §FS_DOP_MOT = §SI )
    // THEN:
    // *SET *CF=#0
    // #16
    // COND:
    // ( ( ( §TI_ATVEL_01='PAAL' ) OR ( §TI_ATVEL_01='PABA' ) ) OR ( ( §TI_ATVEL_03='PAAL' ) OR                                     ( §TI_ATVEL_03='PABA' ) ) ) AND ( §FS_RIN_MURO<>§SI ) AND (( §FS_SOF_BOM_01=§SI ) OR ( §FS_SOF_BOM_03=§SI ))  AND            ( §FS_AT_BORI_MAG=§SI ) AND ( §TI_VEL_LIBRE<>'W4' )
    // THEN:
    // *SET *CF=#0
    // #17
    // COND:
    // ( ( ( §TI_ATVEL_01='PAAL' ) OR ( §TI_ATVEL_01='PABA' ) ) OR ( ( §TI_ATVEL_03='PAAL' ) OR                                     ( §TI_ATVEL_03='PABA' ) ) ) AND ( §FS_RIN_MURO=§SI ) AND (( §FS_SOF_BOM_01=§SI ) OR ( §FS_SOF_BOM_03=§SI ))  AND             ( §FS_AT_BORI_MAG=§SI ) AND  ( §TI_VEL_LIBRE<>'W4' )
    // THEN:
    // *SET *CF= §QRIN_MURO
    // """
    // RESPONSE:
    
    //#1
    vars.setCF(0);
    //#2
    if ((vars.get('§FS_AT_BORI_MAG') == vars.get('§SI')) && (((vars.get('§TI_ATVEL_02') == 'PAAL') || (vars.get('§TI_ATVEL_02') == 'PABA')) || ((vars.get('§TI_ATVEL_04') == 'PAAL') || (vars.get('§TI_ATVEL_04') == 'PABA'))) && (vars.get('§FS_SOF_BOM_01') != vars.get('§SI')) && (vars.get('§FS_SOF_BOM_03') != vars.get('§SI'))) {
        vars.setCF(1);
    }
    //#3
    if ((vars.get('§FS_AT_BORI_MAG') == vars.get('§SI')) && (((vars.get('§TI_ATVEL_02') == 'PAAL') || (vars.get('§TI_ATVEL_02') == 'PABA')) && ((vars.get('§TI_ATVEL_04') == 'PAAL') || (vars.get('§TI_ATVEL_04') == 'PABA'))) && (vars.get('§FS_SOF_BOM_01') != vars.get('§SI')) && (vars.get('§FS_SOF_BOM_03') != vars.get('§SI'))) {
        vars.setCF(2);
    }
    //#4
    if ((vars.get('§FS_AT_BORI_MAG') == vars.get('§SI')) && (vars.get('§FS_RIN_MURO') == vars.get('§SI')) && (((vars.get('§TI_ATVEL_02') != 'PAAL') && (vars.get('§TI_ATVEL_02') != 'PABA')) && ((vars.get('§TI_ATVEL_04') != 'PAAL') && (vars.get('§TI_ATVEL_04') != 'PABA'))) && (vars.get('§FS_SOF_BOM_01') != vars.get('§SI')) && (vars.get('§FS_SOF_BOM_03') != vars.get('§SI'))) {
        vars.setCF(1);
    }
    //#5
    if ((vars.get('§FS_AT_BORI_MAG') == vars.get('§SI')) && (vars.get('§FS_RIN_MURO') == vars.get('§SI')) && (((vars.get('§TI_ATVEL_02') == 'PAAL') || (vars.get('§TI_ATVEL_02') == 'PABA')) || ((vars.get('§TI_ATVEL_04') == 'PAAL') || (vars.get('§TI_ATVEL_04') == 'PABA'))) && (vars.get('§FS_SOF_BOM_01') != vars.get('§SI')) && (vars.get('§FS_SOF_BOM_03') != vars.get('§SI'))) {
        vars.setCF(2);
    }
    //#6
    if ((vars.get('§FS_AT_BORI_MAG') == vars.get('§SI')) && (vars.get('§FS_RIN_MURO') == vars.get('§SI')) && (((vars.get('§TI_ATVEL_02') == 'PAAL') || (vars.get('§TI_ATVEL_02') == 'PABA')) && ((vars.get('§TI_ATVEL_04') == 'PAAL') || (vars.get('§TI_ATVEL_04') == 'PABA'))) && (vars.get('§FS_SOF_BOM_01') != vars.get('§SI')) && (vars.get('§FS_SOF_BOM_03') != vars.get('§SI'))) {
        vars.setCF(3);
    }
    //#7
    if ((vars.get('§FS_AT_BORI_MAG') == vars.get('§SI')) && (vars.get('§TI_AUT_VER_C') == '02') && (vars.get('§FS_RIN_MURO') == vars.get('§SI')) && (((vars.get('§TI_ATVEL_02') != 'PAAL') && (vars.get('§TI_ATVEL_02') != 'PABA')) && ((vars.get('§TI_ATVEL_04') != 'PAAL') && (vars.get('§TI_ATVEL_04') != 'PABA'))) && (vars.get('§FS_SOF_BOM_01') != vars.get('§SI')) && (vars.get('§FS_SOF_BOM_03') != vars.get('§SI'))) {
        vars.setCF(2);
    }
    //#8
    if ((vars.get('§FS_AT_BORI_MAG') == vars.get('§SI')) && (vars.get('§TI_AUT_VER_C') == '02') && (vars.get('§FS_RIN_MURO') == vars.get('§SI')) && (((vars.get('§TI_ATVEL_02') == 'PAAL') || (vars.get('§TI_ATVEL_02') == 'PABA')) || ((vars.get('§TI_ATVEL_04') == 'PAAL') || (vars.get('§TI_ATVEL_04') == 'PABA'))) && (vars.get('§FS_SOF_BOM_01') != vars.get('§SI')) && (vars.get('§FS_SOF_BOM_03') != vars.get('§SI'))) {
        vars.setCF(3);
    }
    //#9
    if ((vars.get('§FS_AT_BORI_MAG') == vars.get('§SI')) && (vars.get('§TI_AUT_VER_C') == '02') && (vars.get('§FS_RIN_MURO') == vars.get('§SI')) && (((vars.get('§TI_ATVEL_02') == 'PAAL') || (vars.get('§TI_ATVEL_02') == 'PABA')) && ((vars.get('§TI_ATVEL_04') == 'PAAL') || (vars.get('§TI_ATVEL_04') == 'PABA'))) && (vars.get('§TI_VEL_LIBRE') == 'W4') && (vars.get('§FS_SOF_BOM_01') != vars.get('§SI')) && (vars.get('§FS_SOF_BOM_03') != vars.get('§SI'))) {
        vars.setCF(4);
    }
    //#10
    if ((((vars.get('§TI_ATVEL_01') == 'PAAL') || (vars.get('§TI_ATVEL_01') == 'PABA')) || ((vars.get('§TI_ATVEL_03') == 'PAAL') || (vars.get('§TI_ATVEL_03') == 'PABA'))) && (vars.get('§FS_RIN_MURO') != vars.get('§SI')) && ((vars.get('§FS_SOF_BOM_01') != vars.get('§SI')) || (vars.get('§FS_SOF_BOM_03') != vars.get('§SI'))) && (vars.get('§FS_AT_BORI_MAG') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    //#11
    if ((((vars.get('§TI_ATVEL_01') == 'PAAL') || (vars.get('§TI_ATVEL_01') == 'PABA')) && ((vars.get('§TI_ATVEL_03') == 'PAAL') || (vars.get('§TI_ATVEL_03') == 'PABA'))) && (vars.get('§FS_RIN_MURO') != vars.get('§SI')) && ((vars.get('§FS_SOF_BOM_01') != vars.get('§SI')) && (vars.get('§FS_SOF_BOM_03') != vars.get('§SI'))) && (vars.get('§FS_AT_BORI_MAG') == vars.get('§SI'))) {
        vars.setCF(2);
    }
    //#12
    if ((((vars.get('§TI_ATVEL_01') == 'PAAL') || (vars.get('§TI_ATVEL_01') == 'PABA')) || ((vars.get('§TI_ATVEL_03') == 'PAAL') || (vars.get('§TI_ATVEL_03') == 'PABA'))) && (vars.get('§FS_RIN_MURO') == vars.get('§SI')) && ((vars.get('§FS_SOF_BOM_01') != vars.get('§SI')) || (vars.get('§FS_SOF_BOM_03') != vars.get('§SI'))) && (vars.get('§FS_AT_BORI_MAG') == vars.get('§SI'))) {
        vars.setCF(vars.get('§QRIN_MURO') + 1);
    }
    //#13
    if ((((vars.get('§TI_ATVEL_01') == 'PAAL') || (vars.get('§TI_ATVEL_01') == 'PABA')) && ((vars.get('§TI_ATVEL_03') == 'PAAL') || (vars.get('§TI_ATVEL_03') == 'PABA'))) && (vars.get('§FS_RIN_MURO') == vars.get('§SI')) && ((vars.get('§FS_SOF_BOM_01') != vars.get('§SI')) && (vars.get('§FS_SOF_BOM_03') != vars.get('§SI'))) && (vars.get('§FS_AT_BORI_MAG') == vars.get('§SI'))) {
        vars.setCF(vars.get('§QRIN_MURO') + 2);
    }
    //#14
    if ((((vars.get('§TI_ATVEL_01') == 'PAAL') || (vars.get('§TI_ATVEL_01') == 'PABA')) && ((vars.get('§TI_ATVEL_03') == 'PAAL') || (vars.get('§TI_ATVEL_03') == 'PABA'))) && (vars.get('§FS_RIN_MURO') == vars.get('§SI')) && ((vars.get('§FS_SOF_BOM_01') == vars.get('§SI')) && (vars.get('§FS_SOF_BOM_03') == vars.get('§SI'))) && (vars.get('§FS_AT_BORI_MAG') == vars.get('§SI'))) {
        vars.setCF(vars.get('§QRIN_MURO'));
    }
    //#15
    if ((((vars.get('§TI_ATVEL_01') == 'PAAL') || (vars.get('§TI_ATVEL_01') == 'PABA')) && ((vars.get('§TI_ATVEL_03') == 'PAAL') || (vars.get('§TI_ATVEL_03') == 'PABA'))) && ((vars.get('§FS_SOF_BOM_01') == vars.get('§SI')) && (vars.get('§FS_SOF_BOM_03') == vars.get('§SI'))) && (vars.get('§FS_DOP_MOT') == vars.get('§SI'))) {
        vars.setCF(0);
    }
    //#16
    if ((((vars.get('§TI_ATVEL_01') == 'PAAL') || (vars.get('§TI_ATVEL_01') == 'PABA')) || ((vars.get('§TI_ATVEL_03') == 'PAAL') || (vars.get('§TI_ATVEL_03') == 'PABA'))) && (vars.get('§FS_RIN_MURO') != vars.get('§SI')) && ((vars.get('§FS_SOF_BOM_01') == vars.get('§SI')) || (vars.get('§FS_SOF_BOM_03') == vars.get('§SI'))) && (vars.get('§FS_AT_BORI_MAG') == vars.get('§SI')) && (vars.get('§TI_VEL_LIBRE') != 'W4')) {
        vars.setCF(0);
    }
    //#17
    if ((((vars.get('§TI_ATVEL_01') == 'PAAL') || (vars.get('§TI_ATVEL_01') == 'PABA')) || ((vars.get('§TI_ATVEL_03') == 'PAAL') || (vars.get('§TI_ATVEL_03') == 'PABA'))) && (vars.get('§FS_RIN_MURO') == vars.get('§SI')) && ((vars.get('§FS_SOF_BOM_01') == vars.get('§SI')) || (vars.get('§FS_SOF_BOM_03') == vars.get('§SI'))) && (vars.get('§FS_AT_BORI_MAG') == vars.get('§SI')) && (vars.get('§TI_VEL_LIBRE') != 'W4')) {
        vars.setCF(vars.get('§QRIN_MURO'));
    }
    // GENERATED

    return vars.output;
};
