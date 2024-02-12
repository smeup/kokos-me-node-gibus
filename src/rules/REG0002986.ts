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

export const REG0002986: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0002986
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CON-A = §VERN_PLAST
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_BLO_MAG = §SI AND §FS_FAM2_DUETTO = §SI
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // §FS_BLO_MAG = §SI AND §FS_FAM2_DUETTO = §SI AND §NR_BLO_MAG > #0
    // THEN:
    // *SET *CF = §NR_BLO_MAG
    // #4
    // COND:
    // §FS_BLO_MAG = §SI AND §FS_VERTI90 = §SI
    // THEN:
    // *SET *CF = #1
    // #5
    // COND:
    // §FS_BLO_MAG = §SI AND §FS_VERTI90_Z_BA = §SI
    // THEN:
    // *SET *CF = #1
    // #6
    // COND:
    // §VERN_PLAST = 'P072'
    // THEN:
    // *SET *CON-A = 'P073'
    // #7
    // COND:
    // §FS_FAM2_DUETTO = §SI AND (§VERN_1_COM = '0069' OR §VR_ABB = '06')
    // THEN:
    // *SET *CON-A = 'P069'
    // """
    // RESPONSE:
    //#1
    vars.setCON_A(vars.get('§VERN_PLAST'));
    vars.setCF(0);
    //#2
    if (vars.get('§FS_BLO_MAG') == vars.get('§SI') && vars.get('§FS_FAM2_DUETTO') == vars.get('§SI')) {
        vars.setCF(1);
    }
    //#3
    if (vars.get('§FS_BLO_MAG') == vars.get('§SI') && vars.get('§FS_FAM2_DUETTO') == vars.get('§SI') && vars.get('§NR_BLO_MAG') > 0) {
        vars.setCF(vars.get('§NR_BLO_MAG'));
    }
    //#4
    if (vars.get('§FS_BLO_MAG') == vars.get('§SI') && vars.get('§FS_VERTI90') == vars.get('§SI')) {
        vars.setCF(1);
    }
    //#5
    if (vars.get('§FS_BLO_MAG') == vars.get('§SI') && vars.get('§FS_VERTI90_Z_BA') == vars.get('§SI')) {
        vars.setCF(1);
    }
    //#6
    if (vars.get('§VERN_PLAST') == 'P072') {
        vars.setCON_A('P073');
    }
    //#7
    if (vars.get('§FS_FAM2_DUETTO') == vars.get('§SI') && (vars.get('§VERN_1_COM') == '0069' || vars.get('§VR_ABB') == '06')) {
        vars.setCON_A('P069');
    }
    // GENERATED

    return vars.output;
};
