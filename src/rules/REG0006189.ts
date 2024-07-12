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

export const REG0006189: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0006189
    // REQUEST:
    // """
    // #1
    // COND:
    // §L_FRO_2 > #0
    // THEN:
    // *SET *CON-A = §VERN_FRONTALE
    // *SET *CON-B = §L_FRO_2
    // *SET *CF = §NR_PZ_FRONTALE
    // ELSE:
    // *SET *LG = ''
    // #2
    // COND:
    // §FS_DUE_2G_ZIP = §SI OR §FS_DUE_0G_ZIP = §SI OR §FS_DUE_5_ZIP = §SI
    // THEN:
    // *SET *CF = #0
    // #3
    // COND:
    // §FS_DUE_1_ZIP = §SI
    // THEN:
    // *SET *CF = #0
    // #4
    // COND:
    // §FS_DUE_VER_ZIP = §SI
    // THEN:
    // *SET *CF = #0
    // #5
    // COND:
    // §FS_CLI_TWI_BG = §SI
    // THEN:
    // *SET *CF = #0
    // #6
    // COND:
    // §FS_CLI_ZIP_TWI = §SI AND §FS_TEL2_TWI = §NO
    // THEN:
    // *SET *LG = ''
    // """
    // RESPONSE:
    //#1
    if (vars.get('§L_FRO_2') > 0) {
        vars.setCON_A(vars.get('§VERN_FRONTALE'));
        vars.setCON_B(vars.get('§L_FRO_2'));
        vars.setCF(vars.get('§NR_PZ_FRONTALE'));
    } else {
        vars.setLG('');
    }
    
    //#2
    if (vars.get('§FS_DUE_2G_ZIP') == vars.get('§SI') || vars.get('§FS_DUE_0G_ZIP') == vars.get('§SI') || vars.get('§FS_DUE_5_ZIP') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#3
    if (vars.get('§FS_DUE_1_ZIP') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#4
    if (vars.get('§FS_DUE_VER_ZIP') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#5
    if (vars.get('§FS_CLI_TWI_BG') == vars.get('§SI')) {
        vars.setCF(0);
    }
    
    //#6
    if (vars.get('§FS_CLI_ZIP_TWI') == vars.get('§SI') && vars.get('§FS_TEL2_TWI') == vars.get('§NO')) {
        vars.setLG('');
    }
    // GENERATED

    return vars.output;
};
