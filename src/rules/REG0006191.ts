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

export const REG0006191: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006191
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A='P065'
    // *SET *CON-B=§L_RUL_2
    // #2
    // COND:
    // ( §FS_ZIP_LAT_RUL=§SI ) AND ( §L_RUL_2 > #0 )
    // THEN:
    // *SET *CF = #1
    // #3
    // COND:
    // ( §FS_CLI_ZIP_TWI = §SI ) AND ( §L_RUL_2 > #0 )
    // THEN:
    // *SET *CF = #1
    // #4
    // COND:
    // §FS_CLI_TWI_BG = §SI
    // THEN:
    // *SET *CF = #0
    // #5
    // COND:
    // §FS_CRISTAL_2 = §SI
    // THEN:
    // *SET *LG = ''
    // #6
    // COND:
    // §TES_TW_2_CRI = §SI
    // THEN:
    // *SET *LG = ''
    // #7
    // COND:
    // §FS_CLI_ZIP_TWI = §SI AND §FS_TEL2_TWI = §NO
    // THEN:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A('P065');
    vars.setCON_B(vars.get('§L_RUL_2'));
    
    //#2
    if ((vars.get('§FS_ZIP_LAT_RUL') == vars.get('§SI')) && (vars.get('§L_RUL_2') > 0)) {
        vars.setCF(1);
    }
    
    //#3
    if ((vars.get('§FS_CLI_ZIP_TWI') == vars.get('§SI')) && (vars.get('§L_RUL_2') > 0)) {
        vars.setCF(1);
    }
    
    //#4
    if (vars.get('§FS_CLI_TWI_BG') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#5
    if (vars.get('§FS_CRISTAL_2') == vars.get('§SI')) {
        vars.setLG('');
    }
    
    //#6
    if (vars.get('§TES_TW_2_CRI') == vars.get('§SI')) {
        vars.setLG('');
    }
    
    //#7
    if ((vars.get('§FS_CLI_ZIP_TWI') == vars.get('§SI')) && (vars.get('§FS_TEL2_TWI') == vars.get('§NO'))) {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
