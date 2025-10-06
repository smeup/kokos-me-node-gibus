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

export const REG0006184: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006184
    // REQUEST:
    // """
    // #1
    // COND:
    // §L_RUL_2 > #0
    // THEN:
    // *SET *CON-A = '0000'
    // *SET *CON-B = §L_RUL_2
    // *SET *CF = §NR_PZ_RUL_2
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // §FS_TEL_RUL = §SI
    // THEN:
    // *SET *LG = ''
    // #3
    // COND:
    // §FS_CLI_ZIP_TWI = §SI AND §FS_TEL2_TWI = §NO
    // THEN:
    // *SET *LG = ''
    // #4
    // COND:
    // §FS_CLI_TWI_BG = §SI AND §FS_TEL2_TWI = §NO
    // THEN:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§L_RUL_2') > 0) {
        vars.setCON_A('0000');
        vars.setCON_B(vars.get('§L_RUL_2'));
        vars.setCF(vars.get('§NR_PZ_RUL_2'));
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§FS_TEL_RUL') == vars.get('§SI')) {
        vars.setLG('');
    }
    
    //#3
    if (vars.get('§FS_CLI_ZIP_TWI') == vars.get('§SI') && vars.get('§FS_TEL2_TWI') == vars.get('§NO')) {
        vars.setLG('');
    }
    
    //#4
    if (vars.get('§FS_CLI_TWI_BG') == vars.get('§SI') && vars.get('§FS_TEL2_TWI') == vars.get('§NO')) {
        vars.setLG('');
    }
    
    // GENERATED

    return vars.output;
};
