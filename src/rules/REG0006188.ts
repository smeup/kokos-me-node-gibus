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

export const REG0006188: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006188
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = §VERN_FRONTALE
    // #2
    // COND:
    // §L_FRONTALE_TG > #0
    // THEN:
    // *SET *CF = §NR_PZ_FRONTALE
    // *SET *CON-B = §L_FRONTALE_TG
    // #3
    // COND:
    // §FS_TEL_RUL = §SI AND §FS_TEL_RUL_FRO <> §SI
    // THEN:
    // *SET *LG = ''
    // #4
    // COND:
    // §FS_CLI_ZIP_TWI = §SI AND §FS_TEL1_TWI = §NO
    // THEN:
    // *SET *LG = ''
    // #5
    // COND:
    // §FS_CLI_TWI_BG = §SI AND §FS_TEL1_TWI = §NO
    // THEN:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VERN_FRONTALE'));
    
    //#2
    if (vars.get('§L_FRONTALE_TG') > 0) {
        vars.setCF(vars.get('§NR_PZ_FRONTALE'));
        vars.setCON_B(vars.get('§L_FRONTALE_TG'));
    }
    
    //#3
    if (vars.get('§FS_TEL_RUL') == vars.get('§SI') && vars.get('§FS_TEL_RUL_FRO') != vars.get('§SI')) {
        vars.setLG('');
    }
    
    //#4
    if (vars.get('§FS_CLI_ZIP_TWI') == vars.get('§SI') && vars.get('§FS_TEL1_TWI') == vars.get('§NO')) {
        vars.setLG('');
    }
    
    //#5
    if (vars.get('§FS_CLI_TWI_BG') == vars.get('§SI') && vars.get('§FS_TEL1_TWI') == vars.get('§NO')) {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
