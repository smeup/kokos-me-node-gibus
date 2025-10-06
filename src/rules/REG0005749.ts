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

export const REG0005749: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0005749
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF=#0
    // #2
    // COND:
    // ( ( ( §TI_ATVEL_01='ALAL' ) OR ( §TI_ATVEL_01='ALBA' ) ) OR ( ( §TI_ATVEL_03='ALAL' ) OR ( §TI_ATVEL_03='ALBA' ) ) )
    // THEN:
    // *SET *CF=#1
    // #3
    // COND:
    // ( ( ( §TI_ATVEL_01='ALAL' ) OR ( §TI_ATVEL_01='ALBA' ) ) AND ( ( §TI_ATVEL_03='ALAL' ) OR ( §TI_ATVEL_03='ALBA' ) ) )
    // THEN:
    // *SET *CF=#2
    // #4
    // COND:
    // ( §TI_AUT_VER_C='02' ) AND (§FS_RIN_MURO<>§SI ) AND ( ( ( §TI_ATVEL_01<>'ALAL' ) AND ( §TI_ATVEL_01<>'ALBA' ) ) AND           ( ( §TI_ATVEL_03<>'ALAL' ) AND ( §TI_ATVEL_03<>'ALBA' ) ) )
    // THEN:
    // *SET *CF=#1
    // #5
    // COND:
    // ( §TI_AUT_VER_C='02' ) AND (§FS_RIN_MURO<>§SI ) AND ( ( ( §TI_ATVEL_01='ALAL' ) OR ( §TI_ATVEL_01='ALBA' ) ) OR               ( ( §TI_ATVEL_03='ALAL' ) OR ( §TI_ATVEL_03='ALBA' ) ) )
    // THEN:
    // *SET *CF=#2
    // #6
    // COND:
    // ( §TI_AUT_VER_C='02' ) AND (§FS_RIN_MURO<>§SI ) AND ( ( ( §TI_ATVEL_01='ALAL' ) OR ( §TI_ATVEL_01='ALBA' ) ) AND              ( ( §TI_ATVEL_03='ALAL' ) OR ( §TI_ATVEL_03='ALBA' ) ) )
    // THEN:
    // *SET *CF=#3
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (((vars.get('§TI_ATVEL_01') == 'ALAL') || (vars.get('§TI_ATVEL_01') == 'ALBA')) || ((vars.get('§TI_ATVEL_03') == 'ALAL') || (vars.get('§TI_ATVEL_03') == 'ALBA'))) {
        vars.setCF(1);
    }
    
    //#3
    if (((vars.get('§TI_ATVEL_01') == 'ALAL') || (vars.get('§TI_ATVEL_01') == 'ALBA')) && ((vars.get('§TI_ATVEL_03') == 'ALAL') || (vars.get('§TI_ATVEL_03') == 'ALBA'))) {
        vars.setCF(2);
    }
    
    //#4
    if ((vars.get('§TI_AUT_VER_C') == '02') && (vars.get('§FS_RIN_MURO') != vars.get('§SI')) && ((vars.get('§TI_ATVEL_01') != 'ALAL') && (vars.get('§TI_ATVEL_01') != 'ALBA')) && ((vars.get('§TI_ATVEL_03') != 'ALAL') && (vars.get('§TI_ATVEL_03') != 'ALBA'))) {
        vars.setCF(1);
    }
    
    //#5
    if ((vars.get('§TI_AUT_VER_C') == '02') && (vars.get('§FS_RIN_MURO') != vars.get('§SI')) && (((vars.get('§TI_ATVEL_01') == 'ALAL') || (vars.get('§TI_ATVEL_01') == 'ALBA')) || ((vars.get('§TI_ATVEL_03') == 'ALAL') || (vars.get('§TI_ATVEL_03') == 'ALBA')))) {
        vars.setCF(2);
    }
    
    //#6
    if ((vars.get('§TI_AUT_VER_C') == '02') && (vars.get('§FS_RIN_MURO') != vars.get('§SI')) && (((vars.get('§TI_ATVEL_01') == 'ALAL') || (vars.get('§TI_ATVEL_01') == 'ALBA')) && ((vars.get('§TI_ATVEL_03') == 'ALAL') || (vars.get('§TI_ATVEL_03') == 'ALBA')))) {
        vars.setCF(3);
    }
    
    // GENERATED

    return vars.output;
};
