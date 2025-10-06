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

export const REG0001067: Rule = (iv) => {

    const vars = new Variables(iv);

    // GENERATED
    // RULE: REG0001067
    // REQUEST:
    // """
    // #1
    // THEN:
    // *SET *CF = #0
    // *SET *CON-A = §VERN_GUIDE
    // #2
    // COND:
    // §AUM_GUI_DX <> §AUM_GUI_SX
    // THEN:
    // *SET *CON-B = [§L_GUIDA_ZIP + §AUM_GUI_SX]
    // *SET *CF = #1
    // #3
    // COND:
    // §FS_CHI_VAR = §SI OR §FS_CLI_ZIP_TWI = §SI OR §FS_CLI_TWI_BG = §SI
    // THEN:
    // *SET *CON-A = 'P065'
    // #4
    // COND:
    // §FS_CLI_ZIP_TWI = §SI
    // THEN:
    // *SET *CON-B = [§ALTE_TC - #24,8 + §AUM_GUI_SX]
    // #5
    // COND:
    // §FS_CLI_TWI_BG = §SI
    // THEN:
    // *SET *CON-B = [§ALTE_TC - #24,8 + §AUM_GUI_SX]
    // #6
    // COND:
    // §FS_GU_56 = §SI AND §FS_FAM2_CLI_ZIP = §SI
    // THEN:
    // *SET *CON-A = 'P065'
    // """
    // RESPONSE:
    //#1
    vars.setCF(0);
    vars.setCON_A(vars.get('§VERN_GUIDE'));
    
    //#2
    if (vars.get('§AUM_GUI_DX') != vars.get('§AUM_GUI_SX')) {
        vars.setCON_B(vars.get('§L_GUIDA_ZIP') + vars.get('§AUM_GUI_SX'));
        vars.setCF(1);
    }
    
    //#3
    if (vars.get('§FS_CHI_VAR') == vars.get('§SI') || vars.get('§FS_CLI_ZIP_TWI') == vars.get('§SI') || vars.get('§FS_CLI_TWI_BG') == vars.get('§SI')) {
        vars.setCON_A('P065');
    }
    
    //#4
    if (vars.get('§FS_CLI_ZIP_TWI') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§ALTE_TC') - 24.8 + vars.get('§AUM_GUI_SX'));
    }
    
    //#5
    if (vars.get('§FS_CLI_TWI_BG') == vars.get('§SI')) {
        vars.setCON_B(vars.get('§ALTE_TC') - 24.8 + vars.get('§AUM_GUI_SX'));
    }
    
    //#6
    if (vars.get('§FS_GU_56') == vars.get('§SI') && vars.get('§FS_FAM2_CLI_ZIP') == vars.get('§SI')) {
        vars.setCON_A('P065');
    }
    // GENERATED

    return vars.output;
};
