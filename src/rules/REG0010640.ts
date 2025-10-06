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

export const REG0010640: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0010640
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
    // §FS_CLI_ZIP_TWI = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #4
    // COND:
    // §DUMMYB1 = §SI AND §L_FRO_2 > #0
    // THEN:
    // *SET *CF = §NR_PZ_FRONTALE
    // *SET *CON-B = §L_FRO_2
    // #5
    // THEN:
    // *SET §DUMMYB1 = ''
    // #6
    // COND:
    // §TES_TW_2_POL= §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #7
    // COND:
    // §TES_TW_2_ACR = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #8
    // COND:
    // §TES_TW_2_PVC = §SI
    // #9
    // COND:
    // §TES_TW_2_CRI = §SI
    // THEN:
    // *SET §DUMMYB1 = §SI
    // #10
    // COND:
    // §DUMMYB1 = §SI
    // THEN:
    // *SET *LG = ''
    // #11
    // COND:
    // §FS_CLI_ZIP_TWI = §SI AND §FS_TEL2_TWI = §NO
    // THEN:
    // *SET *LG = ''
    // #12
    // COND:
    // §FS_CLI_TWI_BG = §SI AND §FS_TEL2_TWI = §NO
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
    if (vars.get('§FS_CLI_ZIP_TWI') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#4
    if (vars.get('§DUMMYB1') == vars.get('§SI') && vars.get('§L_FRO_2') > 0) {
        vars.setCF(vars.get('§NR_PZ_FRONTALE'));
        vars.setCON_B(vars.get('§L_FRO_2'));
    }
    
    //#5
    vars.setDUMMYB1('');
    
    //#6
    if (vars.get('§TES_TW_2_POL') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#7
    if (vars.get('§TES_TW_2_ACR') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#8
    if (vars.get('§TES_TW_2_PVC') == vars.get('§SI')) {
    }
    
    //#9
    if (vars.get('§TES_TW_2_CRI') == vars.get('§SI')) {
        vars.setDUMMYB1(vars.get('§SI'));
    }
    
    //#10
    if (vars.get('§DUMMYB1') == vars.get('§SI')) {
        vars.setLG('');
    }
    
    //#11
    if (vars.get('§FS_CLI_ZIP_TWI') == vars.get('§SI') && vars.get('§FS_TEL2_TWI') == vars.get('§NO')) {
        vars.setLG('');
    }
    
    //#12
    if (vars.get('§FS_CLI_TWI_BG') == vars.get('§SI') && vars.get('§FS_TEL2_TWI') == vars.get('§NO')) {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
