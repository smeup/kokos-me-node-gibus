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

export const REG0001921: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001921
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_FAM2_ISOLA = §SI AND §FS_ACC_INI = §SI
    // THEN:
    // *SET *CF = #2
    // #3
    // COND:
    // §FS_FAM2_ISOLA = §SI AND §FS_ACC_FIN = §SI
    // THEN:
    // *SET *CF = #2
    // #4
    // COND:
    // §FS_FAM2_ISOLA = §SI AND §FS_ACC_CEN = §SI
    // THEN:
    // *SET *CF = #4
    // #5
    // COND:
    // §FS_FAM2_ADDF = §SI AND §TI_ACC_TW = '02' AND §FS_ACC_INI = §SI
    // THEN:
    // *SET *CF = #2
    // #6
    // COND:
    // §FS_FAM2_ADDF = §SI AND §TI_ACC_TW = '02' AND §FS_ACC_CEN = §SI
    // THEN:
    // *SET *CF = #4
    // #7
    // COND:
    // §FS_FAM2_ADDF = §SI AND §TI_ACC_TW = '02' AND §FS_ACC_FIN = §SI
    // THEN:
    // *SET *CF = #2
    // #8
    // COND:
    // §FS_FAM2_ADDF = §SI AND §TI_ACC_TW = '01' AND §FS_ACC_INI = §SI
    // THEN:
    // *SET *CF = #1
    // #9
    // COND:
    // §FS_FAM2_ADDF = §SI AND §TI_ACC_TW = '01' AND §FS_ACC_CEN = §SI
    // THEN:
    // *SET *CF = #2
    // #10
    // COND:
    // §FS_FAM2_ADDF = §SI AND §TI_ACC_TW = '01' AND §FS_ACC_FIN = §SI
    // THEN:
    // *SET *CF = #1
    // #11
    // COND:
    // §FS_FAM2_ADDL = §SI AND §TI_ACC_TW = '01' AND §FS_ACC_FIN = §SI
    // THEN:
    // *SET *CF = #2
    // #12
    // COND:
    // §FS_FAM2_ADDL = §SI AND §TI_ACC_TW = '01' AND §FS_ACC_CEN = §SI
    // THEN:
    // *SET *CF = #4
    // #13
    // COND:
    // §FS_FAM2_ADDL = §SI AND §TI_ACC_TW = '01' AND §FS_ACC_FIN = §SI
    // THEN:
    // *SET *CF = #2
    // #14
    // COND:
    // §FS_FAM2_ADDL = §SI AND §TI_ACC_TW = '02' AND §FS_ACC_INI = §SI
    // THEN:
    // *SET *CF = #1
    // #15
    // COND:
    // §FS_FAM2_ADDL = §SI AND §TI_ACC_TW = '02' AND §FS_ACC_CEN = §SI
    // THEN:
    // *SET *CF = #2
    // #16
    // COND:
    // §FS_FAM2_ADDL = §SI AND §TI_ACC_TW = '02' AND §FS_ACC_FIN = §SI
    // THEN:
    // *SET *CF = #1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_FAM2_ISOLA') == vars.get('§SI') && vars.get('§FS_ACC_INI') == vars.get('§SI')) {
        vars.setCF(2);
    }
    
    //#3
    if (vars.get('§FS_FAM2_ISOLA') == vars.get('§SI') && vars.get('§FS_ACC_FIN') == vars.get('§SI')) {
        vars.setCF(2);
    }
    
    //#4
    if (vars.get('§FS_FAM2_ISOLA') == vars.get('§SI') && vars.get('§FS_ACC_CEN') == vars.get('§SI')) {
        vars.setCF(4);
    }
    
    //#5
    if (vars.get('§FS_FAM2_ADDF') == vars.get('§SI') && vars.get('§TI_ACC_TW') == '02' && vars.get('§FS_ACC_INI') == vars.get('§SI')) {
        vars.setCF(2);
    }
    
    //#6
    if (vars.get('§FS_FAM2_ADDF') == vars.get('§SI') && vars.get('§TI_ACC_TW') == '02' && vars.get('§FS_ACC_CEN') == vars.get('§SI')) {
        vars.setCF(4);
    }
    
    //#7
    if (vars.get('§FS_FAM2_ADDF') == vars.get('§SI') && vars.get('§TI_ACC_TW') == '02' && vars.get('§FS_ACC_FIN') == vars.get('§SI')) {
        vars.setCF(2);
    }
    
    //#8
    if (vars.get('§FS_FAM2_ADDF') == vars.get('§SI') && vars.get('§TI_ACC_TW') == '01' && vars.get('§FS_ACC_INI') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#9
    if (vars.get('§FS_FAM2_ADDF') == vars.get('§SI') && vars.get('§TI_ACC_TW') == '01' && vars.get('§FS_ACC_CEN') == vars.get('§SI')) {
        vars.setCF(2);
    }
    
    //#10
    if (vars.get('§FS_FAM2_ADDF') == vars.get('§SI') && vars.get('§TI_ACC_TW') == '01' && vars.get('§FS_ACC_FIN') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#11
    if (vars.get('§FS_FAM2_ADDL') == vars.get('§SI') && vars.get('§TI_ACC_TW') == '01' && vars.get('§FS_ACC_FIN') == vars.get('§SI')) {
        vars.setCF(2);
    }
    
    //#12
    if (vars.get('§FS_FAM2_ADDL') == vars.get('§SI') && vars.get('§TI_ACC_TW') == '01' && vars.get('§FS_ACC_CEN') == vars.get('§SI')) {
        vars.setCF(4);
    }
    
    //#13
    if (vars.get('§FS_FAM2_ADDL') == vars.get('§SI') && vars.get('§TI_ACC_TW') == '01' && vars.get('§FS_ACC_FIN') == vars.get('§SI')) {
        vars.setCF(2);
    }
    
    //#14
    if (vars.get('§FS_FAM2_ADDL') == vars.get('§SI') && vars.get('§TI_ACC_TW') == '02' && vars.get('§FS_ACC_INI') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#15
    if (vars.get('§FS_FAM2_ADDL') == vars.get('§SI') && vars.get('§TI_ACC_TW') == '02' && vars.get('§FS_ACC_CEN') == vars.get('§SI')) {
        vars.setCF(2);
    }
    
    //#16
    if (vars.get('§FS_FAM2_ADDL') == vars.get('§SI') && vars.get('§TI_ACC_TW') == '02' && vars.get('§FS_ACC_FIN') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    // GENERATED

    return vars.output;
};
