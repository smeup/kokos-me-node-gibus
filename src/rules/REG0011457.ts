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

export const REG0011457: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0011457
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // #2
    // COND:
    // §FS_CLI_ZIP_TWI = §SI
    // THEN:
    // *SET *CF = #2
    // #3
    // COND:
    // §FS_GU_56 = §SI AND §FS_FAM2_CLI_ZIP = §SI
    // THEN:
    // *SET *CF = #1
    // #4
    // COND:
    // §FS_CLI_TWI_BG = §SI
    // THEN:
    // *SET *CF = #1
    // #5
    // COND:
    // §MS_GU_CLI_ZIP = '02' AND §FS_FAM2_CLI_ZIP = §SI
    // THEN:
    // *SET *CF = #1
    // #6
    // COND:
    // §VER_TAP_T01 = '2020' OR §VER_TAP_T01 = ''
    // ELSE:
    // *SET *CF = #0
    // #7
    // COND:
    // §FS_CLI_TWI_BG = §SI AND §FS_TEL1_TWI = §NO
    // THEN:
    // *SET *CF = #0
    // #8
    // COND:
    // §FS_CLI_ZIP_TWI = §SI AND §FS_TEL1_TWI = §NO
    // THEN:
    // *SET §DUMMYN1 = [*CF - #1]
    // #9
    // COND:
    // §FS_CLI_ZIP_TWI = §SI AND §FS_TEL1_TWI = §NO
    // THEN:
    // *SET *CF  = §DUMMYN1
    // #10
    // COND:
    // §FS_CLI_ZIP_TWI = §SI AND §FS_TEL2_TWI = §NO
    // THEN:
    // *SET §DUMMYN1 = [*CF - #1]
    // #11
    // COND:
    // §FS_CLI_ZIP_TWI = §SI AND §FS_TEL2_TWI = §NO
    // THEN:
    // *SET *CF  = §DUMMYN1
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    
    //#2
    if (vars.get('§FS_CLI_ZIP_TWI') == vars.get('§SI')) {
        vars.setCF(2);
    }
    
    //#3
    if ((vars.get('§FS_GU_56') == vars.get('§SI')) && (vars.get('§FS_FAM2_CLI_ZIP') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    
    //#4
    if (vars.get('§FS_CLI_TWI_BG') == vars.get('§SI')) {
        vars.setCF(1);
    }
    
    //#5
    if ((vars.get('§MS_GU_CLI_ZIP') == '02') && (vars.get('§FS_FAM2_CLI_ZIP') == vars.get('§SI'))) {
        vars.setCF(1);
    }
    
    //#6
    if ((vars.get('§VER_TAP_T01') == '2020') || (vars.get('§VER_TAP_T01') == '')) {
    } else {
        vars.setCF(0);
    }
    
    //#7
    if ((vars.get('§FS_CLI_TWI_BG') == vars.get('§SI')) && (vars.get('§FS_TEL1_TWI') == vars.get('§NO'))) {
        vars.setCF(0);
    }
    
    //#8
    if ((vars.get('§FS_CLI_ZIP_TWI') == vars.get('§SI')) && (vars.get('§FS_TEL1_TWI') == vars.get('§NO'))) {
        vars.setDUMMYN1(vars.getCF() - 1);
    }
    
    //#9
    if ((vars.get('§FS_CLI_ZIP_TWI') == vars.get('§SI')) && (vars.get('§FS_TEL1_TWI') == vars.get('§NO'))) {
        vars.setCF(vars.get('§DUMMYN1'));
    }
    
    //#10
    if ((vars.get('§FS_CLI_ZIP_TWI') == vars.get('§SI')) && (vars.get('§FS_TEL2_TWI') == vars.get('§NO'))) {
        vars.setDUMMYN1(vars.getCF() - 1);
    }
    
    //#11
    if ((vars.get('§FS_CLI_ZIP_TWI') == vars.get('§SI')) && (vars.get('§FS_TEL2_TWI') == vars.get('§NO'))) {
        vars.setCF(vars.get('§DUMMYN1'));
    }
    // GENERATED

    return vars.output;
};
