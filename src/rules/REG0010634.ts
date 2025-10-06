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

export const REG0010634: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010634
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = 'P000'
    // #2
    // THEN:
    // *SET §DUMMYB1 = ''
    // #3
    // COND:
    // §FS_FAM2_CLI_ZIP = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #4
    // COND:
    // §FS_TEL_TWI = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #5
    // COND:
    // §FS_11_QUJ = §SI AND §NR_VER_FRO >= #1
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #6
    // COND:
    // §FS_13_QU = §SI AND §NR_VER_FRO >= #1
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #7
    // COND:
    // §FS_CHI_VAR = §SI AND §NR_VER_FRO >= #1
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #8
    // COND:
    // §FS_13_QU_GC = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #9
    // COND:
    // §FS_TEL_RUL_FRO = §SI AND §TI_FRO = '03'
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #10
    // COND:
    // §DUMMYB1 = §SI AND §L_FRONTALE_TG > #0
    // THEN:
    // *SET *CF = §NR_PZ_FRONTALE
    // *SET *CON-B = §L_FRONTALE_TG
    // #11
    // THEN:
    // *SET §DUMMYB1 = ''
    // #12
    // COND:
    // §FS_CLI_ZIP_TWI = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #13
    // COND:
    // §FS_CLI_TWI_BG = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #14
    // COND:
    // §FS_POLIESTERE = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #15
    // COND:
    // §FS_ACRILICO = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #16
    // COND:
    // §FS_CAM_TS = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #17
    // COND:
    // §FS_PVC = §SI
    // #18
    // COND:
    // §FS_CRISTAL = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #19
    // COND:
    // §FS_CRI_INF = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #20
    // COND:
    // §DUMMYB1 = §SI
    // THEN:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A('P000');
    
    //#2
    vars.setDUMMYB1('');
    
    //#3
    if (vars.get('§FS_FAM2_CLI_ZIP') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#4
    if (vars.get('§FS_TEL_TWI') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#5
    if (vars.get('§FS_11_QUJ') == vars.get('§SI') && vars.get('§NR_VER_FRO') >= 1) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#6
    if (vars.get('§FS_13_QU') == vars.get('§SI') && vars.get('§NR_VER_FRO') >= 1) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#7
    if (vars.get('§FS_CHI_VAR') == vars.get('§SI') && vars.get('§NR_VER_FRO') >= 1) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#8
    if (vars.get('§FS_13_QU_GC') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#9
    if (vars.get('§FS_TEL_RUL_FRO') == vars.get('§SI') && vars.get('§TI_FRO') == '03') {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#10
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§L_FRONTALE_TG') > 0) {
        vars.setCF(vars.get('§NR_PZ_FRONTALE'));
        vars.setCON_B(vars.get('§L_FRONTALE_TG'));
    }
    
    //#11
    vars.setDUMMYB1('');
    
    //#12
    if (vars.get('§FS_CLI_ZIP_TWI') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#13
    if (vars.get('§FS_CLI_TWI_BG') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#14
    if (vars.get('§FS_POLIESTERE') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#15
    if (vars.get('§FS_ACRILICO') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#16
    if (vars.get('§FS_CAM_TS') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#17
    if (vars.get('§FS_PVC') == vars.get('§SI')) {
    }
    
    //#18
    if (vars.get('§FS_CRISTAL') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#19
    if (vars.get('§FS_CRI_INF') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#20
    if (vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
